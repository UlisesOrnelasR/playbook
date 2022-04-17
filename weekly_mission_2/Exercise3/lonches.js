/*
Creando una clase de una loncheria
*/

class pedido {
    constructor(queVaAQuerer, salsas, tamaño, conQueso,){
        this.queVaAQuerer = queVaAQuerer,
        this.salsas = salsas,
        this.tamaño = tamaño,
        this.conQueso = conQueso
    }
}

const gringaErika = new pedido('gringa','verde','grande','si')
const loncheUlises = new pedido('lonche','roja','normal','no')


console.log('*********Practicando***********')
console.log(gringaErika)
console.log(loncheUlises)




