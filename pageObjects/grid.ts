import { ElementArrayFinder, element, by, ElementFinder } from "protractor";

export class grid {

    employees:ElementArrayFinder;
    employeeId:ElementFinder;

    constructor()
    {
        this.employees = element.all(by.repeater('Obj in gridData track by $index'));
        this.employeeId = element(by.css('td:nth-child(3)'));
    }


}