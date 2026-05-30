function consumirAPIPersonaje(){

    var params = new URLSearchParams(window.location.search)
    var id = params.get('id')

    var url = 'https://dragonball-api.com/api/characters/' + id

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(personaje => mostrarDatosPersonaje(personaje))
}

function mostrarDatosPersonaje(personaje){

    var img = document.getElementById('personajeImg')
    img.src = personaje.image
    img.alt = personaje.name

    document.getElementById('nombre').innerHTML = personaje.name
    document.getElementById('raza').innerHTML = personaje.race
    document.getElementById('genero').innerHTML = personaje.gender
    document.getElementById('ki').innerHTML = personaje.ki
    document.getElementById('maxKi').innerHTML = personaje.maxKi
    document.getElementById('afiliacion').innerHTML = personaje.affiliation
    document.getElementById('descripcion').innerHTML = personaje.description

    var btnPlaneta = document.getElementById('btnPlaneta')
    btnPlaneta.href = 'planeta.html?id=' + personaje.originPlanet.id

    mostrarTransformaciones(personaje.transformations)
}

function mostrarTransformaciones(transformaciones){
    var divTransformaciones = document.getElementById('divTransformaciones')

    for (const trans of transformaciones) {

        var divTrans = crearElemento('div')
        divTrans.classList.add('personaje')

        var img = crearElementoImagen(trans.image, trans.name)
        img.classList.add('personaje-img')

        var nombre = crearElementoTexto('p', trans.name)
        nombre.classList.add('personaje-nombre')

        var ki = crearElementoTexto('p', 'Ki: ' + trans.ki)
        ki.classList.add('personaje-raza')

        adicionarElementoAContenedor(img, divTrans)
        adicionarElementoAContenedor(nombre, divTrans)
        adicionarElementoAContenedor(ki, divTrans)
        adicionarElementoAContenedor(divTrans, divTransformaciones)
    }
}