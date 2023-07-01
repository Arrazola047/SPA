
/*Variables para el icono animado Abrir Cerrar Barra Lateral*/ 
var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");
var side__menu = document.getElementById("menu_side");
var btn__open = document.getElementById("header");
var body = document.getElementById("body");
var tarjeta = document.getElementById("tarjeta");
var tarjetab = document.getElementById("tarjetab");
var lottie2 = document.getElementById("lottie2");
/*Variables para PopUp*/
var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");
var popup = document.getElementById("popup");
var overlay = document.getElementById("overlay");
/*Contador Para seleccionar el menu a mostrar*/
var contador = 0; 
/*Variables Para Manicura Clasica*/
var imgP = document.getElementById("imgPop");               // Imagen
var tituloP = document.getElementById("tituloPop");         // Titulo
var divP = document.getElementById("divisor");              // Divisor
var divP2 = document.getElementById("divisor2");            // Segundo Divisor
var descP = document.getElementById("descripcion");         // Descripcion
var extra = document.getElementById("extra");               // Extras
/*Variables Para Pedicura Clasica */
var imgP2 = document.getElementById("imgPop2");             // Imagen
var tituloP2 = document.getElementById("tituloPop2");       // Titulo
var divPB2 = document.getElementById("divisorB2");          // Divisor
var descP2 = document.getElementById("descripcion2");       // Descripcion
var ocul2 = document.getElementById("oculto");               // Espacio bottom
/*Variables Para Manicura Premium */
var imgP3 = document.getElementById("imgPop3");               // Imagen
var tituloP3 = document.getElementById("tituloPop3");         // Titulo
var divP3 = document.getElementById("divisor3");              // Divisor
var divPB3 = document.getElementById("divisorB3");            // Segundo Divisor
var descP3 = document.getElementById("descripcion3");         // Descripcion
var extra3 = document.getElementById("extra3");               // Extras
/*Variables para Pedicura Premium */
var imgP4 = document.getElementById("imgPop4");             // Imagen
var tituloP4 = document.getElementById("tituloPop4");       // Titulo
var divP4 = document.getElementById("divisor4");          // Divisor
var descP4 = document.getElementById("descripcion4");       // Descripcion
var ocul4 = document.getElementById("oculto4");               // Espacio bottom
/*Variables para Manicura Deluxe */
var imgP5 = document.getElementById("imgPop5");               // Imagen
var tituloP5 = document.getElementById("tituloPop5");         // Titulo
var divP5 = document.getElementById("divisor5");              // Divisor
var divPB5 = document.getElementById("divisorB5");            // Segundo Divisor
var descP5 = document.getElementById("descripcion5");         // Descripcion
var extra5 = document.getElementById("extra5");               // Extras
/*Variables para Pedicura Deluxe */
var imgP6 = document.getElementById("imgPop6");             // Imagen
var tituloP6 = document.getElementById("tituloPop6");       // Titulo
var divP6 = document.getElementById("divisor6");          // Divisor
var descP6 = document.getElementById("descripcion6");       // Descripcion
var ocul6 = document.getElementById("oculto6");               // Espacio bottom
/*Variables Gel Manos */
var imgP7 = document.getElementById("imgPop7");             // Imagen
var tituloP7 = document.getElementById("tituloPop7");       // Titulo
var divP7 = document.getElementById("divisor7");          // Divisor
var descP7 = document.getElementById("descripcion7");       // Descripcion             // Espacio bottom
/*Variables para Gel Pies */
var imgP8 = document.getElementById("imgPop8");             // Imagen
var tituloP8 = document.getElementById("tituloPop8");       // Titulo
var divP8 = document.getElementById("divisor8");          // Divisor
var descP8 = document.getElementById("descripcion8");       // Descripcion
/*Variables para Acrilico Manos */
var imgP9 = document.getElementById("imgPop9");             // Imagen
var tituloP9 = document.getElementById("tituloPop9");       // Titulo
var divP9 = document.getElementById("divisor9");            // Divisor
var descP9 = document.getElementById("descripcion9");       // Descripcion
/*Variable para Avrilico Pies */
var imgP10 = document.getElementById("imgPop10");             // Imagen
var tituloP10 = document.getElementById("tituloPop10");       // Titulo
var divP10 = document.getElementById("divisor10");            // Divisor
var descP10 = document.getElementById("descripcion10");       // Descripcion
/*Variables para Desintoxicacion Ionica */
var imgP11 = document.getElementById("imgPop11");             // Imagen
var tituloP11 = document.getElementById("tituloPop11");       // Titulo
var divP11 = document.getElementById("divisor11");            // Divisor
var descP11 = document.getElementById("descripcion11");       // Descripcion
/*Variables para Desintoxicacion Ionica +  */
var imgP12 = document.getElementById("imgPop12");             // Imagen
var tituloP12 = document.getElementById("tituloPop12");       // Titulo
var divP12 = document.getElementById("divisor12");            // Divisor
var descP12 = document.getElementById("descripcion12");       // Descripcion
/*Variables para Pestañas Clasicas */
var imgP13 = document.getElementById("imgPop13");              // Imagen
var tituloP13 = document.getElementById("tituloPop13");        // Titulo
var div13 = document.getElementById("divisor13");              // Divisor
var divPB13 = document.getElementById("divisorB13");           // Segundo Divisor
var descP13 = document.getElementById("descripcion13");        // Descripcion
var extra13 = document.getElementById("extra13");              //Extras 
/*Variables para Pestañas Clasicas CavitoSPA */
var imgP14 = document.getElementById("imgPop14");              // Imagen
var tituloP14 = document.getElementById("tituloPop14");        // Titulo
var div14 = document.getElementById("divisor14");              // Divisor
var divPB14 = document.getElementById("divisorB14");           // Segundo Divisor
var descP14 = document.getElementById("descripcion14");        // Descripcion
var extra14 = document.getElementById("extra14");              //Extra
/*Variables para Volumen Hawaiano */
var imgP15 = document.getElementById("imgPop15");              // Imagen
var tituloP15 = document.getElementById("tituloPop15");        // Titulo
var div15 = document.getElementById("divisor15");              // Divisor
var divPB15 = document.getElementById("divisorB15");           // Segundo Divisor
var descP15 = document.getElementById("descripcion15");        // Descripcion
var extra15 = document.getElementById("extra15");              //Extra
/*Variables para Pestañas Hibridas */
var imgP16 = document.getElementById("imgPop16");              // Imagen
var tituloP16 = document.getElementById("tituloPop16");        // Titulo
var div16 = document.getElementById("divisor16");              // Divisor
var divPB16 = document.getElementById("divisorB16");           // Segundo Divisor
var descP16 = document.getElementById("descripcion16");        // Descripcion
var extra16 = document.getElementById("extra16");              //Extra
/*Variables para Pestañas Volumen 3d */
var imgP17 = document.getElementById("imgPop17");              // Imagen
var tituloP17 = document.getElementById("tituloPop17");        // Titulo
var div17 = document.getElementById("divisor17");              // Divisor
var divPB17 = document.getElementById("divisorB17");           // Segundo Divisor
var descP17 = document.getElementById("descripcion17");        // Descripcion
var extra17 = document.getElementById("extra17");              //Extra
/*Variables para Volumen Griego */
var imgP18 = document.getElementById("imgPop18");              // Imagen
var tituloP18 = document.getElementById("tituloPop18");        // Titulo
var div18 = document.getElementById("divisor18");              // Divisor
var divPB18 = document.getElementById("divisorB18");           // Segundo Divisor
var descP18 = document.getElementById("descripcion18");        // Descripcion
var extra18 = document.getElementById("extra18");              //Extra
/*Variables para Volumen CavitoSPA 8d */
var imgP19 = document.getElementById("imgPop19");              // Imagen
var tituloP19 = document.getElementById("tituloPop19");        // Titulo
var div19 = document.getElementById("divisor19");              // Divisor
var divPB19 = document.getElementById("divisorB19");           // Segundo Divisor
var descP19 = document.getElementById("descripcion19");        // Descripcion
var extra19 = document.getElementById("extra19");              //Extra
/*Variables para Volumen */
var imgP20 = document.getElementById("imgPop20");              // Imagen
var tituloP20 = document.getElementById("tituloPop20");        // Titulo
var div20 = document.getElementById("divisor20");              // Divisor
var divPB20 = document.getElementById("divisorB20");           // Segundo Divisor
var descP20 = document.getElementById("descripcion20");        // Descripcion
var extra20 = document.getElementById("extra20");              //Extra
/*Variables para Mega Volumen */
var imgP21 = document.getElementById("imgPop21");              // Imagen
var tituloP21 = document.getElementById("tituloPop21");        // Titulo
var div21 = document.getElementById("divisor21");              // Divisor
var divPB21 = document.getElementById("divisorB21");           // Segundo Divisor
var descP21 = document.getElementById("descripcion21");        // Descripcion
var extra21 = document.getElementById("extra21");              //Extra
/*Variables para Retiro */
var imgP22 = document.getElementById("imgPop22");              // Imagen
var tituloP22 = document.getElementById("tituloPop22");        // Titulo
var div22 = document.getElementById("divisor22");              // Divisor
var descP22 = document.getElementById("descripcion22");        // Descripcion
/*Variables para XL */
var imgP23 = document.getElementById("imgPop23");              // Imagen
var tituloP23 = document.getElementById("tituloPop23");        // Titulo
var div23 = document.getElementById("divisor23");              // Divisor
var descP23 = document.getElementById("descripcion23");        // Descripcion
/*Variables para Pop Color */
var imgP24 = document.getElementById("imgPop24");              // Imagen
var tituloP24 = document.getElementById("tituloPop24");        // Titulo
var div24 = document.getElementById("divisor24");              // Divisor
var descP24 = document.getElementById("descripcion24");        // Descripcion
/*Variables para Color */
var imgP25 = document.getElementById("imgPop25");              // Imagen
var tituloP25 = document.getElementById("tituloPop25");        // Titulo
var div25 = document.getElementById("divisor25");              // Divisor
var descP25 = document.getElementById("descripcion25");        // Descripcion
/*Variables para Glitter */
var imgP26 = document.getElementById("imgPop26");              // Imagen
var tituloP26 = document.getElementById("tituloPop26");        // Titulo
var div26 = document.getElementById("divisor26");              // Divisor
var descP26 = document.getElementById("descripcion26");        // Descripcion
/*Variables para Glitter Full */
var imgP27 = document.getElementById("imgPop27");              // Imagen
var tituloP27 = document.getElementById("tituloPop27");        // Titulo
var div27 = document.getElementById("divisor27");              // Divisor
var descP27 = document.getElementById("descripcion27");        // Descripcion
/*Variables para Diseño de Cejas */
var imgP28 = document.getElementById("imgPop28");              // Imagen
var tituloP28 = document.getElementById("tituloPop28");        // Titulo
var div28 = document.getElementById("divisor28");              // Divisor
var descP28 = document.getElementById("descripcion28");        // Descripcion

