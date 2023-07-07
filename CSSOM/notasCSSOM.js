//empezamos con el uso medio intenso de css en el apartado de CSSOM. El Modelo de objetos CSS (CSS Object Model) es un conjunto de APIs que permite manipular CSS desde JavaScript. Así como el DOM (Document Object Model) es para HTML, el CSSOM (CSS Object Model) es para CSS. Permite leer y modificar el estilo de CSS de forma dinámica.

//empezamos con el tema layout donde vimos la diferencia entre flex y grid en donde comparamos funciones de los distintos atributos y llegamos a la comclusion que ninguno es mas que el otro sino que ambos sirven para algo en especiico.

// ! podemos ver en el atchivo layout.html una especie de experimento en donde compare las distintas funciones de cada uno modificando tamaño,espacio y orden de las cajas.

// ! Ahora empezamos con CSS media queries Las "CSS media queries" (consultas de medios en CSS) son una característica de las hojas de estilo en cascada (CSS) que permiten aplicar estilos específicos a un documento HTML según las características del dispositivo o el medio en el que se esté mostrando el contenido. Esto permite que un sitio web o una aplicación se adapte y responda de manera óptima a diferentes tamaños de pantalla y dispositivos, como computadoras de escritorio, tabletas, teléfonos móviles, impresoras, etc.

//Las CSS media queries utilizan ciertas características del dispositivo, como el ancho y alto de la pantalla, la resolución, la orientación, la relación de aspecto y otras propiedades del medio para decidir qué estilos aplicar.

// ! Mediante el comando : @media screen and (){}podemos modificar el body para los distintos tamaños y que dependiendo de los mismos los items reacciones y se posiciones de cierta manera. por ejemplo: en el archivo layout.html podemos obsvervar como en el apartado de <styles> utilizamos el comando @media screen and (){} para que el body en menos de 600 px reaccione de distinta manera, en este caso si tiene menos de 600px el background color de el body va a ser alterado al igual que ladiferencia principal en el flex que seria flex-direcion y align-items.


// !! Comenzamos con el apartado de FRAMEWORK: es un marco de trabajo que nos provee distintas herramientas que facilitan el desarrollo de aplicaciones , ofreciendonos una forma estandar y, por lo quegenral, mas simple para programar . en resumen  un framework es un conjunto de herramientas, componentes y bibliotecas predefinidas que proporcionan una estructura y funcionalidades comunes para facilitar la creación de aplicaciones o sitios web. Un framework establece una base sobre la cual los desarrolladores pueden construir y organizar su código de manera más eficiente y coherente.

/dentro de la CSSOM podemos encontrar los framework css que son conjuntos de estilos predefinidos que pueden utilizarse para elaborar una interfaz de usuario atractiva. por ejemplo :                                                             Bootstrap:                                                                                                                  ventajas-> sus plantillas son de facil adaptacion y es responsive                                                      Desventajas--> no es ligero, y para algunas funcionalidades debemos utilizar javascript y jAuery/

//Foundation                                                                                                                Ventajas--> Tiene gran flexibilidad a la hora del diseño UI y tiene una gran cantidad de herramientas                          Desventajas--> no muchos desarrolladores lo utilizan por su gran complejidad y la cantidad de opciones/
     
//bulma:                                                                                                                         ventaja--> es bastante popular y muy sencillo de entender. tiene un diseño elegante y minimalista.                                  desventaja--> Tiene una    comunidad muy pequeña y no esta tan desarrollada como otros framework/

// !! comenzamos con los css processors: un preprocessor de css es un programa que interpreta una sintaxis y la convierte a css puro son herramientas que se utilizan para mejorar y agilizar el desarrollo de hojas de estilo en cascada (CSS). Estos preprocesadores proporcionan una serie de características y funcionalidades que no están presentes en CSS puro, lo que facilita la escritura, el mantenimiento y la reutilización del código CSS.

//apriendiendo less : variables sirve para no tener que cambiar linea por nilea el codigo de css , es decir mediante variables cambiar solamente una linea y que esta afecte las demas por ejemplo :

// @color-fondo:#f55;
// @min-width:15px;

// h1{
//   background-color:@color-fondo;
//   width:@min-width + 40px;
// }
// h2{
//   background-color:@color-fondo;
// }
// h3{
//   background-color:@color-fondo;
// }
// h3{
//   background-color:@color-fondo;
// }

//ESTE CODIGO ES QEL QUE INTERPRETARIA LESS

// h1 {
//   background-color: #f55;
//   width: 55px;
// }
// h2 {
//   background-color: #f55;
// }
// h3 {
//   background-color: #f55;
// }
// h3 {
//   background-color: #f55;
// }

// Y ESTE ES EL CODIGO QUE SUPLANTARIA AL ANTERIOR PASADO A CSS PURO


//------------------------------------------------------------------------------------/

//les funciones--> las funciones en Less son bloques de código que permiten realizar cálculos, manipular valores y aplicar lógica condicional dentro de las hojas de estilo. Puedes utilizar las funciones integradas de Less y también crear tus propias funciones personalizadas para mejorar la flexibilidad y reutilización del código CSS. /

// Selectores anidados-->   /
