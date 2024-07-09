
const contenedor = document.querySelector('#contenedor')

      //  nuevoElemnto.style.width= '200px'
       // nuevoElemnto.style.height= '200px'
        //nuevoElemento.style.border= '2px'
       // nuevoElemento.style.borderColor= 'black'

document.addEventListener('keypress', (event)=>{

        

if(event.key=='q'){
        let nuevoElemento = document.createElement('div')
        
        contenedor.appendChild(nuevoElemento)
        nuevoElemento.style.width='200px'
        nuevoElemento.style.height='200px'
        nuevoElemento.style.border='2px solid black'
        nuevoElemento.style.backgroundColor='purple'
        

    }

    else if(event.key=='w'){
        let nuevoElemento = document.createElement('div')
        
        contenedor.appendChild(nuevoElemento)
        nuevoElemento.style.width='200px'
        nuevoElemento.style.height='200px'
        nuevoElemento.style.border='2px solid black'
        nuevoElemento.style.backgroundColor='gray'

    }

    else if(event.key=='e'){
        let nuevoElemento = document.createElement('div')
        
        contenedor.appendChild(nuevoElemento)
        nuevoElemento.style.width='200px'
        nuevoElemento.style.height='200px'
        nuevoElemento.style.border='2px solid black'
        nuevoElemento.style.backgroundColor='brown'

    }

    else{

    }

})