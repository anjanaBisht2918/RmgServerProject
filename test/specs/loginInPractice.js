import loginPagePractice from "../pageobjects/practicetestautomation/loginPagePractice.js";
import fs from "fs"
let cred =JSON.parse(fs.readFileSync('./test/testData/data.json'))

describe("login",()=>{
    let un= cred.name;
    let pwds =cred.password
    it("login fetchDataFromJson",async()=>{
      
     await browser.url('https://practicetestautomation.com/practice-test-login/')
     await browser.pause(4000)
     await loginPagePractice.userLoginAction( un, pwds)
     await browser.pause(5000)
    })
})