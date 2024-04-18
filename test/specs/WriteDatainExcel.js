import excel from "exceljs"
//override 
describe("writeData",()=>{
    it ("toExcel",async()=>{
        const book= new excel.Workbook()
         book.xlsx.readFile("./test/testData/data.xlsx");
        const sheet = book.addWorksheet("sheetTMS")
        sheet.getRow(1).getCell(1).value="Uttarakhand"
        await book.xlsx.writeFile("./test/testData/data.xlsx")

     
    })
})