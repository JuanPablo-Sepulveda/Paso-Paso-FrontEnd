const nombre="juan"
const apellido="sepulveda"
const edad=19

const objetoPersna={
    nombre:nombre,
    apellido:apellido,
    edad:edad
}

console.log(objetoPersona)//deuvleve---> nombre:juan, apellido:sepulveda, edad:19

//aca vemos como nombre, apellido y edad ya estan definidos y a la hora de crear un objeto los llamamos como "nombre:nombre","apellido:apellido" y "edad:edad" pero esto solo es una forma mas de llamarlos, los objetos literales nos enseñan mediante sintaxis y nos hacen entender que simplemente invocando las propiedades podemos obtenr el mismo resultado por ejemplo:
const nombree="juan"
const apellidoo="sepulveda"
const edadd=19

const objetoPersona={
    nombree,
    apellidoo,
    edadd
}

console.log(objetoPersona)//deuvlve---> nombre:juan, apellido:sepulveda y edad:19

//unicamente cambiando las sintaxis podemos obtener una abreviacion a el llamado de las propiedades ya que a la hora de crear un objeto al estar deinido con const son inalterables por lo tanto con una simple invocacion podemos obtener un resultado igual con una sintaxis mas limpia



// Es verdad que el tema de objetos literales no es tan importante por qe desde que aprendemos a programar con javascript ya lo tenemos presente a la hora de expresar el codigo por mas que no nos demos cuenta. Ya que en la actualidad se empieza a enseñar ya con los avances de ecmascript , pero no esta demas comentarlo para parender un codigo limpio y mas puro.