/*Funcion para El boton Abrir Cerrar Barra Lateral */
document.querySelector(".bars__menu").addEventListener("click", animateBars);
function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
    body.classList.toggle("body_move");
    side__menu.classList.toggle("menu__side_move");
    btn__open.classList.toggle("header");
    tarjeta.classList.toggle("body_move");
    tarjetab.classList.toggle("move2");
}


/*Funcion Para Seleccionar El menu Pestañas */
document.querySelector("#Pst").addEventListener("click", mover);
var move = document.querySelector(".selected");
async function mover(){
    move.className=("selected_on");
    tarjeta.classList.toggle("active");
    await delay(300);
    tarjetab.classList.toggle("active");
    await delay(100);
    animateBars();

}


/*Funcion para Seleccionar el menu Manicura Y Pedicura */
document.querySelector("#MyP").addEventListener("click", mover2);
var move2 = document.querySelector(".selected");
async function mover2(){
    move2.className=("selected");
    tarjetab.classList.toggle("active");
    await delay(300);
    tarjeta.classList.toggle("active");
    await delay(100);
    animateBars();
}


/*Funcion Para Agregar un Delay entre acciones */
function delay(time){
    return new Promise(resolve => setTimeout(resolve,time));
}


// Boton Cerrar Pop
document.querySelector("#cpico").addEventListener("click",cerrarpop);


/*------------------------------Funcion Para Abrir Manicura Clasica ---------------------------------------------*/
document.querySelector("#ManiClas").addEventListener("click", popmaniclas); //Manicura Clasica
function popmaniclas(){
    contador = 1;
    abrirpop();
}
async function ManicuraClasica(){
    //Quitar Correccion de elementos Ocultos
    imgP.classList.toggle("oculto");
    tituloP.classList.toggle("oculto");
    descP.classList.toggle("oculto");
    divP.classList.toggle("oculto");
    divP2.classList.toggle("oculto");
    extra.classList.toggle("oculto");
    //Inicio de las Animacion de Visibilidad de los elementos
    await delay(300);
    imgP.classList.toggle("activex");
    tituloP.classList.toggle("activex");
    await delay(300);
    descP.classList.toggle("activex");
    divP.classList.toggle("activex");
    divP2.classList.toggle("activex");
    extra.classList.toggle("activex");
}
async function ManicuraClasicaB(){
    extra.classList.toggle("activex");
    descP.classList.toggle("activex");
    divP.classList.toggle("activex");
    divP2.classList.toggle("activex");
    await delay(300);
    overlay.classList.toggle("activeo");
    tituloP.classList.toggle("activex");
    await delay(150);
    imgP.classList.toggle("activex");
    await delay(300);
    //Correcion de elementos ocultos
    imgP.classList.toggle("oculto");
    tituloP.classList.toggle("oculto");
    descP.classList.toggle("oculto");
    divP.classList.toggle("oculto");
    divP2.classList.toggle("oculto");
    extra.classList.toggle("oculto");
}


