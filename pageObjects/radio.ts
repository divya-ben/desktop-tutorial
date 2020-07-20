import { ElementFinder, element, ElementArrayFinder, by } from "protractor";

export class radio {

    color:ElementArrayFinder;
    location: ElementArrayFinder;

    constructor()
    {
        this.color = element.all(by.css('div[class="radiobtn"]'));
        this.location = element.all(by.css('input[type="checkbox"]'));

    }
}