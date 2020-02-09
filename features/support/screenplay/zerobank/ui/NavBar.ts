import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class NavBar {
    static userIcon = Target.the('user icon').located(by.css('.icon-user'));
    static userName = Target.the('user name').located(by.css('.dropdown:nth-child(3) > .dropdown-toggle'))
}
