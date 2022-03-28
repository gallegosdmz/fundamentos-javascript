//Un metodo es una funcion que se encuentra dentro de un objeto

const saludar = function (nombre) {
    console.log('Hola ' + nombre);
}

const saludarFlecha = (nombre) => {
    console.log('Hola ' + nombre) 
}

saludar('Eduardo');
saludar('Flecha');

const sumar = (a, b) => a + b;

console.log(sumar(2,2));

const getAleatorio = () => Math.random();

console.log(getAleatorio());