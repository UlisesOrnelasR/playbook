const perfilCR = {
    nickName: 'Fenix',
    tag: '#65544',
    level: 14,
    thropies: 5820,
    league: 'Challenger III',
    Badges: ['Top1 challenge', 'Top3 Royal Tournament', '3000 games played'],

    getNick: function(){
        return `The nickName for this user is "${this.nickName}"`
    },
    getGeneralInfo: function(){
        return `This user is ${this.level} with ${this.thropies} thropies and your badges is ${this.Badges}`
    }
}
console.log(perfilCR.getNick())
console.log(perfilCR.getGeneralInfo())
