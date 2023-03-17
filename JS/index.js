class Calculadora {

    constructor () {}
    sumar = (n1, n2) => {
        return parseInt(n1) + parseInt(n2)
    }
    restar = (n1, n2) => {
        return parseInt(n1) - parseInt(n2)
    }
    multiplicar = (n1, n2) => {
        return parseInt(n1) * parseInt(n2)
    }
    dividir = (n1, n2) => {
        return parseInt(n1) / parseInt(n2)
    }

    potenciar = (n1, exp) => {
        return parseInt(n1) ** parseInt(exp)
    }
    raizCuadrada = n1 => Math.sqrt(n1)

    raizCubica = n1 => Math.cbrt(n1)

}

const calculadora = new Calculadora()

alert('Que operacion deseas realizar?')
let operacion = parseInt(prompt('1: suma, 2: resta, 3: multiplicacion, 4: division, 5: potenciacion, 6: raiz cuadrada, 7: raiz cubica'));

if (operacion === 1) {
    let numero1 = prompt('Ingresa el primer numero');
    let numero2 = prompt('Ingresa el segundo numero');
    let resultado = calculadora.sumar(numero1, numero2)
    alert(`el resultado es = ${resultado}`)
}
if (operacion === 2) {
    let numero1 = prompt('Ingresa el primer numero');
    let numero2 = prompt('Ingresa el segundo numero');
    let resultado = calculadora.restar(numero1, numero2)
    alert(`el resultado es = ${resultado}`)
}
if (operacion === 3) {
    let numero1 = prompt('Ingresa el primer numero');
    let numero2 = prompt('Ingresa el segundo numero');
    let resultado = calculadora.multiplicar(numero1, numero2)
    alert(`el resultado es = ${resultado}`)
}
if (operacion === 4) {
    let numero1 = prompt('Ingresa el primer numero');
    let numero2 = prompt('Ingresa el segundo numero');
    let resultado = calculadora.dividir(numero1, numero2)
    alert(`el resultado es = ${resultado}`)
}
if (operacion === 5) {
    let numero1 = prompt('Ingresa la base');
    let numero2 = prompt('Ingresa el exponente');
    let resultado = calculadora.potenciar(numero1, numero2)
    alert(`el resultado es = ${resultado}`)
}
if (operacion === 6) {
    let numero1 = prompt('Raiz cuadrada de:');
    let resultado = calculadora.raizCuadrada(numero1)
    alert(`el resultado es = ${resultado}`)
}
if (operacion === 7) {
    let numero1 = prompt('Raiz cubica de:');
    let resultado = calculadora.raizCubica(numero1)
    alert(`el resultado es = ${resultado}`)
} else {
    alert(`El numero ingresado no es válido`)
}