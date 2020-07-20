"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropdown = void 0;
const protractor_1 = require("protractor");
class dropdown {
    constructor() {
        this.countrybox = protractor_1.element(protractor_1.by.model('myCountry'));
        this.countryList = protractor_1.element.all(protractor_1.by.repeater('country in dropDownJson'));
        //this.countryList = element.all(by.tagName('option'));
        this.submit = protractor_1.element(protractor_1.by.id("submit"));
    }
    getDropDownOption(country) {
        return protractor_1.element(protractor_1.by.cssContainingText('option', country));
    }
}
exports.dropdown = dropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9kcm9wZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBNEU7QUFFNUUsTUFBYSxRQUFRO0lBUWpCO1FBRUksSUFBSSxDQUFDLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLHVEQUF1RDtRQUN2RCxJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRzNDLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxPQUFjO1FBRTVCLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFM0QsQ0FBQztDQUtKO0FBM0JELDRCQTJCQyJ9