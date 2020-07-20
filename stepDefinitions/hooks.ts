import {After, Before, Status} from "cucumber";
import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';


Before(function () {

 browser.manage().window().maximize();
});

/*Before({tags: "@angulartest"}, function () {
  // This hook will be executed before scenarios tagged with @angulartest
  console.log("Will be executed before angular test tag");
});


After({tags: "@calctest or @angulartest"}, function () {
    // This hook will be executed after all tags are executed
    console.log("Execution completed");
    
  });*/

  After(async function (scenario) {
    // This hook will be executed after scenarios tags mentioned above
    console.log("Execution completed");

    if(scenario.result.status===Status.FAILED || scenario.result.status===Status.PASSED)
    {
        //Take screenshot
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot,"image/png");
    }
  });

