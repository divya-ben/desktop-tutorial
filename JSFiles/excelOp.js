"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDetails = void 0;
const exceljs_1 = require("exceljs");
class userDetails {
    constructor() {
        this.unames = this.getExcelValue('Username');
        this.passwords = this.getExcelValue('Password');
    }
    getExcelValue(col) {
        let wb = new exceljs_1.Workbook();
        let row;
        let cell;
        let colNum;
        let values = new Array();
        wb.xlsx.readFile("./SocialTest.xlsx").then(function () {
            try {
                let sheet = wb.getWorksheet('Sheet1');
                let count = sheet.rowCount;
                let firstrow = sheet.getRow(1);
                let cellcount = firstrow.cellCount;
                console.log("CELL COUNT" + cellcount);
                for (let i = 1; i <= cellcount; i++) {
                    cell = firstrow.getCell(i);
                    console.log("CELL VALUE" + cell.value.toString());
                    console.log("COL" + col);
                    if (cell.value.toString() === col) {
                        console.log("ENTERS  IF and I is" + i);
                        colNum = i;
                        break;
                    }
                }
                console.log("COL NUM" + colNum);
                console.log("COUNT" + count);
                for (let i = 1; i <= count; i++) {
                    row = sheet.getRow(i);
                    cell = row.getCell(colNum);
                    values.push(cell.value.toString());
                }
            }
            catch (err) {
                console.log(err);
            }
        });
        return values;
    }
}
exports.userDetails = userDetails;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWxPcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2V4Y2VsT3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXlEO0FBS3pELE1BQWEsV0FBVztJQUlwQjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELGFBQWEsQ0FBQyxHQUFXO1FBRXJCLElBQUksRUFBRSxHQUFhLElBQUksa0JBQVEsRUFBRSxDQUFDO1FBQ2xDLElBQUksR0FBUSxDQUFDO1FBQ2IsSUFBSSxJQUFVLENBQUM7UUFFZixJQUFJLE1BQWMsQ0FBQztRQUNuQixJQUFJLE1BQU0sR0FBa0IsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUV4QyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUV2QyxJQUFJO2dCQUVBLElBQUksS0FBSyxHQUFjLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2pELElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7Z0JBQzNCLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRS9CLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7Z0JBRW5DLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUVwQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUVqQyxJQUFJLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRSxHQUFHLENBQUMsQ0FBQztvQkFFeEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLEdBQUcsRUFBRTt3QkFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDckMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDWCxNQUFNO3FCQUNUO2lCQUVKO2dCQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDN0IsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3RCLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztpQkFDdEM7YUFJSjtZQUVELE9BQU8sR0FBRyxFQUFFO2dCQUVSLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFFcEI7UUFFTCxDQUFDLENBQUMsQ0FBQztRQUdILE9BQU8sTUFBTSxDQUFDO0lBRWxCLENBQUM7Q0FDSjtBQXBFRCxrQ0FvRUM7QUFBQSxDQUFDIn0=