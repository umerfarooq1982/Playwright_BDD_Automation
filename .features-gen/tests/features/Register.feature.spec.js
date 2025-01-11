/** Generated from: tests\features\Register.feature */
import { test } from "../../../tests/fixture/fixture.js";

test.describe("Verfiy Registration functionlity", () => {

  test("User should be able to register successfully with valid details", async ({ Given, registerPage, And, When, Then }) => {
    await Given("User is on the Parabank registration page", null, { registerPage });
    await And("the user has a valid \"registerLink\" to register", null, { registerPage });
    await When("the user fill in the registration form and enters \"firstName\" and \"lastName\"", null, { registerPage });
    await And("the user fill in the \"address\" having \"city\", state \"state\" and zipcode \"zipCode\"", null, { registerPage });
    await And("the user fill in the \"phoneNumber\" and \"ssn\"", null, { registerPage });
    await And("the user fill in the \"userName\" , \"password and \"confirmPassword\"", null, { registerPage });
    await And("the user clicks on the \"registerButton\"", null, { registerPage });
    await Then("the user should be able to register successfully into the application");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\features\\Register.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "User should be able to register successfully with valid details": {"pickleLocation":"7:3"},
};