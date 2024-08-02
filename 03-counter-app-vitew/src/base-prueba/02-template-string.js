// // Template Strings
// const nombre = 'Paul';
// const apellido = 'Ramon';

// // const nombreCompleto = nombre + ' ' + apellido;
// const nombreCompleto = `Mi nombre completo es ${nombre} 
// ${apellido}
// ${1+1}`;

// console.log(nombreCompleto);

export let saludo = (nombre) => {
    return `Hola ${nombre}`;
};

console.log(`Este es un texto: ${saludo('Paul')}`);