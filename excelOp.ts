import { Workbook, Worksheet, Row, Cell } from 'exceljs';




export class userDetails {
    unames: Array<string>;
    passwords: Array<string>;

    constructor() {
        this.unames = this.getExcelValue('Username');
        this.passwords = this.getExcelValue('Password');
    }

    getExcelValue(col: string): Array<string> {

        let wb: Workbook = new Workbook();
        let row: Row;
        let cell: Cell;

        let colNum: number;
        let values: Array<string> = new Array();

        wb.xlsx.readFile("./SocialTest.xlsx").then(function () {

            try {

                let sheet: Worksheet = wb.getWorksheet('Sheet1');
                let count = sheet.rowCount;
                let firstrow = sheet.getRow(1);
            
                let cellcount = firstrow.cellCount;

                console.log("CELL COUNT"+cellcount);

                for (let i = 1; i <= cellcount; i++) {
                
                    cell = firstrow.getCell(i);
                    console.log("CELL VALUE" +cell.value.toString());
                    console.log("COL" +col);

                    if (cell.value.toString() === col) {
                        console.log("ENTERS  IF and I is"+i);
                        colNum = i;
                        break;
                    }

                }

                console.log("COL NUM"+colNum);
                console.log("COUNT"+count);
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
};











