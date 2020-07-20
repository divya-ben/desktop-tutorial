import { ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class calculator{

    firstBox:ElementFinder;
    secondBox:ElementFinder;
    oper:ElementFinder;
    res:ElementFinder;
    operValue:ElementArrayFinder;
    goButton:ElementFinder;
    subtract:ElementFinder;
    multiply:ElementFinder;
    add:ElementFinder;
    divide:ElementFinder;

    constructor()
    {
        this.firstBox = element(by.model('first'));
        this.secondBox = element(by.model('second'));
        this.oper = element(by.model('operator'));
        this.operValue = element.all(by.tagName('option'));
        this.add = element(by.cssContainingText('option','+'));
        this.divide = element(by.cssContainingText('option','/'));
        this.subtract = element(by.cssContainingText('option','-'));
        this.multiply = element(by.cssContainingText('option','*'));
        this.goButton = element(by.id('gobutton'));   
        this.res = element(by.css('h2[class="ng-binding"]'));
        

    }



}