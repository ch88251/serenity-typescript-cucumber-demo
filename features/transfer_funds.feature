Feature: Transfer Funds

  In order to control the funds in my accounts
  As a ZeroBank customer
  I would like to transfer funds between accounts

  Scenario: Transfer funds from savings account to checking account where savings account has sufficient funds

    Given Susan has a checking account
     When she opens the application
      And she selects that online banking menu
      And she selects account summary
     Then she should see her checking account

  Scenario: Transfer funds from savings account to checking account where savings account has insufficient funds

    Given Susan has a savings account
    When she opens the application
    And she selects that online banking menu
    And she selects account summary
    Then she should see her savings account