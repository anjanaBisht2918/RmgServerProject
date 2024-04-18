import { Key } from 'webdriverio'
describe('nameandPrice',()=>{
    it("fetch name and price smoke",async()=>{
       await browser.url("https://www.flipkart.com/")
       await browser.$('//input[@class="Pke_EE"]').setValue('shoes');
       await browser.pause(3000)
       await browser.keys(Key.Enter);
       await browser.$('//div[@title="PUMA"]/descendant::div[@class="_24_Dny"]').click();
      let allPrice =await  browser.$$('//div[@class="_30jeq3"]');
      await browser.pause(3000)
    //   let allName = await browser.$$('//a[@class="IRpwTa _2-ICcC"]');
    //  let shoesName = allName.map(ele=>{
    //    return ele.getText()
    //   })
        let a = allPrice.map(async ele=>{ele.getText()
      //   if (await ele.getText()<=300)
      //    {
      //      return   ele.getText()
      //    }
        });
      //  console.log(`price is===============> ${a}`)
     // console.log(`name====================> ${shoesName}`)


     

    })
})