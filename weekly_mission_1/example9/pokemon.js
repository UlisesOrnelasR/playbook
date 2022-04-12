//Crea la clase.
//Crea un constructor que permita recibir un nombre.
//Crea la función sayHello().
//Crea la función sayMessage().
//Exporta la clase para que pueda ser importada en el archivo main.js.

class pokemon {
    constructor(name) {
      this.name = name // Estás variables se le conocen como atributos
    }
    // métodos
    sayHello() {
      console.log(`Hello, my name is ${this.name}`)
    }
    sayMessage() {
        console.log(`Y soy un pokemon muy poderoso`)
    }
  }
  module.exports = pokemon