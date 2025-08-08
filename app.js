// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Función que permite al usuario agregar nombres
function agregarAmigo() {
    let ingresaUnNombre = document.getElementById('amigo');
    const nombreAmigo = ingresaUnNombre.value;

    //Validación para que el campo no este vacío
    if (nombreAmigo === "") {
        alert("Por favor, ingrese un nombre");
    } else {
        amigos.push(nombreAmigo);
        ingresaUnNombre.value = "";
        mostrarLista();

    }
}

//Función para mostrar la lista
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`
    }
}

//Función para sortear amigos
function sortearAmigo() {
    //Validación de que haya amigos para sortear
    if (amigos.length === 0) {
        alert("No hay amigos para el sorteo");
        return;
    }
    //Generar el sorteo aleatorio
    let nombreAleatorio = Math.floor(Math.random() * amigos.length);
    //Nombre sorteado
    let amigoSorteado = amigos[nombreAleatorio];
    //Mostrar el nombre sorteado
    document.getElementById("resultado").innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></li>`;
}