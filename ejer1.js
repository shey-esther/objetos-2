var assert = requiere('assert')

function numeros(numInicial,numFinal){
  this.numInicial = numInicial;
  this.numFinal = numFinal;
   this.objeto = function(){
     var num = 0;
   for(var i=numInicial; i <= numFinal; i++){
      num += i;
   }
     return num;
  }
}
var numeros1 = new numeros(1,10);
//console.log(numeros1.objeto());
describe('Ejercicio Objeto',function(){
  it('numeros1+....10 = 55',function())
})
