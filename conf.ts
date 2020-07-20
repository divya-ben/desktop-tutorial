import {Config} from 'protractor';
import * as reporter from "cucumber-html-reporter";

export let config:Config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../features/demo.feature'],
    directConnect:true,  //Will work without starting selenium server if you give this commandt
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    onComplete: () => {

      var options = {
        theme: 'bootstrap',
        jsonFile: './cucumberReport.json',
        output: './cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
 
    reporter.generate(options);

    },
   
    cucumberOpts: {
      // require step definitions
      require: [
        './stepDefinitions/*.js' // accepts a glob
      ],
      //tags:"@RadioButton",
      format:'json:./cucumberReport.json'

    },
    
    
    //If capablities are not set, cases will run in Chrome by default
    capabilities: {
      'browserName': 'chrome',
      'goog:chromeOptions': {
        w3c: false
        }
    }


  };