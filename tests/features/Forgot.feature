 Feature: Verify Forgot Login Info functionlity 

      As a user they should be able customer look up in to the system 
//@login
 Scenario: User should be able to lookup successfully with valid credentials 
 Given  the user is onto the customer lookup page
 And the user has a valid "forgotlogininfoLink" to register
 When the user fill in the lookupform and enters "firstName" and "lastName"
 And the user fill in the "address" having "city", state "state" and zipcode "zipCode"
 And the user fill in the "ssn"
 And the user fill in the "userName" , "password and "confirmPassword"
 And the user clicks on the "findmyloginInfo"
 Then the user should be able to look up login info 