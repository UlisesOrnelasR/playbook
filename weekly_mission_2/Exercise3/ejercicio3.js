class repo {
    constructor(name, autor, lenguaje, numeroDeCommits, stars, forks){
        this.name = name
        this.autor = autor
        this.lenguaje = lenguaje
        this.numeroDeCommits = numeroDeCommits
        this.stars = stars
        this.forks = forks
    }
    getNameAndAutor(){
        return `${this.name} is the name from that people ${this.autor}`
    }
}

const repo1 = new repo('Cambios en lineas', 'Fanny', 'CSS', 25, 100, 2)
const repo2 = new repo('nuevas imagenes', 'Erika', 'jpg', 42, 100, 133)

console.log('*********EJERCICIO 3***********')
console.log('*********Uso de clases***********')
console.log(repo1)
console.log(repo2)