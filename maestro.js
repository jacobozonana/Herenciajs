class Maestro{
    constructor(nombre){
        this.nombre = nombre
        
    }
}
class Fisica extends Maestro{
    constructor(nombre, materia, antiguedad, calificacion){
        super (nombre)
        this.materia = materia
        this.antiguedad = antiguedad
        this.calificacion = calificacion
    
}
    promedio(promedio){
    let total=0;
    for(let i=0; i< this.calificacion.length; i++){
        total = total + this.calificacion[i]
        promedio = total / this.calificacion.length
    }
    return `El promedio de ${this.nombre} es : ${promedio}`
}
}
class Musica extends Maestro{
    constructor(nombre, materia, edad, calificacion){
        super (nombre)
        this.materia = materia
        this.edad = edad
        this.calificacion = calificacion
     }
      promedio(promedio){
    let total=0;
    for(let i=0; i< this.calificacion.length; i++){
        total = total + this.calificacion[i]
        promedio = total / this.calificacion.length
    }
    return `El promedio de ${this.nombre} es : ${promedio}`
}
}
let david = new Fisica(`David`, `Dessarrollo`, 5, [8,7,9,6])
console.log(david)
console.log(david.promedio())
let moy = new Musica(`Moy`, `Musica`, 25, [9,3,7,10,7])
console.log(moy)
console.log(moy.promedio())












