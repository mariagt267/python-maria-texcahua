var nombre = "mgonzalez"
var email = "zS180213341@estudiantes.uv.mx"
var edad = 20

function getNombre() {
   console.log (nombre);
   // accesamos al DOM
   var myNameElement = document.getElementById ("nombre");
   // myNameElement es un div
   myNameElement.innerHTML = '<b>' + nombre + '</b>';
   // RGB Red Green Blue (RRGGBB)
   myNameElement.style.color = "#C82A54";
}

function getEmail() {
   console.log (email);
   // accesamos al DOM
   var myEmailElement = document.getElementById ("email");
   // myEmailElement es un div
   myEmailElement.innerHTML = '<H3>' + email + '</H3>';
   // RGB Red Green Blue (RRGGBB)
   myEmailElement.style.color = "#024A86";
}

function getEdad() {
   console.log (edad);
   // accesamos al DOM
   var myEdadElement = document.getElementById ("edad");
   // myEdadElement es un div
   myEdadElement.innerHTML = '<H1>' + edad + '</H1>';
   // RGB Red Green Blue (RRGGBB)
   myEdadElement.style.color = "#EF280F";
}