console.log("Hola mundo");
var matriz = [
    ['N',0,0,0,'L'],
    [0,'O',0,'O',0],
    [0,0,'C',0,0],
    [0,'O',0,'H',0],
    ['S',0,0,0,'E'],
             ]
console.log(matriz[0][0],matriz[1][1],matriz[2][2],matriz[3][3],matriz[4][4])
console.log(matriz[0][4],matriz[1][3],matriz[2][2],matriz[3][1],matriz[4][0])

//Condicionales Index Of

var one= "esto es una prueba 1"
var two= "esto es una prueba 2"
var three= "kkk"

//para saber si three esta dentro de two y one
if (one.indexOf(three)!=-1){
    console.log("Esta variable si esta dentro de one")}
else{console.log("esta variable no esta en one")}

if (two.indexOf(three)!=-1){
    console.log("esta variable también esta dentro de two")}
else{console.log("esta variable no esta en two")}

//para saber si two esta dentro one y three
if (one.indexOf(two)!=-1){
    console.log("esta variable esta dentro de one")}
else{console.log("esta variable no esta en one")}

if (three.indexOf(two)==-1){
    console.log("esta variable no esta dentro de three")}
else{console.log("esta variable esta dentro de three")}

var cuatro= three.indexOf(two)
//ciclos

function getRandom() {
    return Math.floor(Math.random() * 100);
}
var randomNumber = getRandom();

while (randomNumber!=50){
    console.log("randomNumber todavía no es 50");
    var randomNumber = getRandom();
}


//8 metodos de string y 5 metodos de array



//implementar some e invertir elementos con array y map

//




