import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class OnlineBankingPage {
    static pageHeading = Target.the('page heading').located(by.css('h1'));

    static accountSummaryHeadingLink = Target.the('account summary heading link')
        .located(by.css('#account_summary_link'))
}