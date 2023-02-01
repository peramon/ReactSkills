// Operador ternario

const activo = true;

// const mensaje = (!activo) ? 'activo' : 'inactivo';

const mensaje = activo && 'Activo';
/* if(activo){
    mensaje = 'activo';
}else{
    mensaje = 'inactivo';
} */

// activo ? mensaje = 'activo' : mensaje = 'inactivo';
console.log(mensaje);