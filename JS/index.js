const sumar = (n1, n2) => {
    return parseInt(n1) + parseInt(n2)
}
const restar = (n1, n2) => {
    return parseInt(n1) - parseInt(n2)
}
const multiplicar = (n1, n2) => {
    return parseInt(n1) * parseInt(n2)
}
const dividir = (n1, n2) => {
    return parseInt(n1) / parseInt(n2)
}

alert('Que operacion deseas realizar?')
let operacion = parseInt(prompt('1: suma, 2: resta, 3: multiplicacion, 4:division'));

if(operacion === 1) {
    let numero1 = prompt('Ingresa el primer numero');
    let numero2 = prompt('Ingresa el segundo numero');
    let resultado = sumar(numero1, numero2)
    alert(`el resultado es = ${resultado}`)
}
if(operacion === 2) {
    let numero1 = prompt('Ingresa el primer numero');
    let numero2 = prompt('Ingresa el segundo numero');
    let resultado = restar(numero1, numero2)
    alert(`el resultado es = ${resultado}`)
}
if(operacion === 3) {
    let numero1 = prompt('Ingresa el primer numero');
    let numero2 = prompt('Ingresa el segundo numero');
    let resultado = multiplicar(numero1, numero2)
    alert(`el resultado es = ${resultado}`)
}
if(operacion === 4) {
    let numero1 = prompt('Ingresa el primer numero');
    let numero2 = prompt('Ingresa el segundo numero');
    let resultado = dividir(numero1, numero2)
    alert(`el resultado es = ${resultado}`)
}
else {
    alert(`El numero ingresado no es válido`)
}