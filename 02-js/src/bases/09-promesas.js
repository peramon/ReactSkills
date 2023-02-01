import { getHeroeById as heroeId} from './bases/08-imp-exp';

// Promesas

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout(() => {
//         // console.log('Hola');
//         // resolve();
//         const heroe = heroeId(2);
//         // console.log(heroe);
//         resolve(heroe);
//         // reject('No se pudo encotrar el heroe');
//     }, 2000);
// });

/* promesa.then( (heroe) => {
    console.log('Heroe', heroe);
})
.catch( err => console.warn(err)); */


const getHeroeById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('Hola');
            // resolve();
            const heroe = heroeId(id);
            // console.log(heroe);
            heroe ? resolve(heroe) : reject('No se encontro el heroe');
            //resolve(heroe);
            // reject('No se pudo encotrar el heroe');
        }, 2000);
    });
    // return promesa;
}

getHeroeById(1)
    .then(console.log)
    .catch(console.warn);
