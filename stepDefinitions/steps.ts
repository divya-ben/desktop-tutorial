import { Given, When, Then } from "cucumber";
import { browser, ElementFinder, element, by, ElementArrayFinder } from "protractor";
import { homedir } from "os";
import { homepage } from "../pageObjects/homepage";
import { login } from "../pageObjects/login";
import { dropdown } from "../pageObjects/dropdown";
import { protractor } from "protractor/built/ptor";
import { calculator } from "../pageObjects/calculator";
import chai from "chai";
import { grid } from "../pageObjects/grid";
import { userDetails } from "../excelOp";
import { social } from "../pageObjects/social";
import { notEqual } from "assert";
import { radio } from "../pageObjects/radio";


var expect = chai.expect;
var assert = chai.assert;

let home = new homepage();
let log = new login();
let drop = new dropdown();
let calc = new calculator();
let gridObj = new grid();
let userdet = new userDetails();
let soc = new social();
let rad = new radio();




Given('user navigates to Protractor website', async () => {

    await browser.get('http://www.helpingtesters.com/practice/protractor/index.php');
});

When('user clicks on {string}', async (link) => {

    switch (link) {
        case 'Login':
            await home.loginButton.click();
            break;

        case 'Dropdown':
            await home.dropdownButton.click();
            break;

        case 'Calculator':
            await home.calculatorButton.click();
            break;

        case 'Grid':
            await home.grid.click();
            break;

        case 'Social':
            await home.socialAccount.click();
            break;

        case 'Radio':
            await home.radioButton.click();

    }

});

Then('user signs in with {string} and {string}', async (uname, pass) => {

    browser.sleep(2000);
    await log.username.sendKeys(uname);
    await log.password.sendKeys(pass);
    await log.signin.click();


});

Then('user selects {string} from list', async (country) => {

    await drop.countrybox.click();
    await drop.getDropDownOption(country).click();

});

Then('user enters {string},{string},{string} value', async (value1, value2, oper) => {

    await calc.firstBox.sendKeys(value1);
    await calc.oper.click();

    if (oper == '-') {
        await calc.subtract.click();
    }
    else if (oper == '*') {
        await calc.multiply.click();
    }


    await calc.secondBox.sendKeys(value2);

});

Then('result equals {string}', async (result) => {
    await calc.goButton.click();
    browser.sleep(2000);
    let output = await calc.res.getText();
    console.log("OUTPUT" + output);
    expect(output).to.equal(result);

});

Then('grid contains {string}', async function (empID) {

    let ids: Array<String> = new Array();


    await gridObj.employees.each(async (item) => {

        let id = await item.element(by.css('td:nth-child(3)')).getText();
        ids.push(id);

    });

    ids.forEach(function (id1) {

        console.log("ID " + id1);
    });

    assert.include(ids, empID);


});

Then('user enters username, password and signs in', async () => {


    /*for(let i=0; i<userdet.unames.length;i++)
    {
        await soc.username.sendKeys(userdet.unames[i]);
        await soc.password.sendKeys(userdet.passwords[i]);
        await soc.signin.click();
        await soc.username.clear();
        await soc.password.clear();
    }*/

    await soc.username.sendKeys(userdet.unames[1]);
    await soc.password.sendKeys(userdet.passwords[1]);
    await soc.signin.click();

    await browser.switchTo().alert().accept(); //Handle the alert

    browser.sleep(2000);

    await soc.friends.each(async (item) => {

        let selection = await item.element(by.css('span[class="socialA-lable ng-binding"]')).getText();
        if (selection.includes('Ritish')) {
            await item.element(by.css('span[class="socialA-lable ng-binding"]')).click();
        }

    });



    /*userdet.unames.forEach(function(value){

        
    });*/

});

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





