const issue = {
    title: 'Feedback live',
    repositoryNameAssociated: '@AngelesOrnelas',
    status: 'open',
    numberOfComments: 17,
    labels: ['bug', 'enhancement'],
    author: 'Pedro',
    dataCreated: 'Nov 10, 2019',
    lastUpdate: 'Nov 19, 2019',
    getTitleAndAuthor: function(){
        return `The title is -${this.title}- and author is -${this.author}-`
    },
    getStatusAndLabel: function(){
        return `The status is -${this.status}- and label 0 is ${this.labels[0]}`
    },
    getGeneralInfo: function(){
        return `The title is -${this.title}- from repository ${this.repositoryNameAssociated} is ${this.status}`
    }

}
console.log('Ejercicio 1 Diagrama 2')
console.log(issue.getTitleAndAuthor())
console.log(issue.getStatusAndLabel())
console.log(issue.getGeneralInfo())