// Desestructuración de Objetos
// Asignación desestructurante

const persona = {
    nombre: 'paul',
    edad: 24,
    clave: 'Hulk'
};

// const {nombre, edad, clave} = persona;

// console.log(nombre)
// console.log(edad)
// console.log(clave)
// console.log(persona.edad)
// console.log(persona.clave)

const retornarPersona = ({clave, nombre, edad, rango = 'CAPITAN'}) => { // Estamos dando valor a una nueva llave, si el objeto lo tiene usa el original
    // const {nombre, edad, clave} = usuario;
    // console.log(nombre,edad,rango)

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 21.212122,
            lng: 13.2121221
        }
    }
}

const {nombreClave, anios, latlng:{lat,lng}} = retornarPersona(persona);
console.log(nombreClave, anios);
console.log( lat, lng);