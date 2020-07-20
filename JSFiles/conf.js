"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../features/demo.feature'],
    directConnect: true,
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
                "App Version": "0.3.2",
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
        format: 'json:./cucumberReport.json'
    },
    //If capablities are not set, cases will run in Chrome by default
    capabilities: {
        'browserName': 'chrome',
        'goog:chromeOptions': {
            w3c: false
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGlFQUFtRDtBQUV4QyxRQUFBLE1BQU0sR0FBVTtJQUN2QixrREFBa0Q7SUFDbEQsS0FBSyxFQUFFLENBQUMsMEJBQTBCLENBQUM7SUFDbkMsYUFBYSxFQUFDLElBQUk7SUFDbEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFFL0QsVUFBVSxFQUFFLEdBQUcsRUFBRTtRQUVmLElBQUksT0FBTyxHQUFHO1lBQ1osS0FBSyxFQUFFLFdBQVc7WUFDbEIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxNQUFNLEVBQUUsd0JBQXdCO1lBQ2hDLHNCQUFzQixFQUFFLElBQUk7WUFDNUIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUU7Z0JBQ04sYUFBYSxFQUFDLE9BQU87Z0JBQ3JCLGtCQUFrQixFQUFFLFNBQVM7Z0JBQzdCLFNBQVMsRUFBRSxzQkFBc0I7Z0JBQ2pDLFVBQVUsRUFBRSxZQUFZO2dCQUN4QixVQUFVLEVBQUUsV0FBVztnQkFDdkIsVUFBVSxFQUFFLFFBQVE7YUFDdkI7U0FDSixDQUFDO1FBRUYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUUzQixDQUFDO0lBRUQsWUFBWSxFQUFFO1FBQ1osMkJBQTJCO1FBQzNCLE9BQU8sRUFBRTtZQUNQLHdCQUF3QixDQUFDLGlCQUFpQjtTQUMzQztRQUNELHNCQUFzQjtRQUN0QixNQUFNLEVBQUMsNEJBQTRCO0tBRXBDO0lBR0QsaUVBQWlFO0lBQ2pFLFlBQVksRUFBRTtRQUNaLGFBQWEsRUFBRSxRQUFRO1FBQ3ZCLG9CQUFvQixFQUFFO1lBQ3BCLEdBQUcsRUFBRSxLQUFLO1NBQ1Q7S0FDSjtDQUdGLENBQUMifQ==