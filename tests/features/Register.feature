
Feature: Verfiy Registration functionlity

     As a user they should be able to register into the system 


  Scenario: User should be able to register successfully with valid details
    Given User is on the Parabank registration page
    And the user has a valid "registerLink" to register
    When the user fill in the registration form and enters "firstName" and "lastName"
    And the user fill in the "address" having "city", state "state" and zipcode "zipCode"
    And the user fill in the "phoneNumber" and "ssn"
    And the user fill in the "userName" , "password and "confirmPassword"
    And the user clicks on the "registerButton"
    Then the user should be able to register successfully into the application



  


