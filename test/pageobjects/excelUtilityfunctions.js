import excel from 'exceljs'
export async function readData(filepath ,sheetName,rownum,cellNum){
    
    const book =new excel.Workbook()  ;
     await book.xlsx.readFile(filepath);
     const sheet = book.getWorksheet(sheetName);
     let data =sheet.getRow(rownum).getCell(cellNum).toString();
     return data
    
}

export async function writeDataToNewWorksheet(filepath,sheetName,rownum,cellNum,newSheetName){
    const book =new excel.Workbook()  ;
     await book.xlsx.readFile(filepath);
     const sheet = book.addWorksheet(sheetName)
    let data= sheet.getRow(rownum).getCell(cellNum).value=newSheetName
      book.xlsx.writeFile(filepath)
      return data;

}

export async function writeDataTosameWorksheet(filepath,sheetName,rownum,cellNum,newSheetName){
    const book =new excel.Workbook()  ;
     await book.xlsx.readFile(filepath);
     const sheet = book.getWorksheet(sheetName)
    let data= sheet.getRow(rownum).getCell(cellNum).value=newSheetName
      book.xlsx.writeFile(filepath)
      return data;

}

