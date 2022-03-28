//Crear objeto en una sola linea
const crearPersona = (nombre, apellido) => ({nombre, apellido});

const persona = crearPersona('Eduardo', 'Gallegos');
console.log(persona);

//Llamar varios argumentos en funcion tradicional y funcion flecha
//Func Tradicional
function imArg() {
    console.log(arguments);
}

imArg(10, true, false, 'Fernando', 'Hola');

//Func Flecha
const imArgFlecha = (...args) => {
    return args;
}

//En la funcion flecha hicimos uso de un parametro rest, el cual nos permite representar un número indefinido de argumentos como un array

//Crear constantes  por cada posición del arreglo
const [casado, vivo, nombre, saludo] = imArgFlecha(10, true, false, 'Fernando', 'Hola');


//Imprimir propiedad de un objeto
const {apellido: variableApellido} = crearPersona('Eduardo', 'Gallegos');
console.log(variableApellido);





//Desestructuración de objetos
let tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark 1', 'Mark V', 'Hulkbuster'],
};

const imprimirPropiedades = ({nombre, codeName, vivo, edad, trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}