/*------------------------------Pedicura Clasica---------------------------------------------------------------- */
document.querySelector("#PediClas").addEventListener("click", PediClas); //Pedicura Clasica
function PediClas(){
    contador = 2;
    abrirpop();
}
async function PedicuraClasica(){
    /*Correccion de elementos ocultos*/
    imgP2.classList.toggle("oculto");
    tituloP2.classList.toggle("oculto");
    descP2.classList.toggle("oculto");
    divPB2.classList.toggle("oculto");
    ocul2.classList.toggle("oculto");
    await delay(300);
    imgP2.classList.toggle("activatedEsp");
    tituloP2.classList.toggle("activated");
    await delay(300);
    descP2.classList.toggle("activated");
    divPB2.classList.toggle("activated");
}
async function PedicuraClasicaB(){
    descP2.classList.toggle("activated");
    divPB2.classList.toggle("activated");
    await delay(300);
    overlay.classList.toggle("activeo");
    tituloP2.classList.toggle("activated");
    await delay(150);
    imgP2.classList.toggle("activatedEsp");
    await delay(300);
    /*Correccion de elementos ocultos*/
    imgP2.classList.toggle("oculto");
    tituloP2.classList.toggle("oculto");
    descP2.classList.toggle("oculto");
    divPB2.classList.toggle("oculto");
    ocul2.classList.toggle("oculto");
}


/*-------------------------Manicura Premium----------------------*/
document.querySelector("#ManiPrem").addEventListener("click", AManiPrem);
function AManiPrem(){
    contador = 3;
    abrirpop();
}

async function ManicuraPremium(){
    //Quitar Correccion de elementos Ocultos
    imgP3.classList.toggle("oculto");
    tituloP3.classList.toggle("oculto");
    descP3.classList.toggle("oculto");
    divP3.classList.toggle("oculto");
    divPB3.classList.toggle("oculto");
    extra3.classList.toggle("oculto");
    await delay(300);
    // Animacion de Apertura
    imgP3.classList.toggle("activatedEsp3");
    tituloP3.classList.toggle("activated");
    await delay(300);
    descP3.classList.toggle("activated");
    divP3.classList.toggle("activated");
    divPB3.classList.toggle("activated");
    extra3.classList.toggle("activated");
}

async function ManicuraPremiumB(){
    // Animacion de Cierre
    extra3.classList.toggle("activated");
    descP3.classList.toggle("activated");
    divP3.classList.toggle("activated");
    divPB3.classList.toggle("activated");
    await delay(300);
    overlay.classList.toggle("activeo");
    tituloP3.classList.toggle("activated");
    await delay(150);
    imgP3.classList.toggle("activatedEsp3");
    await delay(300);
    //Correcion de elementos ocultos
    imgP3.classList.toggle("oculto");
    tituloP3.classList.toggle("oculto");
    descP3.classList.toggle("oculto");
    divP3.classList.toggle("oculto");
    divPB3.classList.toggle("oculto");
    extra3.classList.toggle("oculto");
}



/*------------------------------Pedicura Premium ---------------------------------------------*/
document.querySelector("#PediPrem").addEventListener("click", PediPrem); //Pedicura Clasica
function PediPrem(){
    contador = 4;
    abrirpop();
}
async function PedicuraPremium(){
    /*Correccion de elementos ocultos*/
    imgP4.classList.toggle("oculto");
    tituloP4.classList.toggle("oculto");
    descP4.classList.toggle("oculto");
    divP4.classList.toggle("oculto");
    ocul4.classList.toggle("oculto");
    await delay(300);
    imgP4.classList.toggle("activatedEsp");
    tituloP4.classList.toggle("activated");
    await delay(300);
    descP4.classList.toggle("activated");
    divP4.classList.toggle("activated");
}
async function PedicuraPremiumB(){
    descP4.classList.toggle("activated");
    divP4.classList.toggle("activated");
    await delay(300);
    overlay.classList.toggle("activeo");
    tituloP4.classList.toggle("activated");
    await delay(150);
    imgP4.classList.toggle("activatedEsp");
    await delay(300);
    /*Correccion de elementos ocultos*/
    imgP4.classList.toggle("oculto");
    tituloP4.classList.toggle("oculto");
    descP4.classList.toggle("oculto");
    divP4.classList.toggle("oculto");
    ocul4.classList.toggle("oculto");
}


/*-------------------------Manicura Deluxe----------------------*/
document.querySelector("#ManiDel").addEventListener("click", AManiDel);
function AManiDel(){
    contador = 5;
    abrirpop();
}

async function ManicuraDeluxe(){
    //Quitar Correccion de elementos Ocultos
    imgP5.classList.toggle("oculto");
    tituloP5.classList.toggle("oculto");
    descP5.classList.toggle("oculto");
    divP5.classList.toggle("oculto");
    divPB5.classList.toggle("oculto");
    extra5.classList.toggle("oculto");
    await delay(300);
    // Animacion de Apertura
    imgP5.classList.toggle("activatedEsp5");
    tituloP5.classList.toggle("activated");
    await delay(300);
    descP5.classList.toggle("activated");
    divP5.classList.toggle("activated");
    divPB5.classList.toggle("activated");
    extra5.classList.toggle("activated");
}

async function ManicuraDeluxeB(){
    // Animacion de Cierre
    extra5.classList.toggle("activated");
    descP5.classList.toggle("activated");
    divP5.classList.toggle("activated");
    divPB5.classList.toggle("activated");
    await delay(300);
    overlay.classList.toggle("activeo");
    tituloP5.classList.toggle("activated");
    await delay(150);
    imgP5.classList.toggle("activatedEsp5");
    await delay(300);
    //Correcion de elementos ocultos
    imgP5.classList.toggle("oculto");
    tituloP5.classList.toggle("oculto");
    descP5.classList.toggle("oculto");
    divP5.classList.toggle("oculto");
    divPB5.classList.toggle("oculto");
    extra5.classList.toggle("oculto");
}

/*-----------------------------------------------Pedicura Deluxe------------------------------------------------------------------ */
document.querySelector("#PediDel").addEventListener("click", PediDel);
function PediDel(){
    contador = 6;
    abrirpop();
}
async function PedicuraDeluxe(){
    /*Correccion de elementos ocultos*/
    imgP6.classList.toggle("oculto");
    tituloP6.classList.toggle("oculto");
    descP6.classList.toggle("oculto");
    divP6.classList.toggle("oculto");
    ocul6.classList.toggle("oculto");
    await delay(300);
    imgP6.classList.toggle("activatedEsp6");
    tituloP6.classList.toggle("activated");
    await delay(300);
    descP6.classList.toggle("activated");
    divP6.classList.toggle("activated");
}
async function PedicuraDeluxeB(){
    descP6.classList.toggle("activated");
    divP6.classList.toggle("activated");
    await delay(300);
    overlay.classList.toggle("activeo");
    tituloP6.classList.toggle("activated");
    await delay(150);
    imgP6.classList.toggle("activatedEsp6");
    await delay(300);
    /*Correccion de elementos ocultos*/
    imgP6.classList.toggle("oculto");
    tituloP6.classList.toggle("oculto");
    descP6.classList.toggle("oculto");
    divP6.classList.toggle("oculto");
    ocul6.classList.toggle("oculto");
}


