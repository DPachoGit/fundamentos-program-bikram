//1._
let variableSinValor;
//2._
let booleano1 = true;
let booleano2 = false;
//3._
const PI = 3.14;
//4._
const TAU = 2*PI;
//5._
let booleanoAnd = booleano1 === booleano2;
//6._
let booleanoNot = !booleano1;
//7._
let booleanoMix0 = (booleano1 ||  booleano2) && (booleano1 || (!booleano1 && !booleano2))
//8._
let incrementarDesp = 2;
let resultadoDesp = incrementarDesp ++;
//9._
let incrementarAntes = 2;
let resultadoAntes = ++ incrementarDesp
//10._
let contarHasta10_2 = 0;
for ( i = 0; i < 10; i++) {
    contarHasta10_2++;
  }
//11._
let postI = 0;
let postJ = 0;
for ( i = 0; i < 11; i++) {
    postI += postJ++;
 }
//12._
let sumaPares = 0
for ( i = 0; i < 10; i++) {
   if(i%2 === 0){
    sumaPares += i
   }
}
//13._
let variableValorNumerico = 5;
//14._
const MiNombre = 'David';
//15._
const MiNumeroFav = 5;
//16._
let booleanoOr = booleano1 || booleano2;
//17._
let booleanoMix1 = (booleano1 && (TAU/2 === PI)) || (variableValorNumerico >= MiNumeroFav);
//18._
let seisNoEsNueve = 6 !== 9;
//19._
let booleanoMix2 = variableValorNumerico > 0 ||variableValorNumerico -(MiNumeroFav * TAU)
//20._
let valorSuma = MiNumeroFav + variableValorNumerico
//21._
let valorResta = MiNumeroFav - variableValorNumerico
//22._
let valorMultiplicación = MiNumeroFav * variableValorNumerico
//23._
let valorDivisión = MiNumeroFav/3
//24._
let contarHasta10 = 0
while(contarHasta10 !== 10){
    contarHasta10++;
}
//25._
let preI = 0
let preJ = 0
for ( i = 0; i < 11; i++) {
    preII += ++preJ;
 }
//26._
let sumaImpares = 0
for ( i = 0; i < 10; i++) {
   if(i%2 !== 0){
    sumaImpares += i
   }
}