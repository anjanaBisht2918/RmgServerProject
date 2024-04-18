//import excel from "exceljs"
import excelUtilityClass from "../pageobjects/excelUtilityClass.js";

describe("fetchdata",()=>{
    it("fetchDataFromExcel",async()=>{

      //  const book =new excel.Workbook()  ;
      //  await book.xlsx.readFile('./test/testData/data.xlsx');
      //  const sheet = book.getWorksheet('Sheet1');
      //  const firstName = sheet.getRow(1).getCell(1).toString();
      //  console.log(`data is  : ${firstName}`);

     // let firstName = await excelUtilityClass.fetchDataFromExcel('Sheet1',1,1)
     let firstName = await excelUtilityClass.fetchMultipledatafromxecel('Sheet1',1,1)
    // let lastName = await excelUtilityClass.fetchMultipledatafromxecel('Sheet1',1,2)
     


     await  browser.url("https://www.facebook.com/");
     await  browser.pause(3600);
   
     await browser.maximizeWindow();
     await browser.$("//a[.='Create new account']").click();
     
     await browser.pause(2000);
      let name = await browser.$('//input[@name="firstname"]').setValue(firstName);
       await browser.pause(3000)
       console.log(`name===========> ${name}`)
         let lastNam= (await browser.$('//input[@name="lastname"]')).setValue(lastName);
         await browser.pause(3000)
          console.log(`=============>${lastNam}`);
           process.stdout.write(firstName +" "+ lastNam)
    

    })
}) 