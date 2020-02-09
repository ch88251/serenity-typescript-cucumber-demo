import { Ensure, equals } from '@serenity-js/assertions';
import {Actor, actorCalled, actorInTheSpotlight, engage, Task, WithStage} from '@serenity-js/core';
import {Click, Enter, isClickable, isVisible, Navigate, Text, Wait} from '@serenity-js/protractor';
import { Before, Given, Then, When } from 'cucumber';
import { Actors } from '../support/screenplay';
import {OnlineBankingPage} from "../support/screenplay/zerobank/ui/OnlineBankingPage";
import {TopRowLinks} from "../support/screenplay/zerobank/ui/TopRowLinks";
import {LoginPage} from "../support/screenplay/zerobank/ui/LoginPage";
import {CheckLoginStatus} from "../support/screenplay/zerobank/ui/CheckLoginStatus";
import {AccountSummaryPage} from "../support/screenplay/zerobank/ui/AccountSummaryPage";

Before(() => engage(new Actors()));

Given(/(.*) is on the banking website/, (actorName: string) =>

    actorCalled(actorName).attemptsTo(
        Navigate.to('/'),
    ));

When(/(?:he|she) selects the online banking menu/, () =>
    actorInTheSpotlight().attemptsTo(
        Click.on(TopRowLinks.onlineBankingMenu)
    ));

Then(/(?:he|she) should see a heading called (.*)/, (expectedHeading: string) =>
    actorInTheSpotlight().attemptsTo(
        Ensure.that(Text.of(OnlineBankingPage.pageHeading), equals(expectedHeading))
    ));

Then(/(?:he|she) should see a feature called (.*)/, (expectedHeading: string) =>
    actorInTheSpotlight().attemptsTo(
        Ensure.that(Text.of(OnlineBankingPage.accountSummaryHeadingLink), equals(expectedHeading))
    ));

When(/(?:he|she) opens the account summary/, () =>
    actorInTheSpotlight().attemptsTo(
        Wait.until(OnlineBankingPage.accountSummaryHeadingLink, isClickable()),
        Click.on(OnlineBankingPage.accountSummaryHeadingLink)
    ));

Then(/(?:he|she) should be on the login page/, () =>
    actorInTheSpotlight().attemptsTo(
        Wait.until(LoginPage.pageHeading, isVisible())
    ));

When(/(?:he|she) signs in with valid credentials/, () =>
    actorInTheSpotlight().attemptsTo(
        Enter.theValue('username').into(LoginPage.usernameField),
        Enter.theValue('password').into(LoginPage.passwordField),
        Click.on(LoginPage.signInButton)
    ));

Then(/(?:he|she) should see her account summary page/, () =>
    actorInTheSpotlight().attemptsTo(
        Ensure.that(Text.of(AccountSummaryPage.cashAccountHeading), equals("Cash Accounts")),
        Ensure.that(Text.of(AccountSummaryPage.investmentAccountHeading), equals("Investment Accounts")),
        Ensure.that(Text.of(AccountSummaryPage.creditAccountHeading), equals("Credit Accounts")),
        Ensure.that(Text.of(AccountSummaryPage.loanAccountHeading), equals("Loan Accounts"))
    ));