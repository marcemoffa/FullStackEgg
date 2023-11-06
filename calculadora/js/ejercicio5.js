var botones = document.getElementById("teclado");
var visor = document.getElementById("visor");
var borrar = document.getElementById("borrar");
var calcular=true;

botones.addEventListener("click", (e)=>{
    var valor =e.target.innerText[0];
    if(calcular){
        if(valor == "="){
        visor.value=eval(visor.value);
        calcular=false;
        }else{
        visor.value+=valor;
        }
    }
    
});

borrar.addEventListener("click", (e)=>{
    visor.value="";
    calcular=true;
});
