// Import, export y funciones comunes de arreglos
// import { heroes } from './data/heroes';
// import {heroes} from './data/heroes';

import  heroes  from "../data/heroes";


// USANDO Find -> Devuelve el primer elemento que cumpla la condicion dada
const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

// console.log(getHeroeById(3));

// USANDO Filter -> Devuelve todos los elementos que cumplan la condicion dada
const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroesByOwner('DC'));
// console.log(owners);

// Multiples exportaciones e importaciones por defecto

export {
    getHeroeById,
    getHeroesByOwner
}