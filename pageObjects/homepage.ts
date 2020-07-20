import { ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class homepage{

    loginButton:ElementFinder;
    dropdownButton:ElementFinder;
    calculatorButton:ElementFinder;
    radioButton:ElementFinder;
    grid:ElementFinder;
    scroll:ElementFinder;
    socialAccount:ElementFinder;
    quitSmoking:ElementFinder;

    constructor()
    {
        this.loginButton = element(by.linkText('Login'));
        this.dropdownButton = element(by.linkText('Dropdown'));
        this.calculatorButton = element(by.linkText('Calculator'));
        this.grid = element(by.linkText('Grid'));
        this.scroll = element(by.linkText('Scroll & Search'));
        this.socialAccount = element(by.linkText('Social Account Project'));
        this.radioButton = element(by.linkText('Radoi button/Checkbox'));
    }



}