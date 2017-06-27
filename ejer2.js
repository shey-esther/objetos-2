function estudiante(nombre, edad, ocupacion, genero){
  this.nombre = nombre;
  this.edad = edad;
  this.ocupacion = ocupacion;
  this.genero = genero;
  this.mensaje = function(){
    if(edad > 17 && ocupacion == "Estudiante Laboratoria"){
      return "You're awesome";
    }else{
      return "Upsiii";
    }
  }
}
var estudiante1 = new estudiante("Tamara", 15, "Estudiante Laboratoria", "Femenino");
var estudiante2 = new estudiante("Tamara", 22, "Estudiante Laboratoria", "Femenino");
console.log(estudiante1.mensaje());
console.log(estudiante2.mensaje());
