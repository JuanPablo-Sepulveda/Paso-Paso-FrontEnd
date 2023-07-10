const nombre="juan"
const apellido="sepulveda"


console.log("hola! mi nombre es ", nombre ," y mi apellido sepulveda")//deuvlve--->"hola! mi nombre es juan y mi apellido sepulveda"

const nombree="pedro"
const apellidoo="castillo"

console.log(`hola! mi nombre es ${nombree} y mi apellido es ${apellidoo}`)//devuelve---> "hola! mi nombre es pedro y mi apellido es castillo"

//-----------------------------------------------------

const usuario="user"
const password="password"
const puerto="port"
const host="host"

const url= "sql@${usuario}:${password}@:${host}:${puerto}"

// es una forma de llamar a los datos, si bien al principio no es tan fundamental a la gora de trabajar con bases de datos los template strings son la mejor forma ya que solo definiendolos y invocandolos con ${} se ahorra problemas de compilaciones.