// Objeto Literal

const persona = {
    nombre: 'Paul',
    apellido: 'Ramon',
    edad: 24,
    direccion: {
        ciudad: 'Zamora',
        zip: 190155,
        lat: 13.3424243,
        lng: 12.4343434
    }
};

// console.table({persona}); Para ver el objeto en forma de tabla
// console.log(persona);

// const personaTwo = persona;
// personaTwo.nombre = 'David'; // Estamos modificando el objeto real, no se debe hacer estas mutaciones

const personaTwo = {...persona}

personaTwo.nombre = 'Jacinto';
console.log(persona);
console.log(personaTwo);