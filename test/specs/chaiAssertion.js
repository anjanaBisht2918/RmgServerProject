import { expect } from "chai";

describe(' ', ()=>{

    it("monthDropDown", async () => {
        await browser.url("https://www.facebook.com/");
        await browser.pause(2000);
        await browser.maximizeWindow();
        await browser.$("//a[.='Create new account']").click();
        
        await browser.pause(2000);
        let monthsElement = await browser.$$('#month').map(ele=>ele.getText())
        console.log(monthsElement);
        await browser.pause(5000);
        let dayList = await browser.$$('#day').map(ele=> ele.getText())
        await browser.pause(4000)
        conlose.log(dayList);
      //  expect(dayList).to.be.a('string');
        expect(dayList).to.be.a('number');
        let person ={
            name : 'mohan',
            job : "ae"

        }
       expect(person).to.be.an('oject');


         let monthList = monthsElement.toString()
         console.log( '$$$$$$' + monthList);
        let monthSplit = monthList.split("\n");
        console.log(monthSplit);
        console.log(monthSplit.length);

        expect(monthSplit).to.be.an('array').to.have.length(12);
        expect(monthSplit).to.be.an('array').that.includes('Jan');
        let msg = "hello"
        expect(msg).to.have.lengthOf(msg)

    });

})