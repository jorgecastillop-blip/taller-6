function consumirAPIPlaneta(){

    var params = new URLSearchParams(window.location.search)
    var id = params.get('id')

    var url = 'https://dragonball-api.com/api/planets/' + id

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(planeta => mostrarDatosPlaneta(planeta))
}

function mostrarDatosPlaneta(planeta){

    var img = document.getElementById('planetaImg')
    img.src = planeta.image
    img.alt = planeta.name

    document.getElementById('nombrePlaneta').innerHTML = planeta.name
    document.getElementById('descripcionPlaneta').innerHTML = planeta.description
    document.getElementById('destruido').innerHTML = planeta.isDestroyed
}