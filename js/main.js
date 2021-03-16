function contacitve (){
    var selector = document.getElementById("cont-colors");
    var selector2 = document.getElementById("btn-elemento");
    selector.classList.toggle("active");
    selector2.classList.toggle("active");
}

function bgblanco (){
    var selector = document.getElementById("body");
    selector.classList.toggle("blanco");
}

function azul1 (){
    var selector = document.getElementById("body");
    selector.classList.toggle("azul");
}

function dorado1 (){
    var selector = document.getElementById("body");
    selector.classList.toggle("dorado"); 
}

AOS.init();

