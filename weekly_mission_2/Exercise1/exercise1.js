
// EJERCICIO 1 SEMANA 2
console.log('Ejercicio 1 SEMANA 2')
const repo = {
    name: 'Vegetales',
    autor: 'Panchito',
    language: 'JS',
    numberOfCommits: 25,
    stars: 15,
    forks: 5,
    issues_open: 5,
    issues_closed: 10,
    getTotalIssues: function() {
        return `Repos totales: ${this.issues_open+this.issues_closed}`
    },
    getGeneralInfo: function() {
        return `This repository ${this.name} was created by ${this.autor}`
    }
}

console.log(repo.getTotalIssues())
console.log(repo.getGeneralInfo())