/*-----------------------------------------------Gel Manos------------------------------------------------------------------ */
document.querySelector("#GelM").addEventListener("click", GelM);
function GelM(){
    contador = 7;
    abrirpop();
}
async function GelManos(){
    /*Correccion de elementos ocultos*/
    imgP7.classList.toggle("oculto");
    tituloP7.classList.toggle("oculto");
    descP7.classList.toggle("oculto");
    divP7.classList.toggle("oculto");
    await delay(300);
    imgP7.classList.toggle("activatedEsp7");
    tituloP7.classList.toggle("activated");
    await delay(300);
    descP7.classList.toggle("activated");
    divP7.classList.toggle("activated");
}
async function GelManosB(){
    descP7.classList.toggle("activated");
    divP7.classList.toggle("activated");
    await delay(300);
    overlay.classList.toggle("activeo");
    tituloP7.classList.toggle("activated");
    await delay(150);
    imgP7.classList.toggle("activatedEsp7");
    await delay(300);
    /*Correccion de elementos ocultos*/
    imgP7.classList.toggle("oculto");
    tituloP7.classList.toggle("oculto");
    descP7.classList.toggle("oculto");
    divP7.classList.toggle("oculto");
}


/*-----------------------------------------------Gel Pies------------------------------------------------------------------ */
document.querySelector("#GelP").addEventListener("click", GelP);
function GelP(){
    contador = 8;
    abrirpop();
}
async function GelPies(){
    /*Correccion de elementos ocultos*/
    imgP8.classList.toggle("oculto");
    tituloP8.classList.toggle("oculto");
    descP8.classList.toggle("oculto");
    divP8.classList.toggle("oculto");
    await delay(300);
    imgP8.classList.toggle("activatedEsp8");
    tituloP8.classList.toggle("activated");
    await delay(300);
    descP8.classList.toggle("activated");
    divP8.classList.toggle("activated");
}
async function GelPiesB(){
    descP8.classList.toggle("activated");
    divP8.classList.toggle("activated");
    await delay(300);
    overlay.classList.toggle("activeo");
    tituloP8.classList.toggle("activated");
    await delay(150);
    imgP8.classList.toggle("activatedEsp8");
    await delay(300);
    /*Correccion de elementos ocultos*/
    imgP8.classList.toggle("oculto");
    tituloP8.classList.toggle("oculto");
    descP8.classList.toggle("oculto");
    divP8.classList.toggle("oculto");
}


/*-----------------------------------------------Acrilico Manos------------------------------------------------------------------ */
document.querySelector("#AcriM").addEventListener("click", AcriM);
function AcriM(){
    contador = 9;
    abrirpop();
}
async function AcrilicoManos(){
    /*Correccion de elementos ocultos*/
    imgP9.classList.toggle("oculto");
    tituloP9.classList.toggle("oculto");
    descP9.classList.toggle("oculto");
    divP9.classList.toggle("oculto");
    await delay(300);
    imgP9.classList.toggle("activatedEsp9");
    tituloP9.classList.toggle("activated");
    await delay(300);
    descP9.classList.toggle("activated");
    divP9.classList.toggle("activated");
}
async function AcrilicoManosB(){
    descP9.classList.toggle("activated");
    divP9.classList.toggle("activated");
    await delay(300);
    overlay.classList.toggle("activeo");
    tituloP9.classList.toggle("activated");
    await delay(150);
    imgP9.classList.toggle("activatedEsp9");
    await delay(300);
    /*Correccion de elementos ocultos*/
    imgP9.classList.toggle("oculto");
    tituloP9.classList.toggle("oculto");
    descP9.classList.toggle("oculto");
    divP9.classList.toggle("oculto");
}


/*-----------------------------------------------Acrilico Pies------------------------------------------------------------------ */
document.querySelector("#AcriP").addEventListener("click", AcriP);
function AcriP(){
    contador = 10;
    abrirpop();
}
async function AcrilicoPies(){
    /*Correccion de elementos ocultos*/
    imgP10.classList.toggle("oculto");
    tituloP10.classList.toggle("oculto");
    descP10.classList.toggle("oculto");
    divP10.classList.toggle("oculto");
    await delay(300);
    imgP10.classList.toggle("activatedEsp10");
    tituloP10.classList.toggle("activated");
    await delay(300);
    descP10.classList.toggle("activated");
    divP10.classList.toggle("activated");
}
async function AcrilicoPiesB(){
    descP10.classList.toggle("activated");
    divP10.classList.toggle("activated");
    await delay(300);
    overlay.classList.toggle("activeo");
    tituloP10.classList.toggle("activated");
    await delay(150);
    imgP10.classList.toggle("activatedEsp10");
    await delay(300);
    /*Correccion de elementos ocultos*/
    imgP10.classList.toggle("oculto");
    tituloP10.classList.toggle("oculto");
    descP10.classList.toggle("oculto");
    divP10.classList.toggle("oculto");
}


/*-----------------------------------------------Desintoxicacion Ionica------------------------------------------------------------------ */
document.querySelector("#Detox").addEventListener("click", Detox);
function Detox(){
    contador = 11;
    abrirpop();
}
async function DesintoxicacionIonica(){
    /*Correccion de elementos ocultos*/
    imgP11.classList.toggle("oculto");
    tituloP11.classList.toggle("oculto");
    descP11.classList.toggle("oculto");
    divP11.classList.toggle("oculto");
    await delay(300);
    imgP11.classList.toggle("activatedEsp11");
    tituloP11.classList.toggle("activated");
    await delay(300);
    descP11.classList.toggle("activated");
    divP11.classList.toggle("activated");
}
async function DesintoxicacionIonicaB(){
    descP11.classList.toggle("activated");
    divP11.classList.toggle("activated");
    await delay(300);
    overlay.classList.toggle("activeo");
    tituloP11.classList.toggle("activated");
    await delay(150);
    imgP11.classList.toggle("activatedEsp11");
    await delay(300);
    /*Correccion de elementos ocultos*/
    imgP11.classList.toggle("oculto");
    tituloP11.classList.toggle("oculto");
    descP11.classList.toggle("oculto");
    divP11.classList.toggle("oculto");
}


/*-----------------------------------------------Desintoxicacion Ionica + ------------------------------------------------------------------ */
document.querySelector("#DetoxP").addEventListener("click", DetoxP);
function DetoxP(){
    contador = 12;
    abrirpop();
}
async function DesintoxicacionIonicaP(){
    /*Correccion de elementos ocultos*/
    imgP12.classList.toggle("oculto");
    tituloP12.classList.toggle("oculto");
    descP12.classList.toggle("oculto");
    divP12.classList.toggle("oculto");
    await delay(300);
    imgP12.classList.toggle("activatedEsp12");
    tituloP12.classList.toggle("activated");
    await delay(300);
    descP12.classList.toggle("activated");
    divP12.classList.toggle("activated");
}
async function DesintoxicacionIonicaPB(){
    descP12.classList.toggle("activated");
    divP12.classList.toggle("activated");
    await delay(300);
    overlay.classList.toggle("activeo");
    tituloP12.classList.toggle("activated");
    await delay(150);
    imgP12.classList.toggle("activatedEsp12");
    await delay(300);
    /*Correccion de elementos ocultos*/
    imgP12.classList.toggle("oculto");
    tituloP12.classList.toggle("oculto");
    descP12.classList.toggle("oculto");
    divP12.classList.toggle("oculto");
}


