function somar(){
    let numero1 = parseInt (document.getElementById("num1").value)
    
    let numero2 = parseInt (document.getElementById("num2").value)

    let resultado = numero1 + numero2;

    alert("o resultado da soma é = "+resultado);
    //document.getElementById("resultado").value = resultado;
}

function subtrair(){
    let numero1 = parseInt (document.getElementById("num1").value)
    
    let numero2 = parseInt (document.getElementById("num2").value)

    let resultado = numero1 - numero2;

    // alert("o resultado da subtração é = "+resultado);
    document.getElementById("resultado").value = resultado
}

function multiplicar(){
    let numero1 = parseInt (document.getElementById("num1").value)
    
    let numero2 = parseInt (document.getElementById("num2").value)

    let resultado = numero1 * numero2;

    // alert("o resultado da multiplicação é = "+resultado);
    document.getElementById("resultado").value = resultado
}


function dividir(){
    let numero1 = parseInt (document.getElementById("num1").value)
    
    let numero2 = parseInt (document.getElementById("num2").value)

    let resultado = numero1 / numero2;

    // alert("o resultado da divisão é = "+resultado);
    document.getElementById("resultado").value = resultado
}

function calcular(qualquerNome){
    let conta = document.getElementsByClassName("btnCalc")[0].innerHTML
    
    if(qualquerNome=="somar"){
        somar();
    }

    if(qualquerNome=="subtrair"){
        subtrair();
    }

    if(qualquerNome=="multiplicar"){
        multiplicar();
    }

    if(qualquerNome=="dividir"){
        dividir();
    }
}
