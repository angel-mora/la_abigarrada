Feature: Landing Page
  As a visitor
  I want to see the blog's manifesto
  So that I can understand its purpose

  Scenario: Viewing the manifesto
    Given I am on the home page
    Then I should see "Identidades múltiples."
    And I should see "No buscamos la armonía cómoda"
