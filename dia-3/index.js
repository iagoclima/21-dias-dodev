let nome, idade, altura, peso;
let anoDeNascimento, imc;

nome = prompt('Insira seu nome:');
idade = parseInt(prompt('Insira sua idade'));
altura = parseFloat(prompt('Insira sua altura'));
peso = parseFloat(prompt('Insira seu peso'));   

anoDeNascimento = 2023 - idade;
imc = peso / (altura * altura);

console.log('Olá ' + nome + ", você tem " + idade + " anos, nasceu em " + anoDeNascimento + ", tem " + altura + " de altura, pesa " + peso + "kg e seu IMC é " + imc, " Kg/m2");

