class Elements{
    //login
    get userMail() {return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.widget.ScrollView/android.widget.EditText[1]')}
    get userPasswoord() {return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.widget.ScrollView/android.widget.EditText[2]')}
    get btnLogin() {return $('//android.view.View[@content-desc="Iniciar sesión"]')}
    //vista escaneo sucrusal
    get textFieldcodBarraSucursal (){return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText')}
    //ventana emergente de sucursal escaneada con exito
    get btnNotificationSucces () {return $('//android.view.View[@content-desc="Continuar"]')}
   //Ventana sucursal cajon
    get btnrecargarLista () {return $('//android.view.View[@content-desc="Continuar"]')}

}

module.exports = new Elements()