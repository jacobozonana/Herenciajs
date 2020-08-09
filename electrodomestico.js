class Electrodomestico{
    constructor(color, consumoEnergetico=100, capacidad){
        this.color = color
        this.consumoEnergetico = consumoEnergetico
        this.capacidad = capacidad
    }
}
class Lavadora extends Electrodomestico{
    constructor(color, consumoEnergetico=100, capacidad, kgderopa){
        super (color, consumoEnergetico=100, capacidad)
        this.kgderopa = kgderopa
    }
    preciofinal(){
    var a = this.consumoEnergetico * this.kgderopa
    return `El precio final de esta Lavadora es de: ${a}`
}
}

let whirpool = new Lavadora(`Blanca`,100, 1000, 50)
console.log(whirpool.preciofinal())