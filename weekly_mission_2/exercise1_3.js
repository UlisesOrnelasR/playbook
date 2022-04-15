console.log('Ejercicio 1 diagrama 3')

const PullRequest = {
    title: 'Añadiendo un ForEach',
    branchName: 'desarrollo',
    status: ['open', 'closed'],
    repositoryNameAssociated: '@AngelesOrnelas',
    getStatus: function(){
        return `The state is -${this.status}-`
    },
    getTitleAndAuthor : function(){
        return `The title is -${this.title}- and author is ${this.repositoryNameAssociated}`
    }
}
console.log(PullRequest.getStatus())
console.log(PullRequest.getTitleAndAuthor())
