Feature: Browser Like Feature
  Test that looks like browser test
  Background: Do browser stuff
    Given Browser is opened
    Given Logged in as admin
  @ExternalId=556
  Scenario: Open user profile
    When Click on user profile button
    Then Navigate to user profile page
  @ExternalId=557
  Scenario: Open create modal
    When Click on add button
    Then Create modal is opened
