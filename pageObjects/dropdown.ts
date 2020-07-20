import { ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class dropdown{

    countrybox:ElementFinder;
    countryList:ElementArrayFinder;
    countryOption:ElementFinder;
    submit:ElementFinder;


    constructor()
    {
        this.countrybox = element(by.model('myCountry'));
        this.countryList = element.all(by.repeater('country in dropDownJson'));
        //this.countryList = element.all(by.tagName('option'));
        this.submit = element(by.id("submit"));

        
    }

    getDropDownOption(country:string) : ElementFinder
    {
        return element(by.cssContainingText('option',country));

    }




}