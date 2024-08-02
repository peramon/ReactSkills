// Funciones

const saludar = function(nombre) { 
    return `Hola, ${nombre}`;
}

const saludarTwo = (nombre) => {
    return `Hola, ${nombre}`;
};

const saludarTree = (nombre) => `Hola, ${nombre}`;
const saludarFour = () => ` Hola Mundo `;

console.log(saludar('Goku'));
console.log(saludarTwo('Vegueta'));
console.log(saludarTree('Picoro'));
console.log(saludarFour());

const getUser = () =>  
    ({
        uid: 'ABC123',
        username: 'El_Papu123'
    }); // Usar los parentesis para no confudir el cuerpo de la funcion con las llaves del objeto


console.log(getUser())

// Tarea

console.group('TAREA USUARIO')
// Transformar a funcion de flecha
// Tiene que retornar un objeto implicito
// Pruebas

/*function getUsuarioActivo(nombre){
    return{
        uid: 'ABC567',
        username: nombre
    }
};*/

const getUsuarioActivoTwo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
});

const usuarioActivo = getUsuarioActivoTwo('Paul');
console.log(usuarioActivo);

console.groupEnd();