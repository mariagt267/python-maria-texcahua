var base;
var altura;
var area;

function calcularArea() {

   // accesamos al DDM
   var baseElement = document.getElementById("base");
   var alturaElement = document.getElementById("altura");
   
   //accesamos a la propiedad value del texto
   base = baseElement.value;
   altura = alturaElement.value;

   console.log(base);
   console.log(altura);

   area = (base * altura) / 2;
   console.log(area);

   // accesamos a DIV resultado	
   var areaElement = document.getElementById("resultado");
   areaElement.innerHTML = 'Area = ' + area;

}