const container = document.querySelector('#key')
container.style.width= '200px'
container.style.height= '200px'
container.style.border= '2px solid black'
container.style.backgroundColor= 'white'

var a = document.styleSheets.backgroundColor = 'pink'
var s = document.styleSheets.backgroundColor = 'onrange' 
var d = document.styleSheets.backgroundColor = 'lightblue'
document.addEventListener('keypress', (event)=>{
    if(event.key=='a'){
        container.style.backgroundColor = 'pink'

    }

    else if(event.key=='s'){
        container.style.backgroundColor = 'orange'

    }

    else if(event.key=='d'){
        container.style.backgroundColor = 'lightblue'
    }

    else{

    };
}
)







/*
const contenedor = document.querySelector('#contenedor')
contenedor.style.width= '200px'
contenedor.style.height= '200px'
contenedor.style.border= '2px, black'


if(event.key=='q'){
        let nuevoElemento = document.createElement('div')
        nuevoElemento.innerText = 'nuevo elemento'
        contenedor.appendChild(nuevoElemento)

    }

    else if(event.key=='w'){

    }

    else if(event.key=='e'){
        var elementos = document.querySelectorAll('div')
        contenedor.removeChild(elementos[elementos.length -1])

    }

    else{

    };
}
)
  */