window.addEventListener('load',()=>{

let main = document.querySelector('main')
let h2 = document.querySelector('.subtitulo')
let a = document.querySelector('a')
let parrafos = document.querySelectorAll('p')
let body = document.querySelector('body')

let promp = prompt('ingrese su nombre', 'invitado')

if(promp){
h2.innerText = promp
}else{
    h2.innerText = 'invitado'
}

h2.style.textTransform = 'uppercase'
a.style.color = '#E51B3E'

let fondo = window.confirm('¿desea colocar un fondo de pantalla?')


if(fondo){
body.classList.add('fondo')
}

for (let i = 0; i < parrafos.length; i++) {
    if(i%2 == 0){
        parrafos[i].classList.add('destacadoPar')
    }else{
        parrafos[i].classList.add('destacadoImpar')
    }
    
}
main.style.display ='block'

})