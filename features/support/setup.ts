import { setDefaultTimeout } from 'cucumber';
import {browser} from "protractor";

browser.waitForAngularEnabled(false);
setDefaultTimeout(15000);