/*---------------------------------------------------------------------------------------------Funcion que abre Pestañas Clasicas */
document.querySelector("#Clas").addEventListener("click", popPclas); //Pestañas Clasicas
function popPclas(){
    contador = 13;
    abrirpop();
}
async function PestañasClasicas(){
    //Quitar Correccion de elementos Ocultos
    imgP13.classList.toggle("oculto");
    tituloP13.classList.toggle("oculto");
    descP13.classList.toggle("oculto");
    div13.classList.toggle("oculto");
    divPB13.classList.toggle("oculto");
    extra13.classList.toggle("oculto");
    //Inicio de las Animacion de Visibilidad de los elementos
    await delay(300);
    imgP13.classList.toggle("activatedEsp13");
    tituloP13.classList.toggle("activated");
    await delay(300);
    descP13.classList.toggle("activated");
    div13.classList.toggle("activated");
    divPB13.classList.toggle("activated");
    extra13.classList.toggle("activated");
}
async function PestañasClasicasB(){
    extra13.classList.toggle("activated");
    descP13.classList.toggle("activated");
    div13.classList.toggle("activated");
    divPB13.classList.toggle("activated");
    await delay(300);
    overlay.classList.toggle("activeo");
    tituloP13.classList.toggle("activated");
    await delay(150);
    imgP13.classList.toggle("activatedEsp13");
    await delay(300);
    //Correcion de elementos ocultos
    imgP13.classList.toggle("oculto");
    tituloP13.classList.toggle("oculto");
    descP13.classList.toggle("oculto");
    div13.classList.toggle("oculto");
    divPB13.classList.toggle("oculto");
    extra13.classList.toggle("oculto");
}


/*---------------------------------------------------------------------------------------------Funcion que abre Pestañas Clasicas CavitoSPA */
document.querySelector("#ClasC").addEventListener("click", popPclasC); //Pestañas Clasicas
function popPclasC(){
    contador = 14;
    abrirpop();
}
async function PestañasClasicasC(){
    //Quitar Correccion de elementos Ocultos
    imgP14.classList.toggle("oculto");
    tituloP14.classList.toggle("oculto");
    descP14.classList.toggle("oculto");
    div14.classList.toggle("oculto");
    divPB14.classList.toggle("oculto");
    extra14.classList.toggle("oculto");
    //Inicio de las Animacion de Visibilidad de los elementos
    await delay(300);
    imgP14.classList.toggle("activatedEsp14");
    tituloP14.classList.toggle("activated");
    await delay(300);
    descP14.classList.toggle("activated");
    div14.classList.toggle("activated");
    divPB14.classList.toggle("activated");
    extra14.classList.toggle("activated");
}
async function PestañasClasicasCB(){
    extra14.classList.toggle("activated");
    descP14.classList.toggle("activated");
    div14.classList.toggle("activated");
    divPB14.classList.toggle("activated");
    await delay(300);
    overlay.classList.toggle("activeo");
    tituloP14.classList.toggle("activated");
    await delay(150);
    imgP14.classList.toggle("activatedEsp14");
    await delay(300);
    //Correcion de elementos ocultos
    imgP14.classList.toggle("oculto");
    tituloP14.classList.toggle("oculto");
    descP14.classList.toggle("oculto");
    div14.classList.toggle("oculto");
    divPB14.classList.toggle("oculto");
    extra14.classList.toggle("oculto");
}


/*---------------------------------------------------------------------------------------------Funcion que abre Volumen Hawaiano */
document.querySelector("#VHaw").addEventListener("click", popHaw); 
function popHaw(){
    contador = 15;
    abrirpop()
}
async function VolumenHawaiano(){
    //Quitar Correccion de elementos Ocultos
    imgP15.classList.toggle("oculto");
    tituloP15.classList.toggle("oculto");
    descP15.classList.toggle("oculto");
    div15.classList.toggle("oculto");
    divPB15.classList.toggle("oculto");
    extra15.classList.toggle("oculto");
    //Inicio de las Animacion de Visibilidad de los elementos
    await delay(300);
    imgP15.classList.toggle("activatedEsp15");
    tituloP15.classList.toggle("activated");
    await delay(300);
    descP15.classList.toggle("activated");
    div15.classList.toggle("activated");
    divPB15.classList.toggle("activated");
    extra15.classList.toggle("activated");
}
async function VolumenHawaianoB(){
    extra15.classList.toggle("activated");
    descP15.classList.toggle("activated");
    div15.classList.toggle("activated");
    divPB15.classList.toggle("activated");
    await delay(300);
    overlay.classList.toggle("activeo");
    tituloP15.classList.toggle("activated");
    await delay(150);
    imgP15.classList.toggle("activatedEsp15");
    await delay(300);
    //Correcion de elementos ocultos
    imgP15.classList.toggle("oculto");
    tituloP15.classList.toggle("oculto");
    descP15.classList.toggle("oculto");
    div15.classList.toggle("oculto");
    divPB15.classList.toggle("oculto");
    extra15.classList.toggle("oculto");
}


/*---------------------------------------------------------------------------------------------Funcion que abre Hibridas */
document.querySelector("#Hib").addEventListener("click", popH); 
function popH(){
    contador = 16;
    abrirpop()
}
async function Hibridas(){
    //Quitar Correccion de elementos Ocultos
    imgP16.classList.toggle("oculto");
    tituloP16.classList.toggle("oculto");
    descP16.classList.toggle("oculto");
    div16.classList.toggle("oculto");
    divPB16.classList.toggle("oculto");
    extra16.classList.toggle("oculto");
    //Inicio de las Animacion de Visibilidad de los elementos
    await delay(300);
    imgP16.classList.toggle("activatedEsp16");
    tituloP16.classList.toggle("activated");
    await delay(300);
    descP16.classList.toggle("activated");
    div16.classList.toggle("activated");
    divPB16.classList.toggle("activated");
    extra16.classList.toggle("activated");
}
async function HibridasB(){
    extra16.classList.toggle("activated");
    descP16.classList.toggle("activated");
    div16.classList.toggle("activated");
    divPB16.classList.toggle("activated");
    await delay(300);
    overlay.classList.toggle("activeo");
    tituloP16.classList.toggle("activated");
    await delay(150);
    imgP16.classList.toggle("activatedEsp16");
    await delay(300);
    //Correcion de elementos ocultos
    imgP16.classList.toggle("oculto");
    tituloP16.classList.toggle("oculto");
    descP16.classList.toggle("oculto");
    div16.classList.toggle("oculto");
    divPB16.classList.toggle("oculto");
    extra16.classList.toggle("oculto");
}


