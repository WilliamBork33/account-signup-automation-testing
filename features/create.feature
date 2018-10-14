@create
Feature: Create

    A client should be able to create an account in Mega

    Scenario: A client must be able to create an account
        Given a client is on the register page
        When the client info is submitted
        Then the account is created
