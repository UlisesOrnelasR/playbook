console.log('------------------Ejercicio 1 diagrama 6 tiktok-----------------')
const tiktokProfile = {

    userName: '@UlisesOrnelas',
    following: 125,
    followers: 25,
    likes: 757,
    messajeProfile: "Engineering student IG: ulises_ornelasr",
    videoUno: {
        unoLikes: 5090,
        comments: 8
    },
    videoDos: {
        dosLikes: 912,
        comments: 3
    },

    getUserInfo: function(){
        return `Info from user is ${this.userName} follow ${this.following} persons and have ${this.followers} followers`
    },
    InfoVideosOne: function() {
        return `The info from the first video... Have ${this.videoUno.unoLikes} likes and ${this.videoUno.comments} comments`
    }
}
console.log(tiktokProfile.getUserInfo())
console.log(tiktokProfile.InfoVideosOne())