/*---------------------------------------------------------------------------------------------Funcion que abre Volumen 3d */
document.querySelector("#V3d").addEventListener("click", pop3d); 
function pop3d(){
    contador = 17;
    abrirpop()
}
async function Volumen3d(){
    //Quitar Correccion de elementos Ocultos
    imgP17.classList.toggle("oculto");
    tituloP17.classList.toggle("oculto");
    descP17.classList.toggle("oculto");
    div17.classList.toggle("oculto");
    divPB17.classList.toggle("oculto");
    extra17.classList.toggle("oculto");
    //Inicio de las Animacion de Visibilidad de los elementos
    await delay(300);
    imgP17.classList.toggle("activatedEsp17");
    tituloP17.classList.toggle("activated");
    await delay(300);
    descP17.classList.toggle("activated");
    div17.classList.toggle("activated");
    divPB17.classList.toggle("activated");
    extra17.classList.toggle("activated");
}
async function Volumen3dB(){
    extra17.classList.toggle("activated");
    descP17.classList.toggle("activated");
    div17.classList.toggle("activated");
    divPB17.classList.toggle("activated");
    await delay(300);
    overlay.classList.toggle("activeo");
    tituloP17.classList.toggle("activated");
    await delay(150);
    imgP17.classList.toggle("activatedEsp17");
    await delay(300);
    //Correcion de elementos ocultos
    imgP17.classList.toggle("oculto");
    tituloP17.classList.toggle("oculto");
    descP17.classList.toggle("oculto");
    div17.classList.toggle("oculto");
    divPB17.classList.toggle("oculto");
    extra17.classList.toggle("oculto");
}


/*---------------------------------------------------------------------------------------------Funcion que abre Volumen Griego 5D */
document.querySelector("#Vgrie").addEventListener("click", popG5D); 
function popG5D(){
    contador = 18;
    abrirpop()
}
async function VolumenGriego(){
    //Quitar Correccion de elementos Ocultos
    imgP18.classList.toggle("oculto");
    tituloP18.classList.toggle("oculto");
    descP18.classList.toggle("oculto");
    div18.classList.toggle("oculto");
    divPB18.classList.toggle("oculto");
    extra18.classList.toggle("oculto");
    //Inicio de las Animacion de Visibilidad de los elementos
    await delay(300);
    imgP18.classList.toggle("activatedEsp18");
    tituloP18.classList.toggle("activated");
    await delay(300);
    descP18.classList.toggle("activated");
    div18.classList.toggle("activated");
    divPB18.classList.toggle("activated");
    extra18.classList.toggle("activated");
}
async function VolumenGriegoB(){
    extra18.classList.toggle("activated");
    descP18.classList.toggle("activated");
    div18.classList.toggle("activated");
    divPB18.classList.toggle("activated");
    await delay(300);
    overlay.classList.toggle("activeo");
    tituloP18.classList.toggle("activated");
    await delay(150);
    imgP18.classList.toggle("activatedEsp18");
    await delay(300);
    //Correcion de elementos ocultos
    imgP18.classList.toggle("oculto");
    tituloP18.classList.toggle("oculto");
    descP18.classList.toggle("oculto");
    div18.classList.toggle("oculto");
    divPB18.classList.toggle("oculto");
    extra18.classList.toggle("oculto");
}


/*---------------------------------------------------------------------------------------------Funcion que abre Volumen CavitoSPA 8D */
document.querySelector("#VSPA").addEventListener("click", popV8D); 
function popV8D(){
    contador = 19;
    abrirpop()
}
async function VolumenCavitoSPA8D(){
    //Quitar Correccion de elementos Ocultos
    imgP19.classList.toggle("oculto");
    tituloP19.classList.toggle("oculto");
    descP19.classList.toggle("oculto");
    div19.classList.toggle("oculto");
    divPB19.classList.toggle("oculto");
    extra19.classList.toggle("oculto");
    //Inicio de las Animacion de Visibilidad de los elementos
    await delay(300);
    imgP19.classList.toggle("activatedEsp19");
    tituloP19.classList.toggle("activated");
    await delay(300);
    descP19.classList.toggle("activated");
    div19.classList.toggle("activated");
    divPB19.classList.toggle("activated");
    extra19.classList.toggle("activated");
}
async function VolumenCavitoSPA8DB(){
    extra19.classList.toggle("activated");
    descP19.classList.toggle("activated");
    div19.classList.toggle("activated");
    divPB19.classList.toggle("activated");
    await delay(300);
    overlay.classList.toggle("activeo");
    tituloP19.classList.toggle("activated");
    await delay(150);
    imgP19.classList.toggle("activatedEsp19");
    await delay(300);
    //Correcion de elementos ocultos
    imgP19.classList.toggle("oculto");
    tituloP19.classList.toggle("oculto");
    descP19.classList.toggle("oculto");
    div19.classList.toggle("oculto");
    divPB19.classList.toggle("oculto");
    extra19.classList.toggle("oculto");
}


/*---------------------------------------------------------------------------------------------Funcion que abre Volumen */
document.querySelector("#Vol").addEventListener("click", popVol); 
function popVol(){
    contador = 20;
    abrirpop()
}
async function Volumen(){
    //Quitar Correccion de elementos Ocultos
    imgP20.classList.toggle("oculto");
    tituloP20.classList.toggle("oculto");
    descP20.classList.toggle("oculto");
    div20.classList.toggle("oculto");
    divPB20.classList.toggle("oculto");
    extra20.classList.toggle("oculto");
    //Inicio de las Animacion de Visibilidad de los elementos
    await delay(300);
    imgP20.classList.toggle("activatedEsp20");
    tituloP20.classList.toggle("activated");
    await delay(300);
    descP20.classList.toggle("activated");
    div20.classList.toggle("activated");
    divPB20.classList.toggle("activated");
    extra20.classList.toggle("activated");
}
async function VolumenB(){
    extra20.classList.toggle("activated");
    descP20.classList.toggle("activated");
    div20.classList.toggle("activated");
    divPB20.classList.toggle("activated");
    await delay(300);
    overlay.classList.toggle("activeo");
    tituloP20.classList.toggle("activated");
    await delay(150);
    imgP20.classList.toggle("activatedEsp20");
    await delay(300);
    //Correcion de elementos ocultos
    imgP20.classList.toggle("oculto");
    tituloP20.classList.toggle("oculto");
    descP20.classList.toggle("oculto");
    div20.classList.toggle("oculto");
    divPB20.classList.toggle("oculto");
    extra20.classList.toggle("oculto");
}


