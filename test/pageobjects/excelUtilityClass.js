import excel from "exceljs"

class ExcelUtilityClass {

       //fetchDataFromExcel
       //objectCreation
       //businesslogic
       async fetchDataFromExcel(sheetName,rowNum,cellNo){
       const book =new excel.Workbook()  ;
       await book.xlsx.readFile('./test/testData/data.xlsx');
       const sheet = book.getWorksheet(sheetName);
       return sheet.getRow(rowNum).getCell(cellNo).toString();
        }

        //fetchingMultipleDataFromexcel

        async fetchMultipledatafromxecel(sheetName,rowNum,cellNo){
            const book =new excel.Workbook()  ;
            await book.xlsx.readFile('./test/testData/data.xlsx');
            const sheet = book.getWorksheet(sheetName);
            for (let i = 1;i<=sheet.rowCount;i++){
                for (let j=1;j<=sheet.columnCount;j++){
                   return  sheet.getRow(i).getCell(j).toString();
                   // process.stdout.write(data+" ")
                     }
                    console.log(' ') 
            }

        }
      
    }
    export default new ExcelUtilityClass();





