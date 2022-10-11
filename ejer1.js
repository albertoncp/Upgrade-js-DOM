
/* 1.1 Usa querySelector para mostrar por consola el botón con la clase .**showme** */

const element$$ = document.querySelector(".showme");
console.log(element$$);


/* 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado */
const element2$$  = document.querySelector("#pillado")
console.log(element2$$);


/* 1.3 Usa querySelector para mostrar por consola todos los p */

const myP$$ = document.querySelectorAll("p")
console.log(myP$$);

/* 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon */
const myPokemons$$ = document.querySelectorAll(".pokemon")
console.log(myPokemons$$);
/* 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe". */
const atributo$$ = document.querySelectorAll("[data-function='testMe']")
console.log(atributo$$);

/* 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe". */
console.log(atributo$$[2]);
