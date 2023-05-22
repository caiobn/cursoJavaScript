var novoParagrafo = document.createElement("p");

var texto = document.createTextNode("Este é o conteudo paragrafo...");
novoParagrafo.appendChild(texto);

var corpoPagina = document.querySelector("body");
console.log(corpoPagina);
corpoPagina.appendChild(novoParagrafo)

var divContainer = document.getElementById("container");
console.log(divContainer);

var elementSpan = document.createElement("span")
elementSpan.appendChild(document.createTextNode("inserindo um texto dentro do span"))
console.log(elementSpan);
divContainer.appendChild(elementSpan)