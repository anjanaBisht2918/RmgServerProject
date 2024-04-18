import { readData,writeDataToNewWorksheet,writeDataTosameWorksheet } from "../pageobjects/excelUtilityfunctions.js";

describe("excelSheet smoke",()=>{
    it("readData",async ()=>{
        let filePath ='./test/testData/data.xlsx'
       let data =  await readData(filePath,'Sheet1',1,1)
       console.log(data);

    })

    it("writeData",async()=>{
        let filePath ='./test/testData/data.xlsx'
     await writeDataToNewWorksheet(filePath,'Sheet3',1,1,'manual')

    })
})