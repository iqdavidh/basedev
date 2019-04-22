class Person {
  constructor(nombre) {
    this.nombre = nombre;
  }

  getNombre() {
    return this.nombre;
  }

  getTitulo(){
    return "mr";
  }


}

if (typeof module !== "undefined") {
  module.exports = {
    factory: function(nombre) {
      return new Person(nombre);
    }
  };
}
