const elements =require('../../test/pageobjects/elements.page.js')
const expect = require('chai').expect //Esto nos permitirá usar el metodo expect dentro de nuestra prueba.


describe('Test app Orion ',()=>{
    it('El usuario ingresa sus credenciales en el Login', ()=>{
       
            elements.userMail.addValue('vortiz@helpcomcl')
            elements.userPasswoord.addValue('123456')
            elements.btnLogin.click()
        }) 

    it('El usuario escanea sucursal', ()=>{

            elements.textFieldcodBarraSucursal.addValue('SU16EM1')
            elements.textFieldcodBarraSucursal.click()
            elements.btnNotificationSucces.click()

        }) 

    it('El usuario recarga la lista', ()=>{
            elements.btnrecargarLista.click()
            driver.pause(300000)
                
            
        }) 
})