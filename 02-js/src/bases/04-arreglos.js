// Arreglos

// const arr = new Array(); // Solo usarlo para crear con tamaño definido

const arr = [1,2,3,4,5];
// arr.push(1);
// arr.push(2);

let arrTwo = [...arr, 6]; // ... -> operador spreed extrae informacion de dentro del arr/obj
// arrTwo.push(7);

const arrTree = arrTwo.map((x) => x*2); // Esto es una funcion dentro de un metodo por cada elemento del array es decir es un Callback

console.log(arr);
console.log(arrTwo);
console.log(arrTree);