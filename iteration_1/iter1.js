//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
let btn = document.body.querySelector('.showme');
console.log(btn);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

let pillado = document.body.querySelector('#pillado');
console.log(pillado);

//1.3 Usa querySelector para mostrar por consola todos los p
let p$$ = document.body.querySelectorAll('p');
console.log(p$$);

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
let pokemonElements = document.body.querySelectorAll('.pokemon');
console.log(pokemonElements)

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo     data-function="testMe".
let testMeElements = document.body.querySelectorAll('[data-function="testMe"]');
console.log(testMeElements);

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo     data-function="testMe"

document.body.querySelectorAll('[data-function="testMe]');
console.log(testMeElements[2]);