// Desestructuración de Arreglos

const personajes = ['Goku', 'Vegeta','Trunks'];
 
// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const [, per2] = personajes;
console.log( per2);

const retornaArreglo = () => {
    return ['ABC', 123]
}

const [letras,numeros] = retornaArreglo();
console.log(letras, numeros);

const useState = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}];
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const [nombre, setNombre] = useState('Goku');
// console.log(arr);


console.log(nombre);
setNombre();