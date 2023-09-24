function mul(a:number, b:number): number {
    return a*b
}
const f1 = (a:number, b:number): number => a * b

var lista : number [] = [1,2,3,4,5]
var pares = lista.filter ((numero: number): boolean => numero % 2 == 0);

interface ICoordenada {
    Longitud: number
    Latitud: number
    altura?: number
}

var coordenadas = [
    { Longitud: 40, Latitud: 20 }, { Longitud: 41, Latitud: 20, altura: 50 }, { Longitud: 42, Latitud: 20 }, { Longitud: 43, Latitud: 20 }
    ]

function printPunto(coordenada: ICoordenada): void{ 
    if (coordenada.altura == undefined)
        return console.log(`longitud ${coordenada.Longitud} latitud ${coordenada.Latitud}`)
    else
        return console.log(`longitud ${coordenada.Longitud} latitud ${coordenada.Latitud} altura ${coordenada.altura}`)
}

coordenadas.forEach((c:ICoordenada) : void => {printPunto(c)})

// console.log(pares)