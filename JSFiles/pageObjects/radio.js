"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.radio = void 0;
const protractor_1 = require("protractor");
class radio {
    constructor() {
        this.color = protractor_1.element.all(protractor_1.by.css('div[class="radiobtn"]'));
        this.location = protractor_1.element.all(protractor_1.by.css('input[type="checkbox"]'));
    }
}
exports.radio = radio;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9yYWRpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBNEU7QUFFNUUsTUFBYSxLQUFLO0lBS2Q7UUFFSSxJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7SUFFbEUsQ0FBQztDQUNKO0FBWEQsc0JBV0MifQ==