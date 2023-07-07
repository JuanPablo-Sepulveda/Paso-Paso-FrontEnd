function cambiarClase(event){
    var divClickeado=event.target
    
    if(divClickeado.className ==="clase1") divClickeado.className = "clase2"
    else divClickeado.className="clase1"


}

function onClick(){
    //paso1-->creamos un parrafo
    var p=document.createElement("p")

    //paso2-->le damos texto al parrafo
    p.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam amet quisquam, voluptatem nostrum, sunt perspiciatis nihil eos veritatis, accusantium in ex ducimus modi officia quo sequi animi quasi repellat corrupti?"

    //paso3-->creamos el div que debe contener el parrafo
    var div=document.createElement("div");
    div.className="clase1"
    div.addEventListener("click",cambiarClase)

    //paso4-->agregamos el parrafo al div
    div.appendChild(p)

    //paso5-->nos traemos el contenedor que estaba en el body
    var contenedor = document.querySelector("#contenedor")

    //paso6-->agregamos el div del parrafo al contenedor
    contenedor.appendChild(div)
   
}

var boton = document.querySelector("#boton");
boton.addEventListener("click",onClick)
