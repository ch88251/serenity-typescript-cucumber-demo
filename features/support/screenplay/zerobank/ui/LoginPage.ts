import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class LoginPage {
    static pageHeading = Target.the('page heading').located(by.css('h3'));
    static usernameField = Target.the('username field').located(by.css('#user_login'));
    static passwordField = Target.the('password field').located(by.css('#user_password'));
    static signInButton = Target.the('password field').located(by.css('.btn'));
}