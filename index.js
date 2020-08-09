class Mascota{
    constructor(nombre="Fido", color="Cafe"){
        this.nombre = nombre
        this.color = color
    }
    comer(alimento){
        return `Soy ${this.nombre} y como ${alimento}`
    }
}
class Perro extends Mascota {
    constructor(nombre, color, patas, raza, peso, alimento){
        super(nombre, color)
        this.patas = patas
        this.raza = raza
        this.peso = peso
        this.alimento = `Corquetas`
    }
    
}
class Pez extends Mascota {
    constructor (nombre, color, tipoDeAgua, tipoDePez, cantidadDeAlimento){
    super(nombre, color)  
    this.tipoDeAgua = tipoDeAgua
    this.tipoDePez = tipoDePez
    this.cantidadDeAlimento = cantidadDeAlimento
    }
}
let bob = new Mascota ("Bob Esponja", "Amarillo")
let firulais = new Perro("Firulais", "verde",4, "Pug", "5Kg", "Croquetas")
let nemo = new Pez("Nemo", "Naranja","Agua Salada", "10gr", "Pez Payaso")
console.log(firulais.comer(firulais.alimento))
console.log(nemo)








