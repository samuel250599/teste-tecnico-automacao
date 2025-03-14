Feature: Login
  Scenario: Successful login
    Given I navigate to login page
    When I enter valid credentials
    Then I should see dashboard