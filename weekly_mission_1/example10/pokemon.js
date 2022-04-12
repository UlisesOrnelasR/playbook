export default class Pokemon {
    // métodos
    constructor(name) {
        this.name = name // Estás variables se le conocen como atributos
      }
    sayHello() {
        console.log(`Hello, my name is ${this.name}`)
    }
    sayMessage() {
        console.log(`Y soy un pokemon muy poderoso`)
    }
}