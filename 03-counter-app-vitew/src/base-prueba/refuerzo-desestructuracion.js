// Desestructuración de Arreglos
// Asignación desestructurante de Arreglos
const x = [1,2,3,4,5];
const [y,z] = x;
console.log(y);
console.log(z);

// Asignación básica de variables
const foo = ['one','two','three'];
const [red,yellow,green] = foo;
console.log(red);
console.log(yellow);
console.log(green);
// console.log(blue);

// Asignación separada de la declaración
let a,b;
[a,b] = [1,2];
console.log(a);
console.log(b);

// Valores predeterminados
let c,d;

[c=5, d=7] = [1];
console.log(c);
console.log(d);

// Intercambio de variables
let e = 5;
let f = 10;

[e, f] = [f, e];
console.log(e,f);
console.log(f,e);

const arr = [1,2,3];
[arr[1], arr[2]] = [arr[2],arr[1]];
console.log(arr);

// Analizar un arreglo devuelto por una función
function fx() {
    return [1, 2];
}

let g, h;

[g, h] = fx();

console.log(g);
console.log(h);

// Ignorar algunos valores devueltos
function fy(){
    return [1,2,3];
}

const [i, ,k] = fy();
console.log(i);
console.log(k);

const[j]= fy();
console.log(j);

// Asignar el resto de un arreglo a una variable
const[l, ...m] = ['a', 2, 3];
console.log(l);
console.log(m);

// Desempacar valores coincidentes con una expresión regular

function parseProtocol(url){
    const parsedURL = /^(\w+):\/\/([^/]+)\/(.*)$/.exec(url);
    if(!parsedURL){
        return false;
    }
    console.log(parsedURL);

    // const [, protocol, fullhost, fullpaht] = parsedURL;
    const [, protocol] = parsedURL;

    return (protocol);
}

const url = 'https://developer.mozilla.org/es/Web/JavaScript';
console.log(parseProtocol(url));

// Desestructuración de objetos
// Asignación básica

const user = {
    id: 42,
    is_verified: true
};

const {id, is_verified} = user;

console.log(id, is_verified);

// Asignación sin declaración
let n, o;
({n, o} = {n: 1, o: 2});
console.log(n, o);

// Asignar a nuevos nombres de variable
const p = {q:42, r:true};
const {q: foot, r: bar} = p;
console.log(foot);
console.log(bar);
console.log(p);

// Valores predeterminados
const {s =10, t=5} = {s:3};

console.log(s);
console.log(t);

// Asignar nombres a nuevas variables y proporcionar valores predeterminados

const {u: uu =10, v: vv=15} = {u: 3};
console.log(uu, vv);

// Desempacar campos de objetos pasados como parámetro de función
const userTwo = {
    id: 42,
    displayName: 'jdode',
    fullName: {
        firstName: 'John',
        lastName: 'DOe'
    }
};

function userId({id}){
    return `My id es ${id}`;
}

function whois({fullName:{firstName: name, lastName: lname}}){
    return `My full name es ${name + ' ' +lname}`;
}

console.log(userId(userTwo));
console.log(whois(userTwo));

// Establecer el valor predeterminado de un parámetro de función

function drawChart({size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}){
    console.log(size, coords, radius);
}

drawChart({
    size: 'small',
    coords: {x: 18,y: 30}
});

// Desestructuración de arreglos y objetos anidados

const metadata = {
    title: 'Scratchpad',
    translations: [
        {
            locale: 'de',
            localization_tags: [],
            last_edit: '2020-08-29T08:43:37',
            url: '/de/docs/Tools/Scratchpad',
            title: 'JavaScript-Umgebung'
        }
    ],
    url: '/es/docs/Tools/Scratchpad'
};

let {
    title: englishTitle,
    translations: [
        {
            title: localeTitle,
        },
    ],
    url: urlE
} = metadata

console.log(englishTitle);
console.log(localeTitle);
console.log(urlE);

// Iteración "for...of" y desestructuración
const people = [
    {
        name: 'Mike Smith',
        family: {
          mother: 'Jane Smith',
          father: 'Harry Smith',
          sister: 'Samantha Smith'
        },
        age: 35
      },
      {
        name: 'Tom Jones',
        family: {
          mother: 'Norah Jones',
          father: 'Richard Jones',
          brother: 'Howard Jones'
        },
        age: 25
      }
];

for(const {name: n, family: {father: f}} of people){
    console.log(`Nombre: ${n}, Padre: ${f}`);
}

// Nombres de propiedades de objetos calculados y desestructuración

let key = 'z';
let {[key]: fooTwo} = {z: 'bar'};
console.log(fooTwo, key);

// Rest en la desestructuración de objetos

let {ab,cd, ...rest} = {ab: 10, cd: 20, ef: 30, gh: 30};
console.log(ab);
console.log(cd);
console.log(rest);

// Identificador de JavaScript no válido como nombre de propiedad
const fooThree = { 'fizz-buzz': true};
const { 'fizz-buzz':fizzBuzz} = fooThree;
console.log(fizzBuzz);

// Desestructuración combinada de arreglos y objetos

const props = [
    { 
        id: 1, 
        name: 'Fizz'
    },
    { 
        id: 2, 
        name: 'Buzz'
    },
    { 
        id: 3, 
        name: 'FizzBuzz'
    }
  ];

  const [,, {name}] = props;
  console.log(name);

// Se busca la cadena de prototipos al desestructurar el objeto.
let obj = {self: '123'};
obj.__proto__.prot = '456';
const {self, prot} = obj;
console.log(self,'\n',prot);
