/** Generated from: tests\features\Login.feature */
import { test } from "../../../tests/fixture/fixture.js";

test.describe("Verify Login functionlity", () => {

  test("User should be able to login successfully with valid credentials", { tag: ["@login"] }, async ({ Given, loginPage, When, And, Then }) => {
    await Given("the user is onto the login page", null, { loginPage });
    await When("the user enter valid userName \"username\" and passowrd \"password\"", null, { loginPage });
    await And("the user click on login button", null, { loginPage });
    await Then("user should be login successfully into application", null, { loginPage });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\features\\Login.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "User should be able to login successfully with valid credentials": {"pickleLocation":"5:2","tags":["@login"],"ownTags":["@login"]},
};