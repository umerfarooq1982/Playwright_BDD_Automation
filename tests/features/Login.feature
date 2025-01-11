 Feature: Verify Login functionlity 

      As a user they should be able to login in to the system 
@login
 Scenario: User should be able to login successfully with valid credentials 
 Given  the user is onto the login page
 When the user enter valid userName "username" and passowrd "password"
 And the user click on login button 
 Then user should be login successfully into application 