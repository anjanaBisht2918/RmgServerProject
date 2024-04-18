class LoginPage{
    get userName(){
        return $('#username')
    }
    get password(){
        return $('#password')
    }
    get submitButton(){
        return $("//button[.='Submit']")
    }

    async userLoginAction(un,pwd){
        await this.userName.setValue(un)
        await this.password.setValue(pwd)
        await this.submitButton.click();

    }
}
export default new LoginPage();