class Bebida{
    constructor(nombre, ml){
        this.nombre = nombre
        this.ml = ml
        
    }
}
class Cerveza extends Bebida{
    constructor(nombre, ml, porcentajeAlcohol){
        super (nombre, ml)
        this.porcentajeAlcohol = porcentajeAlcohol
        
    }
    getPorcentajealcohol(){
            return `La Cerveza ${this.nombre} tiene:  ${this.porcentajeAlcohol}% de Alcohol`
        }
    setPorcentajealcohol(porcentajeAlcohol){
            this.porcentajeAlcohol = porcentajeAlcohol
}
}
class Refresco extends Bebida{
    constructor(nombre, ml, azucar){
        super (nombre, ml)
        this.azucar = azucar
    }
    getAzucar(){
            return `El Refresco ${this.nombre} tiene: ${this.azucar}% de azucar`
        }
    setAzucar(azucar){
            this.azucar = azucar
}
}

let corona = new Cerveza(`Corona`,800,10)
console.log(corona)
let coca = new Refresco(`Coca-Cola`, 1000,75)
console.log(coca)
console.log(corona.getPorcentajealcohol())
console.log(coca.getAzucar())
corona.setPorcentajealcohol(35)
console.log(corona.getPorcentajealcohol())
coca.setAzucar(60)
console.log(coca.getAzucar())
