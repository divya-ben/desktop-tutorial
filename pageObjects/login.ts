import { ElementFinder, element, by } from "protractor";

export class login{

    username:ElementFinder;
    password:ElementFinder;
    signin:ElementFinder;

    constructor()
    {
        this.username = element(by.id('username'));
        this.password = element(by.id('password'));
        this.signin = element(by.id('submit'));
    }

}