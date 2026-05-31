function consumirAPI(){

    var url = 'https://dragonball-api.com/api/characters?limit=58'

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos => poblarPersonajes(datos.items))
}

function poblarPersonajes(personajes){
    var divPadre = document.getElementById('divPadre')
    var combo = document.getElementById('comboRaza')

    for (const personaje of personajes) {

        var opcion = crearElementoTexto('option', personaje.race)
        opcion.value = personaje.race
        adicionarElementoAContenedor(opcion, combo)

        var divHijo = crearElemento('div')
        divHijo.classList.add('personaje')

        var img = crearElementoImagen(personaje.image, personaje.name)
        img.classList.add('personaje-img')

        var nombre = crearElementoTexto('p', personaje.name)
        nombre.classList.add('personaje-nombre')

        var raza = crearElementoTexto('p', 'Raza: ' + personaje.race)
        raza.classList.add('personaje-raza')

        var linkDetalles = crearElementoLink('html/personaje.html?id=' + personaje.id, 'Ver Detalles')
        linkDetalles.classList.add('btn-detalles')

        adicionarElementoAContenedor(img, divHijo)
        adicionarElementoAContenedor(nombre, divHijo)
        adicionarElementoAContenedor(raza, divHijo)
        adicionarElementoAContenedor(linkDetalles, divHijo)
        adicionarElementoAContenedor(divHijo, divPadre)
    }
}

function filtrarPersonajes(){
    var textoBuscador = document.getElementById('buscador').value.toLowerCase()
    var razaSeleccionada = document.getElementById('comboRaza').value
    var divPadre = document.getElementById('divPadre')
    var tarjetas = divPadre.getElementsByClassName('personaje')

    for (var i = 0; i < tarjetas.length; i++) {
        var tarjeta = tarjetas[i]
        var nombreTarjeta = tarjeta.getElementsByClassName('personaje-nombre')[0].innerHTML.toLowerCase()
        var razaTarjeta = tarjeta.getElementsByClassName('personaje-raza')[0].innerHTML

        var coincideNombre = nombreTarjeta.indexOf(textoBuscador) !== -1
        var coincideRaza = razaSeleccionada === '' || razaTarjeta === 'Raza: ' + razaSeleccionada

        if (coincideNombre && coincideRaza) {
            tarjeta.style.display = 'block'
        } else {
            tarjeta.style.display = 'none'
        }
    }
}
