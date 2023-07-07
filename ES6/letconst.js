//la variable declarada con var tiene el alcance de CONTEXTO DE EJECUCION, 
//las variables declaradas con let y con const tienen alcance de llaves, solo existen dentro de ellas

// es decir que la informacion de el let y el const solamente va aexistir dentro de las llaves, haciendo que el console.log no encuentre su informacion fuera de ellas a no ser que el console.log este dentro de las llaves, en ese caso si.
 {
var variableConVar ="variableConVar";
let variableConLet ="variableConLet";
const variableConConst="variableConConst";
}

console.log(variableConVar);
console.log(variableConLet);
console.log(variableConConst);

//-----------------------------------------------------------------------------------
// aca podemos ver como const al ser una variable const no puede modificar su informacion una vez ya fue declarada.
const miVariable="juan"
miVartiable = "lucas"//-->> error

//Pero no obstante si nosotros pusheamos a una variable const podemos conseguir el resultado que nos daria una variable let o var. por ejemplo:

const miNombre=[];

miNombre.push ("Juan Sepulveda");
console.log(miNombre);//--->[Juan Sepulveda]

// !!Este ejemplo es posible ya que en este momento donde pusheamos un string no modificamos la variable sino que modificamos el espacio de memoria al que apunta nuestra variable, es decir.Si nuestra variable CONST hipoteticamente apunta hacia el numero 1 y queremos pushear el numero 4. al pushear no estamos cambiando la informacion de la variable si no el objetibo de la variable, que en este caso seria 1.

//¨*************************************************************************************************´

//ejem,plo funciones :

function devuelvePares(arr){
    var pares =[]

    for(var i =0;i<arr.length;i++){
        var num= arr[i]
        if(num % 2 ===0)pares.push(arr[i])
    }
    return pares;
        
    }
devuelvePares([1,2,3,4,5,6,7,8,9])//---> devuelve[2,4,6,8]
