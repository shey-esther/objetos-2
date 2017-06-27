function clinica(nombre,apellido,edad,genero,ciudad,pais){
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.genero = genero;
  this.ciudad = ciudad;
  this.pais = pais;
  this.datos = function(){
    return "nombre: " + nombre + "edad : " + edad + "pais: " + pais
  }
}
var clinica1= new clinica("ester","flores",23,"femenino","arequipa","peru");
  console.log(clinica1.datos());
