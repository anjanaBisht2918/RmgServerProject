import cheapFlighthomePage from "../pageobjects/cheapFlighthomePage.js";

describe("flightBooking",()=>{
    it("book flight",async()=>{
       await browser.url("https://www.in.cheapflights.com/");
       await browser.pause(3000)
       await browser.maximizeWindow();
       await browser.pause(3000)
       await cheapFlighthomePage.flightBookingAction(delhi,ban);
       await browser.pause(3000)
        
    })
})