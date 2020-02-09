import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class TopRowLinks {
    static homeMenu = Target.the('home menu').located(by.css('#homeMenu strong'));
    static onlineBankingMenu = Target.the('online banking menu').located(by.css('#onlineBankingMenu strong'));
    static feedBackMenu = Target.the('feedback menu').located(by.model('#feedback strong'));
}
