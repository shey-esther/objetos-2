ejercicio 3
function objeto(arreglo){
 var obj = arreglo.reduce(function(num1, num2, i) {
  num1['propiedad'+i] = num2;
  return acc;
}, {});
  return obj;
}
var objeto1 =['6', '5', '4','3','2','1'];
console.log(objeto(objeto1));
