class Construccion{
    constructor(direccion, altura, anchodelterreno, numPuertas, numVentanas){
        this.direccion = direccion
        this.altura = altura
        this.anchodelterreno = anchodelterreno
        this.numPuertas = numPuertas
        this.numVentanas = numVentanas
        
    }
//     setDireccion(dir){
//             this.direccion = dir
// }

}
class Casa extends Construccion{
    constructor(direccion, altura, anchodelterreno, numPuertas, numVentanas, largo){
        super (direccion, altura, anchodelterreno, numPuertas, numVentanas)
        this.largo = largo
    }
    

}
class Edificio extends Construccion{
    constructor(direccion, altura, anchodelterreno, numPuertas, numVentanas, numPisos){
        super (direccion, altura, anchodelterreno, numPuertas, numVentanas)
        this.numPisos = numPisos
        
     }
      
}
let piramides = new Casa(`Piramides 16`, 5,25,6,9,10)
console.log(piramides)
