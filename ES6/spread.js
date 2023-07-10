const arr1 =[1,2,3]

const arr2=[4,5,6] 


const nuevoArr=[ 1,2,3,...arr1]

arr1.push(5)

console.log(nuevoArr)//devuelve ---> [1,2,3,1,2](los elementos nuevos mas los del arr1)


const arrConcatenado =[...arr1,...arr2]

console.log(arrConcatenado)//devuelve---> [1,2,3,4,5,6]

//------------------------------------------------

//aplicado a objetos:

const persona ={
    nombre:"juan",
    edad:19
  }
  
  const personaConApellido ={
    ...persona,
    apellido: "sepulveda"
  }
  
  console.log(persona)//devuelve---> { nombre: 'juan', edad: 19, apellido: 'sepulveda' }