//2.1 Inserta dinamicamente en un html un div vacio con javascript.
let divOne = document.createElement("div");
console.log(divOne);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let divTwo = document.createElement("div");
let p$$ = document.createElement("p");
divTwo.appendChild(p$$);
document.body.appendChild(divTwo);
console.log(divTwo);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let divThree = document.createElement("div");
for (let i = 0; i < 6; i++) {
  let pLoop = document.createElement("p");
  divThree.appendChild(pLoop);
}
document.body.appendChild(divThree);

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let p$ = document.createElement("p");
p$.textContent = "Soy dinámico!";
document.body.appendChild(p$);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let h2WithClass = document.querySelector(".fn-insert-here");
h2WithClass.textContent = "Wubba Lubba dub dub";
document.body.appendChild(h2WithClass);

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

let listUl = document.createElement("ul");

for (let i = 0; i < apps.length; i++) {
  let itemLi = document.createElement("li");
  itemLi.textContent = apps[i];
  listUl.appendChild(itemLi);
}

document.body.appendChild(listUl);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const removeElement = document.querySelectorAll(".fn-remove-me");

for (const removeMe of removeElement) {
  removeMe.remove();
}

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
//	Recuerda que no solo puedes insertar elementos con .appendChild.
let insertP = document.querySelectorAll("div")[1];
let newP = document.createElement("p");
newP.innerHTML = "Voy en medio!";
document.body.insertBefore(newP, insertP);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

let divs = document.document.querySelectorAll(".fn-insert-here");
for (const oneDiv of divs) {
  oneDiv.innerHTML = "<p>Voy Dentro!!</p>";
}
