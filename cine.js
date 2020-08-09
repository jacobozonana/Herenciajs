class Largometraje{
    constructor(titulo, duracion, categoria){
        this.titulo = titulo
        this.duracion = duracion
        this.categoria = categoria
    }
}
        getTitulo(){
            return this.titulo
        }        
        getDuracion(){
            return this.duracion
        }
        setTitulo(titulo){
            this.titulo = titulo
        }
        setDuracion(){
            this.duracion = duracion
        }
}
class Pelicula extends Largometraje{
    constructor(titulo, duracion, categoria, genero, clasificacion){
        super(titulo, duracion, categoria)
        this.genero = genero
        this.clasificacion = clasificacion
    }
}
class Documental extends Largometraje{
    constructor(titulo, duracion, categoria, pais, patrocinador){
    super(titulo, duracion, categoria)
    this.pais = pais
    this.patrocinador = patrocinador

    }
}
class Cine{
    constructor(nombre){
        this.nombre = nombre
        }
    reproducir(Largometraje){
        return `Estan viendo ${Largometraje.titulo}`
    }
}
let Juanita = new Pelicula(`La pelicula de Juanita`, `2 Horas`, `Infantil`, `Comedia`, `A`)
let Michael = new Pelicula(`Michael Jordan`, `3 Horas`, `General`, `USA`, `NBA`)
let cinemex = new Cine(`Cinemex`)
console.log(Juanita.duracion)
console.log(cinemex.reproducir(Michael))
console.log(cinemex.reproducir(Juanita))