/*---------------------------------------------------------------------------------------------Funcion que abre Mega Volumen */
document.querySelector("#MVol").addEventListener("click", popMVol); 
function popMVol(){
    contador = 21;
    abrirpop()
}
async function MegaVolumen(){
    //Quitar Correccion de elementos Ocultos
    imgP21.classList.toggle("oculto");
    tituloP21.classList.toggle("oculto");
    descP21.classList.toggle("oculto");
    div21.classList.toggle("oculto");
    divPB21.classList.toggle("oculto");
    extra21.classList.toggle("oculto");
    //Inicio de las Animacion de Visibilidad de los elementos
    await delay(300);
    imgP21.classList.toggle("activatedEsp21");
    tituloP21.classList.toggle("activated");
    await delay(300);
    descP21.classList.toggle("activated");
    div21.classList.toggle("activated");
    divPB21.classList.toggle("activated");
    extra21.classList.toggle("activated");
}
async function MegaVolumenB(){
    extra21.classList.toggle("activated");
    descP21.classList.toggle("activated");
    div21.classList.toggle("activated");
    divPB21.classList.toggle("activated");
    await delay(300);
    overlay.classList.toggle("activeo");
    tituloP21.classList.toggle("activated");
    await delay(150);
    imgP21.classList.toggle("activatedEsp21");
    await delay(300);
    //Correcion de elementos ocultos
    imgP21.classList.toggle("oculto");
    tituloP21.classList.toggle("oculto");
    descP21.classList.toggle("oculto");
    div21.classList.toggle("oculto");
    divPB21.classList.toggle("oculto");
    extra21.classList.toggle("oculto");
}
/*---------------------------------------------------------------------------------------------Funcion que abre Retiro */
document.querySelector("#Ret").addEventListener("click", popRet); 
function popRet(){
    contador = 22;
    abrirpop()
}
async function Retiro(){
    //Quitar Correccion de elementos Ocultos
    imgP22.classList.toggle("oculto");
    tituloP22.classList.toggle("oculto");
    descP22.classList.toggle("oculto");
    div22.classList.toggle("oculto");
    //Inicio de las Animacion de Visibilidad de los elementos
    await delay(300);
    imgP22.classList.toggle("activatedEsp22");
    tituloP22.classList.toggle("activated");
    await delay(300);
    descP22.classList.toggle("activated");
    div22.classList.toggle("activated");
}
async function RetiroB(){
    descP22.classList.toggle("activated");
    div22.classList.toggle("activated");
    await delay(300);
    overlay.classList.toggle("activeo");
    tituloP22.classList.toggle("activated");
    await delay(150);
    imgP22.classList.toggle("activatedEsp22");
    await delay(300);
    //Correcion de elementos ocultos
    imgP22.classList.toggle("oculto");
    tituloP22.classList.toggle("oculto");
    descP22.classList.toggle("oculto");
    div22.classList.toggle("oculto");
}


/*---------------------------------------------------------------------------------------------Funcion que abre LX */
document.querySelector("#XL").addEventListener("click", popXL); 
function popXL(){
    contador = 23;
    abrirpop()
}
async function ExtraLargo(){
    //Quitar Correccion de elementos Ocultos
    imgP23.classList.toggle("oculto");
    tituloP23.classList.toggle("oculto");
    descP23.classList.toggle("oculto");
    div23.classList.toggle("oculto");
    //Inicio de las Animacion de Visibilidad de los elementos
    await delay(300);
    imgP23.classList.toggle("activatedEsp23");
    tituloP23.classList.toggle("activated");
    await delay(300);
    descP23.classList.toggle("activated");
    div23.classList.toggle("activated");
}
async function ExtraLargoB(){
    descP23.classList.toggle("activated");
    div23.classList.toggle("activated");
    await delay(300);
    overlay.classList.toggle("activeo");
    tituloP23.classList.toggle("activated");
    await delay(150);
    imgP23.classList.toggle("activatedEsp23");
    await delay(300);
    //Correcion de elementos ocultos
    imgP23.classList.toggle("oculto");
    tituloP23.classList.toggle("oculto");
    descP23.classList.toggle("oculto");
    div23.classList.toggle("oculto");
}


/*---------------------------------------------------------------------------------------------Funcion que abre PopColor */
document.querySelector("#PCol").addEventListener("click", popPCol); 
function popPCol(){
    contador = 24;
    abrirpop()
}
async function PopColor(){
    //Quitar Correccion de elementos Ocultos
    imgP24.classList.toggle("oculto");
    tituloP24.classList.toggle("oculto");
    descP24.classList.toggle("oculto");
    div24.classList.toggle("oculto");
    //Inicio de las Animacion de Visibilidad de los elementos
    await delay(300);
    imgP24.classList.toggle("activatedEsp24");
    tituloP24.classList.toggle("activated");
    await delay(300);
    descP24.classList.toggle("activated");
    div24.classList.toggle("activated");
}
async function PopColorB(){
    descP24.classList.toggle("activated");
    div24.classList.toggle("activated");
    await delay(300);
    overlay.classList.toggle("activeo");
    tituloP24.classList.toggle("activated");
    await delay(150);
    imgP24.classList.toggle("activatedEsp24");
    await delay(300);
    //Correcion de elementos ocultos
    imgP24.classList.toggle("oculto");
    tituloP24.classList.toggle("oculto");
    descP24.classList.toggle("oculto");
    div24.classList.toggle("oculto");
}


/*---------------------------------------------------------------------------------------------Funcion que abre Color */
document.querySelector("#Col").addEventListener("click", popCol); 
function popCol(){
    contador = 25;
    abrirpop()
}
async function Color(){
    //Quitar Correccion de elementos Ocultos
    imgP25.classList.toggle("oculto");
    tituloP25.classList.toggle("oculto");
    descP25.classList.toggle("oculto");
    div25.classList.toggle("oculto");
    //Inicio de las Animacion de Visibilidad de los elementos
    await delay(300);
    imgP25.classList.toggle("activatedEsp25");
    tituloP25.classList.toggle("activated");
    await delay(300);
    descP25.classList.toggle("activated");
    div25.classList.toggle("activated");
}
async function ColorB(){
    descP25.classList.toggle("activated");
    div25.classList.toggle("activated");
    await delay(300);
    overlay.classList.toggle("activeo");
    tituloP25.classList.toggle("activated");
    await delay(150);
    imgP25.classList.toggle("activatedEsp25");
    await delay(300);
    //Correcion de elementos ocultos
    imgP25.classList.toggle("oculto");
    tituloP25.classList.toggle("oculto");
    descP25.classList.toggle("oculto");
    div25.classList.toggle("oculto");
}


/*---------------------------------------------------------------------------------------------Funcion que abre Glitter */
document.querySelector("#Glit").addEventListener("click", popGlit); 
function popGlit(){
    contador = 26;
    abrirpop()
}
async function Glitter(){
    //Quitar Correccion de elementos Ocultos
    imgP26.classList.toggle("oculto");
    tituloP26.classList.toggle("oculto");
    descP26.classList.toggle("oculto");
    div26.classList.toggle("oculto");
    //Inicio de las Animacion de Visibilidad de los elementos
    await delay(300);
    imgP26.classList.toggle("activatedEsp26");
    tituloP26.classList.toggle("activated");
    await delay(300);
    descP26.classList.toggle("activated");
    div26.classList.toggle("activated");
}
async function GlitterB(){
    descP26.classList.toggle("activated");
    div26.classList.toggle("activated");
    await delay(300);
    overlay.classList.toggle("activeo");
    tituloP26.classList.toggle("activated");
    await delay(150);
    imgP26.classList.toggle("activatedEsp26");
    await delay(300);
    //Correcion de elementos ocultos
    imgP26.classList.toggle("oculto");
    tituloP26.classList.toggle("oculto");
    descP26.classList.toggle("oculto");
    div26.classList.toggle("oculto");
}


