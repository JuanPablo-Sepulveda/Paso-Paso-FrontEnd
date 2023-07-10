function suma (a,b){
    const resultado = a+b
    return resultado
}
console.log(sumar(5,5))//devuelve---> 10

const sumar = (a,b)=>{
    const resultado = a+b
    return resultado
}
console-log(sumar(2,2))//devuelve---> 4

// A la hora de buscar resultados, estas dos funciones no van a tener problemas al ser llamadas ya que se invocan de la misma manera. Las arrow functions son diferenciadas principalmente por su sintaxis pero eso no evita que tenga otras funciones.

const sumo =(a,b)=>{
    return a+b ;
}
// esto puede retornarse en una sola linea con las arrow functions. Seria--->

const sumoo=(a,b)=>a + b
console.log(sumoo(5,5))//devuelve---> 10

//----------------------------------------------------------------------------------------
//ARROW FUNCTIONS (CUERPOS DE EXPRESIONES)

// Aca tenemos la tipica expresion donde hipoteticamente nos piden que saquemos los numeros pares.Estas expresiones pueden ser mas consisas aplicando a su sintaxis las arrow functions


const arr=[1,2,3,4,5,6,7,8,9]

//1
const pares = arr.filter(function(num){
    return num % 2 === 0
})
// esto podria pasarse como:

//2
const paress=arr.filter((num)=> num %2===0)

pares//devuelve--->[2,4,6,8]

// aca podemos notar como las arrow functions hacen una sintaxis mucho mas consisa. si bien ambos ejemplos sirven y deevuelven lo mismo, las arrow functions son utiles para una vez dominadas poder hacer un codigo mas limpio y mucho mas consiso.

//------------------------------------------------------------------------------------------------

//ARROW FUNCTIONS(THIS).
//capas la parte mas importante de las arrows es el this

const bob ={
    nombre:"bob",
    amigos:["emanuel","ariel","diego"],

    printFriends(){
        this.amigos.forEach(function(friend){
            console.log(this.nombre,"conoce a",friend)
        })

    }
}

bob.printFriends()//deuvlve--->//devuelve--->undefined 'conoce a' 'emanuel' undefined 'conoce a' 'ariel' undefined 'conoce a' 'diego'

// si observamos aca podemos ver como el this.nombre no toma el nombre de bob ya que la function friend esta ejecutandose en el "aire", es decir no se identifica como si bob la estuviese ejecutando por que esta dentro de printFriends. aca es donde entran las Arrow function

// Habiamos visto anterior mente como las arrow functions nos ayudaban dentro de la sintaxis a evitar variables como var, otra particularidad de las arrow functions es la capacidad de autoBINDEARSE ,es decir,darse cuenta que esta dentro de un prototipo invocado por BOB entonces se autoBINDEA obteniendo por si sola el this.nombre que en este caso es BOB
//ejemplo con nombre juan:

const juan={
    nombre:"juan",
    amigos:["marcos","luca","santi"],

    printFriends(){
        this.amigos.forEach((friend)=>{
            console.log(this.nombre, " conoce a",friend)
        })
    }
}

juan.printFriends()//devuelve--->'juan' ' conoce a' 'luca','juan' ' conoce a' 'marcos','juan' ' conoce a' 'santi'

//aca vemos como la arrow bindeo el this,nombre auto definiendose por el nombre "JUAN"