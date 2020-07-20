"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const homepage_1 = require("../pageObjects/homepage");
const login_1 = require("../pageObjects/login");
const dropdown_1 = require("../pageObjects/dropdown");
const calculator_1 = require("../pageObjects/calculator");
const chai_1 = __importDefault(require("chai"));
const grid_1 = require("../pageObjects/grid");
const excelOp_1 = require("../excelOp");
const social_1 = require("../pageObjects/social");
const radio_1 = require("../pageObjects/radio");
var expect = chai_1.default.expect;
var assert = chai_1.default.assert;
let home = new homepage_1.homepage();
let log = new login_1.login();
let drop = new dropdown_1.dropdown();
let calc = new calculator_1.calculator();
let gridObj = new grid_1.grid();
let userdet = new excelOp_1.userDetails();
let soc = new social_1.social();
let rad = new radio_1.radio();
cucumber_1.Given('user navigates to Protractor website', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('http://www.helpingtesters.com/practice/protractor/index.php');
}));
cucumber_1.When('user clicks on {string}', (link) => __awaiter(void 0, void 0, void 0, function* () {
    switch (link) {
        case 'Login':
            yield home.loginButton.click();
            break;
        case 'Dropdown':
            yield home.dropdownButton.click();
            break;
        case 'Calculator':
            yield home.calculatorButton.click();
            break;
        case 'Grid':
            yield home.grid.click();
            break;
        case 'Social':
            yield home.socialAccount.click();
            break;
        case 'Radio':
            yield home.radioButton.click();
    }
}));
cucumber_1.Then('user signs in with {string} and {string}', (uname, pass) => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.sleep(2000);
    yield log.username.sendKeys(uname);
    yield log.password.sendKeys(pass);
    yield log.signin.click();
}));
cucumber_1.Then('user selects {string} from list', (country) => __awaiter(void 0, void 0, void 0, function* () {
    yield drop.countrybox.click();
    yield drop.getDropDownOption(country).click();
}));
cucumber_1.Then('user enters {string},{string},{string} value', (value1, value2, oper) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.firstBox.sendKeys(value1);
    yield calc.oper.click();
    if (oper == '-') {
        yield calc.subtract.click();
    }
    else if (oper == '*') {
        yield calc.multiply.click();
    }
    yield calc.secondBox.sendKeys(value2);
}));
cucumber_1.Then('result equals {string}', (result) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.goButton.click();
    protractor_1.browser.sleep(2000);
    let output = yield calc.res.getText();
    console.log("OUTPUT" + output);
    expect(output).to.equal(result);
}));
cucumber_1.Then('grid contains {string}', function (empID) {
    return __awaiter(this, void 0, void 0, function* () {
        let ids = new Array();
        yield gridObj.employees.each((item) => __awaiter(this, void 0, void 0, function* () {
            let id = yield item.element(protractor_1.by.css('td:nth-child(3)')).getText();
            ids.push(id);
        }));
        ids.forEach(function (id1) {
            console.log("ID " + id1);
        });
        assert.include(ids, empID);
    });
});
cucumber_1.Then('user enters username, password and signs in', () => __awaiter(void 0, void 0, void 0, function* () {
    /*for(let i=0; i<userdet.unames.length;i++)
    {
        await soc.username.sendKeys(userdet.unames[i]);
        await soc.password.sendKeys(userdet.passwords[i]);
        await soc.signin.click();
        await soc.username.clear();
        await soc.password.clear();
    }*/
    yield soc.username.sendKeys(userdet.unames[1]);
    yield soc.password.sendKeys(userdet.passwords[1]);
    yield soc.signin.click();
    yield protractor_1.browser.switchTo().alert().accept(); //Handle the alert
    protractor_1.browser.sleep(2000);
    yield soc.friends.each((item) => __awaiter(void 0, void 0, void 0, function* () {
        let selection = yield item.element(protractor_1.by.css('span[class="socialA-lable ng-binding"]')).getText();
        if (selection.includes('Ritish')) {
            yield item.element(protractor_1.by.css('span[class="socialA-lable ng-binding"]')).click();
        }
    }));
    /*userdet.unames.forEach(function(value){

        
    });*/
}));
/*Then('user selects {string}, {string} and {string}', async (color, state, city) => {

    await rad.color.each(async (item) => {

       if(item.element(by.cssContainingText('label', color)))
       {
         await item.element(by.cssContainingText('label', color)).click();
       }
         
      
    });

    await rad.location.each(async (item) => {

        if(item.element(by.cssContainingText('label', state)))
        {
            browser.actions().mouseMove(item.element(by.cssContainingText('label', state))).click();
        }

        if(item.element(by.cssContainingText('label', city)))
        {
            browser.actions().mouseMove(item.element(by.cssContainingText('label', city))).click();
        }


    });


});*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMkNBQXFGO0FBRXJGLHNEQUFtRDtBQUNuRCxnREFBNkM7QUFDN0Msc0RBQW1EO0FBRW5ELDBEQUF1RDtBQUN2RCxnREFBd0I7QUFDeEIsOENBQTJDO0FBQzNDLHdDQUF5QztBQUN6QyxrREFBK0M7QUFFL0MsZ0RBQTZDO0FBRzdDLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUV6QixJQUFJLElBQUksR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztBQUMxQixJQUFJLEdBQUcsR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO0FBQ3RCLElBQUksSUFBSSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO0FBQzFCLElBQUksSUFBSSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBQzVCLElBQUksT0FBTyxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7QUFDekIsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBVyxFQUFFLENBQUM7QUFDaEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztBQUN2QixJQUFJLEdBQUcsR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO0FBS3RCLGdCQUFLLENBQUMsc0NBQXNDLEVBQUUsR0FBUyxFQUFFO0lBRXJELE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsNkRBQTZELENBQUMsQ0FBQztBQUNyRixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQU8sSUFBSSxFQUFFLEVBQUU7SUFFM0MsUUFBUSxJQUFJLEVBQUU7UUFDVixLQUFLLE9BQU87WUFDUixNQUFNLElBQUksQ0FB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