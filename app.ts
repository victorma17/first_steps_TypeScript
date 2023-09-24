

interface IPersona {
    numero:number
}

interface IPersona2 extends IPersona {
    nombre:string
}

interface IPersona3 {
    resp:boolean
    numeroYnombres : (number | string) []
}

var var1:IPersona2 = {
    numero : 7,
    nombre:"Juan"
}

var arr : (IPersona | IPersona3)[] = [
    {
        numero:8
    },
    {
        resp:true,
        numeroYnombres : [1,2,"hola",3]
    }
]

console.log(arr)