/*---------------------------------------------------------------------------------------------Funcion que abre Glitter Full */
document.querySelector("#GlitF").addEventListener("click", popGlitF); 
function popGlitF(){
    contador = 27;
    abrirpop()
}
async function GlitterFull(){
    //Quitar Correccion de elementos Ocultos
    imgP27.classList.toggle("oculto");
    tituloP27.classList.toggle("oculto");
    descP27.classList.toggle("oculto");
    div27.classList.toggle("oculto");
    //Inicio de las Animacion de Visibilidad de los elementos
    await delay(300);
    imgP27.classList.toggle("activatedEsp27");
    tituloP27.classList.toggle("activated");
    await delay(300);
    descP27.classList.toggle("activated");
    div27.classList.toggle("activated");
}
async function GlitterFullB(){
    descP27.classList.toggle("activated");
    div27.classList.toggle("activated");
    await delay(300);
    overlay.classList.toggle("activeo");
    tituloP27.classList.toggle("activated");
    await delay(150);
    imgP27.classList.toggle("activatedEsp27");
    await delay(300);
    //Correcion de elementos ocultos
    imgP27.classList.toggle("oculto");
    tituloP27.classList.toggle("oculto");
    descP27.classList.toggle("oculto");
    div27.classList.toggle("oculto");
}


/*---------------------------------------------------------------------------------------------Funcion que abre Diseño de Cejas */
document.querySelector("#DC").addEventListener("click", popDC); 
function popDC(){
    contador = 28;
    abrirpop()
}
async function DiseñoCejas(){
    //Quitar Correccion de elementos Ocultos
    imgP28.classList.toggle("oculto");
    tituloP28.classList.toggle("oculto");
    descP28.classList.toggle("oculto");
    div28.classList.toggle("oculto");
    //Inicio de las Animacion de Visibilidad de los elementos
    await delay(300);
    imgP28.classList.toggle("activatedEsp28");
    tituloP28.classList.toggle("activated");
    await delay(300);
    descP28.classList.toggle("activated");
    div28.classList.toggle("activated");
}
async function DiseñoCejasB(){
    descP28.classList.toggle("activated");
    div28.classList.toggle("activated");
    await delay(300);
    overlay.classList.toggle("activeo");
    tituloP28.classList.toggle("activated");
    await delay(150);
    imgP28.classList.toggle("activatedEsp28");
    await delay(300);
    //Correcion de elementos ocultos
    imgP28.classList.toggle("oculto");
    tituloP28.classList.toggle("oculto");
    descP28.classList.toggle("oculto");
    div28.classList.toggle("oculto");
}


//---------------------------Funcion Que Abre El PoPup
async function abrirpop(){
    overlay.classList.toggle("activeo");
    popup.classList.toggle("activep");
    line1.classList.toggle("up");
    line2.classList.toggle("up");
    /*Aqui ingresaremos el case con las opciones a elegir sobre el menu */
    switch(contador){
        case 1: 
            ManicuraClasica();
            break;
        case 2:
            PedicuraClasica();
            break;
        case 3:
            ManicuraPremium();
            break;
        case 4:
            PedicuraPremium();
            break;
        case 5:
            ManicuraDeluxe();
            break;
        case 6:
            PedicuraDeluxe();
            break;
        case 7:
            GelManos();
            break;
        case 8: 
            GelPies();
            break;
        case 9:
            AcrilicoManos();
            break;
        case 10:
            AcrilicoPies();
            break;  
        case 11:
            DesintoxicacionIonica();
            break;
        case 12:
            DesintoxicacionIonicaP();
            break; 
        case 13:
            PestañasClasicas();
            break;
        case 14:
            PestañasClasicasC();
            break;
        case 15:
            VolumenHawaiano();
            break;
        case 16:
            Hibridas();
            break;
        case 17:
            Volumen3d();
            break;
        case 18:
            VolumenGriego();
            break;
        case 19:
            VolumenCavitoSPA8D();
            break;
        case 20: 
            Volumen();
            break;
        case 21:
            MegaVolumen();
            break;
        case 22: 
            Retiro();
            break;
        case 23: 
            ExtraLargo();
            break;
        case 24:
            PopColor();
            break;
        case 25:
            Color();
            break;
        case 26:
            Glitter();
            break;
        case 27:
            GlitterFull();
            break;
        case 28:
            DiseñoCejas();
            break;
        default: 
            console.log("Oops, Ocurrio un Error");
    }
    line1.classList.toggle("up");
    line2.classList.toggle("up");
    line1.classList.toggle("static");
    line2.classList.toggle("static");
}
// ---------------------------Funcion Que Cierra el PopUp
async function cerrarpop(){
    line1.classList.toggle("down");
    line2.classList.toggle("down");
    line1.classList.toggle("static");
    line2.classList.toggle("static");
    await delay(300);
    /*Aqui ingresaremos el case con las opciones a elegir sobre el menu */
    switch(contador){
        case 1: 
            ManicuraClasicaB();
            break;
        case 2:
            PedicuraClasicaB();
            break;
        case 3:
            ManicuraPremiumB();
            break;
        case 4:
            PedicuraPremiumB();
            break;
        case 5:
            ManicuraDeluxeB();
            break;
        case 6:
            PedicuraDeluxeB();
            break;
        case 7:
            GelManosB();
            break;
        case 8:
            GelPiesB();
            break;
        case 9:
            AcrilicoManosB();
            break;
        case 10:
            AcrilicoPiesB();
            break;
        case 11:
            DesintoxicacionIonicaB();
            break;
        case 12:
            DesintoxicacionIonicaPB();
            break;
        case 13: 
            PestañasClasicasB();
            break;
        case 14:
            PestañasClasicasCB();
            break;
        case 15:
            VolumenHawaianoB();
            break;
        case 16:
            HibridasB();
            break;
        case 17:
            Volumen3dB();
            break;
        case 18:
            VolumenGriegoB();
            break;
        case 19:
            VolumenCavitoSPA8DB();
            break;
        case 20:
            VolumenB();
            break;
        case 21:
            MegaVolumenB();
            break;
        case 22:
            RetiroB();
            break;
        case 23: 
            ExtraLargoB();
            break;
        case 24:
            PopColorB();
            break;
        case 25:
            ColorB();
            break;
        case 26:
            GlitterB();
            break;
        case 27:
            GlitterFullB();
            break;
        case 28:
            DiseñoCejasB();
            break;
        default: 
            console.log("Oops, Ocurrio un Error");
    }
    await delay(550);

    popup.classList.toggle("activep");
    line1.classList.toggle("down");
    line2.classList.toggle("down");
}