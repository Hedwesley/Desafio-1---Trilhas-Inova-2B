//Q1
let nome = "Hedwesley";
alert(`O nome é ${nome}`);

//Q2
let idade = 25;
let altura = 1.75;

alert('Idade: ' + idade + ', altura: ' + altura);

//Q3
let preco = 50;
let desconto = 0.2;

alert('O preço com desconto é: ' + preco*(1-desconto));

//Q4
let temperatura = 30;

if(temperatura > 25){
    alert('Está calor!');
} else {
    alert('Está fresco!');
}

//Q5
let idad = 22;

if(idad >= 18){
    alert('Você é maior de idade');
} else {
    alert('Você é menor de idade');
}

//Q6
let nota = 6;

if(nota >= 7){
    alert('Aprovado');
} else {
    if(nota == 5 || nota == 6){
        alert('Recuperacao');
    } else {
        alert('Reprovado');
    }
}

//Q7
let numero1 = 17;
let numero2 = 22;

if(numero1 == numero2){
    alert('Os números são iguais');
} else {
    alert('Os números são diferentes');
}

//Q8
let nomes = 'Hedwesley';
let idades = 25;

alert('Olá, meu nome é ' + nomes + ' e eu tenho ' + idades + ' anos');

//Q9
for(let i = 1; i <= 10; i++){
    alert(i);
}

//Q10
let op; 
while (op != 5){
    alert('Você está no loop');
    op = prompt('Digite 5 para sair: ');
}
alert('Você saiu');

//Q11
let tabuada = 1;
while(tabuada <= 10){
    alert(`7 x ${tabuada} = ${tabuada*7}`);
    tabuada++;
}

//Q12
let number = 1;
while(number <= 20){
    if(number%2 == 0){
        alert(`${number} é par`);
    }
    number++
}

//Q13
let raio = prompt("Digite o raio em metros do circulo e lhe darei a área dele: ");
let pi = 3.14;
alert(`A área do círculo é ${pi*(raio**2)} m²`);

//14
let n1 = 4;
let n2 = 7;
alert(`O resultado da soma de ${n1} + ${n2} é ${n1+n2}`); 
//Dentro do próprio print é somado os dois números
//O uso de variáveis torna mais fácil a manipalação dos valores

//15
function somatorio(x, y){
    return x + y;
}

function verificarSoma(){
    let x = 50;
    let y = 60;
    console.log(somatorio(x,y));
}
