import { Task } from '@serenity-js/core';
import {Click, isVisible, Text} from '@serenity-js/protractor';
import {Ensure, equals, not} from "@serenity-js/assertions";
import {NavBar} from "./NavBar";

export const CheckLoginStatus = () =>
    Task.where(`#actor checks login status`,
        Ensure.that(NavBar.userIcon, not(isVisible()))
    );