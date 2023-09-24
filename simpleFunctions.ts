function mul(a:number, b:number): number {
    return a*b
}

const f1 = (a:number, b:number): number => a * b

var lista : number [] = [1,2,3,4,5]
var pares = lista.filter ((numero: number): boolean => numero % 2 == 0);

console.log(pares)