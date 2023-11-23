fome = prompt("Você está com fome? Digite S ou N:")
dinheiro = prompt("Você tem dinheiro? Digite S ou N:")
restaurante = prompt("O restaurante está aberto? Digite S ou N")

if(fome == "N" || dinheiro == "N"){
    console.log("Hoje a janta será em casa")
} if(fome == "S" && dinheiro == "S" && restaurante == "N"){
    console.log("Peça um delivery!")
} else if(fome == "S" && dinheiro == "S" && restaurante == "S"){
    console.log("Hoje o jantar será no seu restaurante preferido!")
}