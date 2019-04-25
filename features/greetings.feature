Feature: Greetings

  Scenario: Hollybot replies when you say hello
    Given I am connected to Slack
    When I say "hello"
    Then Hollybot should reply with "yeah, whatever."
