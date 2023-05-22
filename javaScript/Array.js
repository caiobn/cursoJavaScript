// var area =  document.getElementById("area")

function entrar(){
    var nome = prompt("Digite seu nome")
    if(nome==""|| nome==null){
         alert("Por favor preencha o campo");
         area.innerHTML = "click no botão para acessar...";
    } 
     else{
         area.innerHTML = "Bem vindo(a) "+nome
    }    
}



// function mostrarNumeros(){
//     var arrayG = new Array (5);
//     arrayG[0] = parseInt(document.getElementById("numero1").value);
//     arrayG[1] = parseInt(document.getElementById("numero2").value);
//     arrayG[2] = parseInt(document.getElementById("numero3").value);
//     arrayG[3] = parseInt(document.getElementById("numero4").value);
//     arrayG[4] = parseInt(document.getElementById("numero5").value);
    
//     var arrayG = new Array (6);
//     arrayH[0] = parseInt(document.getElementById("numero6").value);
//     arrayH[1] = parseInt(document.getElementById("numero7").value);
//     arrayH[2] = parseInt(document.getElementById("numero8").value);
//     arrayH[3] = parseInt(document.getElementById("numero9").value);
//     arrayH[4] = parseInt(document.getElementById("numero10").value);
//     arrayH[5] = parseInt(document.getElementById("numero11").value);
    
//     var arrayI = new Array(11);
//     arrayI[0] = arrayG[0]
//     arrayI[1] = arrayG[1]
//     arrayI[2] = arrayG[2]
//     arrayI[3] = arrayG[3]
//     arrayI[4] = arrayG[4]
//     arrayI[5] = arrayH[0]
//     arrayI[6] = arrayH[1]
//     arrayI[7] = arrayH[2]
//     arrayI[8] = arrayH[3]
//     arrayI[9] = arrayH[4]
//     arrayI[10] = arrayH[5]

//     document.getElementById("resultado1").value = arrayI[0]
//     document.getElementById("resultado2").value = arrayI[1]
//     document.getElementById("resultado3").value = arrayI[2]
//     document.getElementById("resultado4").value = arrayI[3]
//     document.getElementById("resultado5").value = arrayI[4]
//     document.getElementById("resultado6").value = arrayI[5]
//     document.getElementById("resultado7").value = arrayI[6]
//     document.getElementById("resultado8").value = arrayI[7]
//     document.getElementById("resultado9").value = arrayI[8]
//     document.getElementById("resultado10").value = arrayI[9]
//     document.getElementById("resultado11").value = arrayI[10]
// }



// var notas = new Array(5)
// notas[0] = 8.5;
// notas[1] = 5.0;
// notas[2] = 10.0;
// notas[3] = 9.0;
// notas[4] = 4.5;

// // document.write("Na "+diaSemana[3]+" e na "+diaSemana[4]+" que vem iremos tem aula do goocle cloud");

// let diaSemana = new Array(7)
// diaSemana[0] = "Domindo"
// diaSemana[1] = "Segunda-feira"
// diaSemana[2] = "terç-feira"
// diaSemana[3] = "quarta-feira"
// diaSemana[4] = "quinta-feira"
// diaSemana[5] = "sexta-feira"
// diaSemana[6] = "Sabado"

// //document.write("<h2> Na "+diaSemana[3]+" e "+diaSemana[4]+" que vem iremos iniciar aula do google cloud </h2>");

// // var ArrayB = new Array (5);
// // ArrayA[0]=parseInt (prompt("digite o primeiro numero"))
// // ArrayA[1]=parseInt (prompt("digite o segundo numero"))
// // ArrayA[2]=parseInt (prompt("digite o terceiro numero"))
// // ArrayA[3]=parseInt (prompt("digite o quarto numero"))
// // ArrayA[4]=parseInt (prompt("digite o quanto numero"))

// // var ArrayB = new Array (5);
// // ArrayB[0] = ArrayA[0]*ArrayA[0];
// // ArrayB[1] = ArrayA[1]*ArrayA[1];
// // ArrayB[2] = ArrayA[2]*ArrayA[2];
// // ArrayB[3] = ArrayA[3]*ArrayA[3];
// // ArrayB[4] = ArrayA[4]*ArrayA[4];

