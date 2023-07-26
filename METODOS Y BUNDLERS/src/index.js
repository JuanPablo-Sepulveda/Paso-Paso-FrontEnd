// const modulo= (function(){
//     const dias=["domingos","lunes","martesd"]

//     return {
//         name: (index) =>{
//             return dias [index]
//         }
//     }
// })()

// console.log(modulo.name(1))

//  esta es la forma pasada de escribir modulow, anteriormente se formaba una especie de clousures donde la funcion se creaba y se invocaba sola al mismo tiempo . con el paso de los años evoluciono a lo que conocemos hoy como los modulos modernos donde podemos utilizar un archivo madre donde se van a crear las funciones pero no van a estar definidas si no que los datos y parametros van a estar asignados en otro modulos invocados para usarse en la raiz del archivo o el archivo main.

// A PARTIR DE ACA ESTE ARCHIVO VA ASER MODULO DEL ARCHIVO "BUNDLERS.js"
 




//   Esta herramienta podemos usarla para tener un espacio de trabajo mas limpio, imaginemos que tenemos que asignar,definir e invocar datos en un solo documento,inicialmente cuando aprendemos a programar no esta mal,Pero sin duda que este es un gran paso para trabajar de una manera mucho mas limpia, creando los valores en un documento,lasfunciones en otro etc.
console.log("inicia la ejecucion de mi programa")
 console.log("vamos a hacer una suma")


const {suma}=require("./bundlers") //--->aca importamos las funciones que va atener num1 y num2(suma)
const {num1, num2}=require("./variables") //--->aca importamos que valor van a tener num1 y num2(7 ,8)
//--->Este metodo esta mas orientado al back end*/


// import{suma} from "./bundlers";
// import{num1, num2} from "./variables";

const resultado = suma(num1 ,num2)
console.log(resultado)

//En este momento cee un archivo index.html para probar si estos datos podian pasarse a una paguina web y mostrar el resultado de la operacion en forma de alerta.

//Para mi sorpresa esto no fue posible ya que el navegador no puede leer "require" a no ser que se importe la script donde esten las funciones, los datos etc. Aca es donde entran las webspack