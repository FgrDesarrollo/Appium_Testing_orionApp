const elements =require('../../test/pageobjects/elements.page.js')


describe('Test en Login Page',()=>{
    it('El usuario ingresa sus credenciales', ()=>{
       
       
        elements.userMail.addValue('vortiz@helpcomcl')
        elements.userPasswoord.addValue('123456')
        elements.btnLogin.click()
        

    })
})