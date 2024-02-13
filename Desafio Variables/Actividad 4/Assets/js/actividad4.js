var dato = prompt("ingrese los dias");
var datdias = parseFloat(dato);
var semana=(datdias/7);
var anno = (datdias/365);
let n2 = Math.floor(semana);
//calculo de los anno//
let n1 = Math.floor(anno);
//calculo de las semanas//
var semanaf1 = (n1*52);
var semanaf2 = (n2-semanaf1);
//calculo de los dias//
var diaf1 = (semanaf2*7);
var diaf2 = (n1*365);
var diaf3 = (diaf1+diaf2);
var dias  = (datdias-diaf3);

alert("la cantidad de años es: "+n1+" las semanas: "+semanaf2+" y los dias "+ dias);