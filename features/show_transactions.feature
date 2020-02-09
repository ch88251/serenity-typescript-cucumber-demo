Feature: Show Transactions

  In order to reconcile my account
  As a ZeroBank customer
  I would like to view account transactions

  Scenario: View checking account transactions

    Given Susan has a checking account
     When she opens the application
      And she selects that online banking menu
      And she selects account summary
     Then she should see her checking account

  Scenario: View savings account transactions

    Given Susan has a savings account
    When she opens the application
    And she selects that online banking menu
    And she selects account summary
    Then she should see her savings account