"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grid = void 0;
const protractor_1 = require("protractor");
class grid {
    constructor() {
        this.employees = protractor_1.element.all(protractor_1.by.repeater('Obj in gridData track by $index'));
        this.employeeId = protractor_1.element(protractor_1.by.css('td:nth-child(3)'));
    }
}
exports.grid = grid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL2dyaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQTRFO0FBRTVFLE1BQWEsSUFBSTtJQUtiO1FBRUksSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztDQUdKO0FBWkQsb0JBWUMifQ==