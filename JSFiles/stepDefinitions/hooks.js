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
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before(function () {
    protractor_1.browser.manage().window().maximize();
});
/*Before({tags: "@angulartest"}, function () {
  // This hook will be executed before scenarios tagged with @angulartest
  console.log("Will be executed before angular test tag");
});


After({tags: "@calctest or @angulartest"}, function () {
    // This hook will be executed after all tags are executed
    console.log("Execution completed");
    
  });*/
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        // This hook will be executed after scenarios tags mentioned above
        console.log("Execution completed");
        if (scenario.result.status === cucumber_1.Status.FAILED || scenario.result.status === cucumber_1.Status.PASSED) {
            //Take screenshot
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBK0M7QUFDL0MsMkNBQWlGO0FBR2pGLGlCQUFNLENBQUM7SUFFTixvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3RDLENBQUMsQ0FBQyxDQUFDO0FBRUg7Ozs7Ozs7Ozs7T0FVTztBQUVMLGdCQUFLLENBQUMsVUFBZ0IsUUFBUTs7UUFDNUIsa0VBQWtFO1FBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUVuQyxJQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFHLGlCQUFNLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFHLGlCQUFNLENBQUMsTUFBTSxFQUNuRjtZQUNJLGlCQUFpQjtZQUNqQixNQUFNLFVBQVUsR0FBRyxNQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUMsV0FBVyxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=