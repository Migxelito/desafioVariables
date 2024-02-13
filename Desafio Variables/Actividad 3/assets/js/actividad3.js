
var gradosc = prompt("Ingrese la temperatura en grados Celsius:","");
var celsius = parseInt(gradosc); 
var kelvin = (celsius + 273.15);
var fahrenheit = ((celsius * 9/5)+ 32);
alert("La temperatura en Kelvin corresponde a: " + kelvin + "°C"); 
alert("La temperatura en Fahrenheit corresponde a: " + fahrenheit + "°F"); 

document.write("La temperatura en Kelvin corresponde a: " + kelvin + "°C");
document.write("La temperatura en Fahrenheit corresponde a: " + fahrenheit + "°F");