// var ArrayD = new Array (5)
// ArrayD[0]=parseInt (prompt("digite o primeiro numero"))
// ArrayD[1]=parseInt (prompt("digite o segundo numero"))
// ArrayD[2]=parseInt (prompt("digite o terceiro numero"))
// ArrayD[3]=parseInt (prompt("digite o quarto numero"))
// ArrayD[4]=parseInt (prompt("digite o quinto numero"))

// var ArrayE = new Array (5)
// ArrayE[0]=parseInt (prompt("digite o primeiro numero"))
// ArrayE[1]=parseInt (prompt("digite o segundo numero"))
// ArrayE[2]=parseInt (prompt("digite o terceiro numero"))
// ArrayE[3]=parseInt (prompt("digite o quarto numero"))
// ArrayE[4]=parseInt (prompt("digite o quinto numero"))

// var ArrayF = new Array (10)
// ArrayF[0] = ArrayD[0]
// ArrayF[1] = ArrayD[1]
// ArrayF[2] = ArrayD[2]
// ArrayF[3] = ArrayD[3]
// ArrayF[4] = ArrayD[4]
// ArrayF[5] = ArrayE[0]
// ArrayF[6] = ArrayE[1]
// ArrayF[7] = ArrayE[2]
// ArrayF[8] = ArrayE[3]
// ArrayF[9] = ArrayE[4]


// document.write (ArrayD[0]+"<br>")
// document.write (ArrayD[1]+"<br>")
// document.write (ArrayD[2]+"<br>")
// document.write (ArrayD[3]+"<br>")
// document.write (ArrayD[4]+"<br>")
// document.write (ArrayE[0]+"<br>")
// document.write (ArrayE[1]+"<br>")
// document.write (ArrayE[2]+"<br>")
// document.write (ArrayE[3]+"<br>")
// document.write (ArrayE[4]+"<br>")


// var arrayA1 = new Array (8)
// arrayA1[0] = parseInt(prompt("digite o primeiro numero"))
// arrayA1[1] = parseInt(prompt("digite o segundo numero"))
// arrayA1[2] = parseInt(prompt("digite o terceiro numero"))
// arrayA1[3] = parseInt(prompt("digite o quarto numero"))
// arrayA1[4] = parseInt(prompt("digite o quinto numero"))
// arrayA1[5] = parseInt(prompt("digite o sexto numero"))
// arrayA1[6] = parseInt(prompt("digite o setimo numero"))
// arrayA1[7] = parseInt(prompt("digite o oitavo numero"))

// var arrayB1 = new Array (8)
// arrayB1[0] = arrayA1[0]*3
// arrayB1[1] = arrayA1[1]*3
// arrayB1[2] = arrayA1[2]*3
// arrayB1[3] = arrayA1[3]*3
// arrayB1[4] = arrayA1[4]*3
// arrayB1[5] = arrayA1[5]*3
// arrayB1[6] = arrayA1[6]*3
// arrayB1[7] = arrayA1[7]*3

// document.write ("<h3>O primeiro valor é = "+arrayB1[0]+"</h3>")
// document.write ("<h3>O segundo valor é = "+arrayB1[1]+"</h3>")
// document.write ("<h3>O terceiro valor é = "+arrayB1[2]+"</h3>")
// document.write ("<h3>O querto valor é = "+arrayB1[3]+"</h3>")
// document.write ("<h3>O quinto valor é = "+arrayB1[4]+"</h3>")
// document.write ("<h3>O sexto valor é = "+arrayB1[5]+"</h3>")
// document.write ("<h3>O setimo valor é = "+arrayB1[6]+"</h3>")
// document.write ("<h3>O oitavo valor é = "+arrayB1[7]+"</h3>")

