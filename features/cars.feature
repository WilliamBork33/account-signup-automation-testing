@cars
Feature: Cars

    As a client I should be able to search cars after login

    Scenario: A client must be able to select cars
        Given a client is on the cars page
        When the desired filters are applied
        Then the desired cars are displayed
