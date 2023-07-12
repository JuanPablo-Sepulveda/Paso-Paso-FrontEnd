
//hacemos una peticion de tipo GET a /user
//recibo info de usuarios dentro de un array
//quiero mostrar esta info armando una lista de nombres de losusuarios

// $.get("https://jsonplaceholder.typicode.com/users",(response)=>{
//     console.log(response)
// })

// console.log("holis")
// De esta forma se veria sin aplicar la sintaxis abreviada de ecamscript 6

//mejor forma de escribirlo ya que nos permitiria en caso de tener mas datos invocar los datos cambiando simplemento el /user por ejemplo a /direcciones

const URL_BASE="https://jsonplaceholder.typicode.com"

const createListItems=(user) => {
        //acca hacemos un recorrido donde para cada usuario se va a crear un elemento html
        const li =document.createElement("li")
        li.innerHTML=`${user.name}-${user.email}`
        // const listaUsuarios=$("#listaUsuarios")[0]
        // listaUsuarios.append(li)
        const listaUsuarios=document.querySelector("#listaUsuarios")
        listaUsuarios.appendChild(li)



        
    }

const showUsers=(users)=>{
    users.forEach(createListItems);
}


$.get(`${URL_BASE}/users`,showUsers);

//ajax es la mejor manera que tenemos para poder administar datos desde servidores no locales con los cuales podamos trabajar por ejemplo aca, use una api fake para crear una lista con datos que no estan en el dispositivo local si no que estan en un servidor desconocido el cual me proporciona los datos para crear una lista. en base a eso aprendo a como llamar a la api para que mi archivo html lo tenga presente mediante la invocacion que genera el script de la misma, tambien aprendo a modificarla dentro de mi archivo javascript y por ultimo como mostrarla representadola con archivos html tales como una lista etc.



   