
console.log("holaaaaaaaaaa");

console.log(document.getElementById("titulo"))
console.log(document.getElementById("titulo").innerHTML)

console.log(document.getElementById("titulo").innerText)

document.getElementById("titulo").innerText = "Quesito";
console.log(document.getElementById("titulo").innerText)

document.getElementById("titulo").innerHTML =
    "<span>Hamburguesa</span > ";
console.log(document.getElementById("titulo").innerText);

//EJERCICIOOOOOOOOO 2

document.getElementById("parrafo").style.color = "yellow";
document.getElementById("parrafo").style.backgroundColor = "green";
document.getElementById("parrafo").style.fontSize = "35px";

console.log(document.getElementById("parrafo"));

//Ejercico

const boton = document.getElementById("boton");
boton.addEventListener("click", (evento) => {
    // LOGICA DE LO QUE QUIERO QUE OCURRA CUANDO SE HAGA CLICK EN EL BOTON
    alert("HOLA!!");

    //CAMBIA EL TEXTO DE UN P CON INNERTEXT.
    document.querySelector("#cambioParrafo").innerText = "Cambio de texto".toUpperCase();

    //CAMBIA EL COLOR
    document.body.style.backgroundColor = "#34ADA0";
})

//OTRO EJERCICIOOOO

const botonExtra = document.getElementById("boton2");

let pintado = false;

botonExtra.addEventListener("click", (evento) => {

    if (pintado == false) {
        document.getElementById("textoExtra").innerText = "Hola, soy el texto extra y estoy cambiando";
        document.body.style.backgroundColor = "#F0A500";

        pintado = true;
    }
    else {
        document.getElementById("textoExtra").innerText = "Hola, soy el extra!!";
        document.body.style.backgroundColor = "";

        pintado = false;
    }

})

//ejercicio llamada a la accion diferente 4

const boton3 = document.getElementById("cambioImagen");

function cambioImagen() {
    alert("Hola, soy el Osito y sere cambiado");

    document.querySelector("#imagen").src = "https://i.pinimg.com/564x/31/5e/09/315e09d46f6c3784ed889938fc7b2d8e.jpg";
}
boton3.addEventListener("click", cambioImagen);



//EJERCICIOO 5 Cambio de color y al salir vuelve al horiginal 

let boton4 = document.getElementById("mouse");

boton4.addEventListener("mouseover", () => {
    boton4.style.backgroundColor = "pink";
    boton4.style.transition = "all 0.5s linear";
})
boton4.addEventListener("mouseout", () => {
    boton4.style.backgroundColor = "";
})


//EJERCICIO 6 RECORRER LISTA DE P

const listaP = document.querySelectorAll(".frases");

for (let i = 0; i < listaP.length; i++) {
    const p = listaP[i]; //Parrafo actual

    p.addEventListener("click", () => {
        p.innerText += p.innerHTML.toUpperCase();
    })
}

/*7. Prevención de comportamiento por defecto = **Objetivo:** `event.preventDefault`.

* Crea un enlace `<a href="https://google.com">Ir a Google</a>`.
* Añade un listener que, al clickar, haga `preventDefault()` y muestre un mensaje “¡No puedes salir!”.*/

const enlace = document.querySelector(".section");
const itemEnlace = document.getElementById("enlace");

itemEnlace.addEventListener("click", (evento) => {
    evento.preventDefault();
    alert("¡No puedes salir!");
});

/*8. Ejercicio FINAL” = **Objetivo:** Combinar varias cosas.

* Pon un `article` con un `h2`, un `p` y una `img`.
* Haz que:

  * Al clickar en el `h2`, cambie su texto a “Hechizo lanzado”.
  * Al clickar en el `p`, cambie color y fondo.
  * Al clickar en la `img`, cambie por otra.*/

let textH2 = document.querySelector("article > h2");
let textP = document.querySelector("article > p");
let imagenI = document.querySelector("article > img");

textH2.addEventListener("click", () => {
    textH2.innerText = "Hechizo lanzado";
})

textP.addEventListener("click", () => {
    textP.style.backgroundColor = "red";
    textP.style.color = "white";
})

imagenI.addEventListener("click", () => {
    imagenI.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgIlQ_XiOFgPnhpeU3GRGMw13bUai6-JNdRaOCB5pwJ6rDC1r6AXp_hG50&s=10"
})


/* BONUS **Objetivo:** Coger el valor del input y ponerlo en pantalla
* Pon un `input` con un `botón` con la palabra "agregar".
* Haz que:
  * Al clickar en el `botón`, coja el valor del input y lo agregue en una lista.*/

let boton5 = document.getElementById("buttonList");
let input = document.getElementById("input");
let lista = document.getElementById("listado");


boton5.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = input.value;
    lista.appendChild(li);
})


//EJERCICIO 1 Añadir dos elementos `<li>` a un `<ul>` (Desde JS), y unirlos al DOM de tu página HTML

// 1. Busco dónde lo voy a meter (ya existe en el HTML)
let div2 = document.getElementById("div2")

const ul = document.createElement("ul");// 2. Creo el ul y los dos li

//CREAMOS PRIMER LI
const li1 = document.createElement("li");
const text1 = document.createTextNode("hola, soy nuevo");//CREAMOS TEXTO DE NODO
li1.appendChild(text1)//METEMOS EL TEXTO EN EL LI

//BASADO EN LO QUE PIDE EL EJERCICIO, CREAR ALGUN ATRIBUTO
const class1 = document.createAttribute("class"); //creamos el atributo class
class1.value = "item"; //Nombre de la clase
li1.setAttributeNode(class1)//AGREGAMOS EL ATRIBUTO

//CREAMOS SEUNDO LI
const li2 = document.createElement("li");
const text2 = document.createTextNode("hola, soy EL SEGUNDO LI");//CREAMOS TEXTO DE NODO
li2.appendChild(text2)//METEMOS EL TEXTO EN EL LI

//BASADO EN LO QUE PIDE EL EJERCICIO, CREAR ALGUN ATRIBUTO
const class2 = document.createAttribute("class"); //creamos el atributo class
class2.value = "item"; //Nombre de la clase
li2.setAttributeNode(class2)//AGREGAMOS EL ATRIBUTO

//METEMOS LOS LI EN EL UL Y EL UL EN EL DOM
ul.appendChild(li1)
ul.appendChild(li2)
div2.appendChild(ul)
