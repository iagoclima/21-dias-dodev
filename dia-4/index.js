nome = prompt("Digite seu nome:")
idade = parseInt(prompt("Digite sua idade:"))
carta = prompt("Possui carta de motorista? S ou N")
carro = prompt("Possui carro? S ou N")

if(idade < 18 || carta == "N"){
    console.log(nome + ", você não pode dirigir")
}else if(idade >= 18 && carta == "S" || carro == "N"){
    console.log(nome + ", você pode dirigir mas não tem um carro")
}else if(idade >= 18 && carta == "S" || carro == "S"){
    console.log(nome + ", você será o motorista")
}

