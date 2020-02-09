Feature: View Accounts

  In order to take action on my accounts
  As a ZeroBank customer
  I would like to view all my accounts

  Scenario: Customer has a checking account and wants to view the details

    Given Susan is on the banking website
     When she selects the online banking menu
      And she opens the account summary
     Then she should be on the login page
     When she signs in with valid credentials
     Then she should see her account summary page