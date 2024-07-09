
//Modifica la función para que reciba el elemento clickeado de forma de no
//tener que seleccionarlo nuevamente dentro de la función:




//function pintar(){
 //   ele.style.backgroundColor = 'yellow'
   // }
    //const Ele = document.getElementById("ele1")
   // ele.addEventListener("click", pintar);






//respuesta:
const ele = document.getElementById("ele1")
ele.style.backgroundColor='green'

function pintar(ele, color ='green'){
    ele.style.backgroundColor = color;
    }
    
    ele.addEventListener("click", ()=>{
        pintar(ele, 'yellow')
    });
