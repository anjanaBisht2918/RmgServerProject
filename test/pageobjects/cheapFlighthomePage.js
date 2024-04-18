class flightBooking{
    get FromcrossButton(){
        return $(" //div[@class='vvTc-item-button']/*[name()='svg']");
    }
    get fromFlight(){
        return $("//input[@placeholder='From?']");
    }
    get toFlight(){
        return $("//input[@placeholder='To?']");
    }
    get fromplace(){
        return $("//span[.='Indira Gandhi Intl']");
    }
       get fromDate(){
        return $('//span[@aria-label="Start date calendar input"]');
       }
       get selectFromDate(){
        return $('//div[@aria-label="16 April, 2024"]');
       }
       get toDate(){
        return $('//span[@aria-label="End date calendar input"]')
       }
       get toplace(){
        return $("//span[.='Bengaluru Intl']");
       }
       get selectToDate(){
        return $('//div[@aria-label="17 April, 2024"]');
       }
       get searchButton(){
        return $('//button[@aria-label="Search"]');
       }

       async flightBookingAction(from,to){
        await this.FromcrossButton.click();
        await this.fromFlight.setValue(from);
        await this.fromplace.click();
        await this.toFlight.setValue(to);
        await this.toplace.click();
        await this.fromDate.click();
        await this.selectFromDate.click();
        await this.toDate.click();
        await this.selectToDate.click();
        await this.searchButton.click();
       }
}
export default new flightBooking();