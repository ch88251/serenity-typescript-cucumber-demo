import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class AccountSummaryPage {

    static cashAccountHeading = Target.the('cash account heading')
        .located(by.cssContainingText('h2', 'Cash Accounts'));

    static investmentAccountHeading = Target.the('investment account heading')
        .located(by.cssContainingText('h2', 'Investment Accounts'));

    static creditAccountHeading = Target.the('credit account heading')
        .located(by.cssContainingText('h2', 'Credit Accounts'));

    static loanAccountHeading = Target.the('loan account heading')
        .located(by.cssContainingText('h2', 'Loan Accounts'));
}