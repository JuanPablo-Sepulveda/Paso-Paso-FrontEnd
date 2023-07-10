// con este comando podemos extraer informacin de objetos y array y guardarlos en variables para utilizarlos

const obj={
    nombre:"juan",
    apellido:"sepulveda",
    direccion:"miranda2136",
    cp:3412,
    mail:"@mail.com"
}

function cualquiera(obj){
    const {nombre,apelllido,mail}= obj
}
cualquiera(obj)


// function cualquiera(obj){
//     const {nombre,apelllido,mail}= obj
// }

// en esta funcion podemos como const definio 3 variables en una sola linea. esto inicalmente seria algo asi:

// function cualquiera(obj){
//     const nombre.obj.nombre
//     const apellido=obj.apellido
//     const mail=obj.mail
// }

//podemos ver como la sintaxis es mas limpia ya breviada