var arrayA2 = new Array (20)
arrayA2[0] = parseInt(prompt("digite o primeiro numero"))
arrayA2[1] = parseInt(prompt("digite o segundo numero"))
arrayA2[2] = parseInt(prompt("digite o terceiro numero"))
arrayA2[3] = parseInt(prompt("digite o quarto numero"))
arrayA2[4] = parseInt(prompt("digite o quinto numero"))
arrayA2[5] = parseInt(prompt("digite o sexto numero"))
arrayA2[6] = parseInt(prompt("digite o setimo numero"))
arrayA2[7] = parseInt(prompt("digite o oitavo numero"))
arrayA2[8] = parseInt(prompt("digite o nono numero"))
arrayA2[9] = parseInt(prompt("digite o desimo numero"))
arrayA2[10] = parseInt(prompt("digite o desimo primeito numero"))
arrayA2[11] = parseInt(prompt("digite o desimo segundo numero"))
arrayA2[12] = parseInt(prompt("digite o desimo terceioro numero"))
arrayA2[13] = parseInt(prompt("digite o desimo quarto numero"))
arrayA2[14] = parseInt(prompt("digite o desimo quinto numero"))
arrayA2[15] = parseInt(prompt("digite o desimo sexto numero"))
arrayA2[16] = parseInt(prompt("digite o desimo setimo numero"))
arrayA2[17] = parseInt(prompt("digite o desimo oitavo numero"))
arrayA2[18] = parseInt(prompt("digite o desimo nono numero"))
arrayA2[19] = parseInt(prompt("digite o vijesimo numero"))

var arrayB2 = new Array (20)
arrayB2[0] =  arrayA2[19] 
arrayB2[1] =  arrayA2[18] 
arrayB2[2] =  arrayA2[17] 
arrayB2[3] =  arrayA2[16] 
arrayB2[4] =  arrayA2[15] 
arrayB2[5] =  arrayA2[14] 
arrayB2[6] =  arrayA2[13] 
arrayB2[7] =  arrayA2[12] 
arrayB2[8] =  arrayA2[11] 
arrayB2[9] =  arrayA2[10] 
arrayB2[10] = arrayA2[9]
arrayB2[11] = arrayA2[8]
arrayB2[12] = arrayA2[7]
arrayB2[13] = arrayA2[6] 
arrayB2[14] = arrayA2[5] 
arrayB2[15] = arrayA2[4]
arrayB2[16] = arrayA2[3] 
arrayB2[17] = arrayA2[2] 
arrayB2[18] = arrayA2[1]
arrayB2[19] = arrayA2[0]

document.write ("<h3>O primeiro valor é = "+arrayB2[0]+"</h3>")
document.write ("<h3>O segundo valor é = "+arrayB2[1]+"</h3>")
document.write ("<h3>O terciro valor é = "+arrayB2[2]+"</h3>")
document.write ("<h3>O quarto valor é = "+arrayB2[3]+"</h3>")
document.write ("<h3>O quinto valor é = "+arrayB2[4]+"</h3>")
document.write ("<h3>O sexto valor é = "+arrayB2[5]+"</h3>")
document.write ("<h3>O setimo valor é = "+arrayB2[6]+"</h3>")
document.write ("<h3>O oitavo valor é = "+arrayB2[7]+"</h3>")
document.write ("<h3>O nono valor é = "+arrayB2[8]+"</h3>")
document.write ("<h3>O desimo valor é = "+arrayB2[9]+"</h3>")
document.write ("<h3>O desimo primeito valor é = "+arrayB2[10]+"</h3>")
document.write ("<h3>O desimo segundo valor é = "+arrayB2[11]+"</h3>")
document.write ("<h3>O desimo terceiro valor é = "+arrayB2[12]+"</h3>")
document.write ("<h3>O desimo quarto valor é = "+arrayB2[13]+"</h3>")
document.write ("<h3>O desimo quinto valor é = "+arrayB2[14]+"</h3>")
document.write ("<h3>O desimo sexto valor é = "+arrayB2[15]+"</h3>")
document.write ("<h3>O desimo setimo valor é = "+arrayB2[16]+"</h3>")
document.write ("<h3>O desimo oitavo valor é = "+arrayB2[17]+"</h3>")
document.write ("<h3>O desimo nono valor é = "+arrayB2[18]+"</h3>")
document.write ("<h3>O vijesimo valor é = "+arrayB2[19]+"</h3>")
