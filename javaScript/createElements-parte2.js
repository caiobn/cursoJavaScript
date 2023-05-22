 function adicionaElemento(){
    
    for (let i = 1; i <= 999; i++){
        
        var caixaLabel = document.createElement("label");
        caixaLabel.innerHTML = "Digite um numero"
        document.body.appendChild(caixaLabel)
        
        br = document.createElement("br")

        var caixaInput = document.createElement("input")
        document.body.appendChild(caixaInput)
        document.body.appendChild(br) 
    }

    
}

  
  