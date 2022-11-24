describe("Quotes App", () => {


  beforeEach(() => {
      
  
      cy.visit("http://localhost:3000");
  
  })
  
  const firstNameInput = () => cy.get("input[name=firstName]");
  const lastNameInput = () => cy.get("input[name=lastName]");
  const passwordInput = () => cy.get("input[name=password]");
  const emailInput = () => cy.get(`input[name="email"]`);
  const submitBtn = () => cy.get(`button[id="submitBtn"]`);
  const selectBox = () => cy.get(`select[id="roleSelect"]`)

it("sanity check to make sure tests work", () => {

  expect(1 + 2).to.equal(3);
  expect(2 + 2).to.equal(4);
  expect({}).not.to.equal({});
  expect({}).to.eql({});

})

it("make sure all the necessary inputs exist and show up on the page", () => {
  firstNameInput().should("exist");
  lastNameInput().should("exist");
  passwordInput().should("exist");
  emailInput().should('exist');
  submitBtn().should("exist");
})

describe("filling out inputs", () => {
  it("can navigate to the site", () => {
    cy.url().should("include", "localhost");
  })

  it("can type in inputs", () => {
    firstNameInput()
    .should("have.value", "")
    .type("BOOTY BOOTY BOOTY")
    .should("have.value", "BOOTY BOOTY BOOTY");

    lastNameInput()
    .should("have.value", "")
    .type("BOOTY BOOTY BOOTY")
    .should("have.value", "BOOTY BOOTY BOOTY");
    
    passwordInput()
    .should("have.value", "")
    .type("BOOTY BOOTY BOOTY")
    .should("have.value", "BOOTY BOOTY BOOTY");

    emailInput()
    .should("have.value", "")
    .type("BOOTY@mail.com")
    .should("have.value", "BOOTY@mail.com");
  })
})


describe("Adding a new card", () => {
  it("can submit a new card", () => {
    firstNameInput().type("BUTTHOLE MCGEE");
    lastNameInput().type("CHACHACHACHACHA");
    passwordInput().type("Tis only a flesh wound");
    emailInput().type("jamminalamminQ@gmail.com");
    selectBox().select("Bears");
    submitBtn().click();

    cy.contains("BUTTHOLE MCGEE");
    cy.contains("CHACHACHACHACHA");
    cy.contains("Tis only a flesh wound");
    cy.contains("jamminalamminQ@gmail.com");
  })



})




})