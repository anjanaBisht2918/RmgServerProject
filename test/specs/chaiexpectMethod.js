import { expect } from "chai";
describe("expect",()=>{
    it("chai assertion",()=>{
        let msg = "hello";
       // expect(msg).to.has.lengthOf(5);
        //expect(msg).to.be.a('string'); //typeOf
        let person = {
            name :"Anjana"
        }
        expect(person).to.be.an('object')
        expect (msg).to.equal("hello")
        expect ("hello").to.include("he");
     
    
    })
})

