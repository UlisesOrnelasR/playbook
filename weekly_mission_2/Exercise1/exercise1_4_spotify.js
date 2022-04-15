const spotifyUser = {
    userName: 'UlisesO',
    following: 23,
    topArtits: ['Taylor','Katty','Emminem', 'Sia'],
    topArtistObject: {
        name: 'TaylorSwift',
        Listeners: 5465226,
        Songs: 50,
        topMusic: ['TheJoker', 'Lover', 'Red']
    },
    getUserAndFollowing: function() {
        return `-${this.userName}- follow ${this.following} artist`
    },
    getTop: function(){
        return `The top from ulises is ${this.topArtits[0]} and she have has ${this.topArtistObject.Listeners}`
    }
}
console.log('Ejercicio 1 diagrama 4 spotify')
console.log(spotifyUser.getUserAndFollowing())
console.log(spotifyUser.getTop())
