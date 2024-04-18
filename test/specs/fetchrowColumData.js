import excel from "exceljs"
describe("multiple Data",()=>{
    it ("fetchMultipleData",async()=>{
      const book =new excel.Workbook();
      await book.xlsx.readFile('./test/testData/data.xlsx');
     const sheet= book.getWorksheet('Sheet1');
     console.log("===============>"+sheet.rowCount);
   
      for (let i = 1;i<=sheet.rowCount;i++)
      {
        for (let j = 1;j<=sheet.columnCount;j++){
        let data = sheet.getRow(i).getCell(i).toString();
       // console.log("data is"+data)
       process.stdout.write("=========>"+data)
        }
      }
    })
})