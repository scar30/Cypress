describe('LinkedIn Sign Up', () => {
  beforeEach(() => {
    cy.visit('https://www.linkedin.com/login');
  });

  it('should show error for wrong username and correct password', () => {
    cy.get('input[id="username"]').type("wrongusername");
    cy.wait(1000);
    cy.get('input[id="password"]').type("correctpassword");
    cy.wait(1000);
    cy.get('button[aria-label="Sign in"]').click();
    cy.wait(1000);
    cy.get("body").contains("Couldn’t find a LinkedIn account associated with this email.").should('be.visible');
    cy.wait(1000);

  });

  it('should show error with correct username and wrong password', () => {
    cy.get('input[id="username"]').type("correctusername");
    cy.wait(1000);
    cy.get('input[id="password"]').type("wrongpassword");
    cy.wait(1000);
    cy.get('button[aria-label="Sign in"]').click();
    cy.wait(1000);
    cy.get("body").contains("That's not the right password.").should('be.visible');
    cy.wait(1000);
  });

  it('should show error for wrong username and wrong password', () => {
     cy.get('input[id="username"]').type("wrongusername");
    cy.wait(1000);
    cy.get('input[id="password"]').type("wrongpassword");
    cy.wait(1000);
    cy.get('button[aria-label="Sign in"]').click();
    cy.wait(1000);
    cy.get("body").contains("Couldn’t find a LinkedIn account associated with this email.").should('be.visible');
    cy.wait(1000);

  });

  it('should successfully sign up with correct username and password', () => {
     cy.get('input[id="username"]').type("correctusername");
    cy.wait(1000);
    cy.get('input[id="password"]').type("correctpassword");
    cy.wait(1000);
    cy.get('button[aria-label="Sign in"]').click();
    cy.wait(1000);

  });
});
