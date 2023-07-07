// vamos a empezar con el dom
 
//DOM---> el dom es una representacion de un objeto dentro de una paguina html. el DOM es una representación estructurada del contenido de un documento HTML y proporciona una forma de interactuar con ese contenido utilizando JavaScript. Es una parte fundamental de la programación web y permite crear páginas web dinámicas e interactivas.

//El dom se utiliza mediante javascript dentro del documento HTML. si bien este no conoce acerca de html si conoce acerca de objetos por esto el dom lee el codigo HTML como una especie de arbol binario en el que sus nodos estan compuestos por las distintas propiedades del html

//Los 5 selectores mas importantes son los siguientes:
// *getElementByClassName
// *getElementbyld
// *querySelector
// *querySelectorAll
// *CreateElement

// METODOS---> 
//innerHTML
//el método innerHTML podemos acceder a la información que se encuentra entre las etiquetas de apertura y cierre de un elemento HTML, tanto para simplemente lectura o para su modificación. 

//Ejemplo:

// const p = document.querySelector('#pId');
// console.log(p.innerHtml) // Va a imprimir el texto dentro del párrafo con el id 'pID'
// p.innerHTML = 'Nuevo texto'; // Acá estamos modificando el texto del párrafo mencionado anteriormente
// console.log(p.innerHTML); // Va a imprimir el nuevo texto que le seteamos, es decir:"nuevo texto"
//-----------------------------------------------------------------------------------------------------------------------------------
//setAttribute 
//Podemos llamar al método .setAttribute para agregar un atributo a un elemento o sobreescribirlo en el caso de que ya se encuentre definido. Otra forma equivalente de realizarlo pero más corta sería llamando a .[nombre del atributo] = [nuevo valor]. 

// Ejemplo:

// const a = document.querySelector('#linkHenry'); // Obtengo el elemento a cuyo id es 'linkHenry'
// a.setAttribute('href', 'https://www.soyhenry.com/'); // Seteo el atributo href del elemento a para que redireccione a la página principal de Henry
// a.href = 'https://www.soyhenry.com/'; // Equivalente al anterior pero más corto
//-----------------------------------------------------------------------------------------------------------------------------------
//.style

//Podemos modificar el estilo de un elemento utilizando .style. Cabe mencionar que con esto no estamos accediendo al estilo CSS sino que lo que estamos haciendo es agregar la propiedad style dentro de la etiqueta HTML. 

// Ejemplo:

// const div = document.querySelector('#divId');
// div.style.height = '300px'; // Le damos una altura de 300 pixeles al div cuyo id es 'divId'
//     div.style.background = 'red'; // Le seteamos el color de fondo en rojo a dicho div
//-----------------------------------------------------------------------------------------------------------------------------------
//className y id
//Podemos utilizar .className y .id para acceder y modificar las clases o ids de los elementos. Esto es útil cuando ya tenemos definido en los estilos CSS un estilo en particular asociado a una clase o id y queremos simplemente modificando la clase o id del elemento cambiar su estilo sin tener que modificar propiedad por propiedad. 

// Ejemplo:

// const div = document.querySelector('#divId');
// console.log(div.id); // Utilizando ',id' accedemos al nombre de su id, en este caso 'divId'
// div.className = 'nuevaClase'; // Le seteamos la clase 'nuevaClase'
// div.id = 'nuevoId'; // Le seteamos el id 'nuevoId'
//
//appenChild

//Es posible agregar elementos directamente al DOM utilizando .appendChild sobre el elemento que queremos que sea su padre. 

// Ejemplo:

// const body = document.querySelector('body');
// const newDiv = document.createElement('div'); // Creamos un nuevo elemento div
//     body.appendChild(newDiv); // Agregamos el div recién creado dentro del body de la paǵina



//CSSOM---> el CSSOM es una API que proporciona acceso y manipulación programática de las reglas de estilo CSS de un documento HTML. Permite cambiar dinámicamente la apariencia visual de los elementos en una página web utilizando JavaScript. 