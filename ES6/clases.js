// function BinarySearchTree(value){
//     this.value=value,
//     this.left=null,
//     this.right=null
// }


// function Persona(nombre, apellido){
//     this.nombre=nombre;
//     this.apellido=apellido;
// }

class Persona{
    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;

    }
    getNombre(){
        return this.nombre;
    }
}
const persona1= new personalbar("juan","sepulveda")
console.log(persona1)//devuelve---> persona{nombre:"juan",apellido:"sepulveda"}

class Empleado extends Persona{
    constructor(nombre,apellido,cargo){
        super(nombre,apellido)
        this.cargo=cargo
    }
}

const empleado1=new Empleado("adrian","castillo","jefe")

//con el codigo "class Empleado extends Persona" lo que hacemos es crear un nuevo empleado utilizando un constructor heredado para la persona sin necesidad de crear uno nuevo, en este caso "super(nombre,apellido" llama al constructor de persona crea la persona o el empleado y sañade el cargo
