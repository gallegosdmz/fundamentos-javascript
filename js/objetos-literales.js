let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.7
    },
    trajes: ['Mark 1', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '1000, 232383',
        ubicacion: 'Malibu, California',
    }
};


console.log( personaje );

console.log('No. Trajes: ', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';

console.log('Vivo', personaje[x]);

//Eliminar propiead de objeto
delete personaje.edad;
console.log(personaje);

//Agregar nueva propiedad al objeto
personaje.casado = true;

//Convertir las propiedades en objetos
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

//Bloquear objeto para que no se puedan modificar, agregar o eliminar propiedades (No congela los objetos anidados al objeto original)
Object.freeze(personaje);

//Convierte las propiedades del objeto en un solo arreglo
const propiedades = Object.getOwnPropertyNames(personaje);

//Convierte los valores de las propiedades del objeto en un solo arreglo
const valores = Object.values(personaje);
console.log({propiedades, valores});