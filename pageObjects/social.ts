import { ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class social{

    username:ElementFinder;
    password:ElementFinder;
    signin:ElementFinder;
    friends:ElementArrayFinder;
    submit:ElementFinder;

    constructor()
    {
        this.username = element(by.model('name'));
        this.password = element(by.model('password'));
        this.signin = element(by.buttonText('Sign in'));
        this.friends = element.all(by.repeater('friendObj in Frienddetails track by $index'));
        this.submit = element(by.name('submit'));
    }


}