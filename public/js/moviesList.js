window.addEventListener('load',()=>{

    let body = document.querySelector('body')
    let h1 = document.querySelector('h1')


    let respuesta = window.confirm('¿desea modo oscuro?')
    if(respuesta){
        body.style.color = '#7F7F7F'
        body.classList.add('fondoMoviesList')
    }


    h1.innerText = "LISTADO DE PELICULAS"
    h1.style.color= 'white'
    h1.style.background= 'teal'
    h1.style.padding= '20px'
})