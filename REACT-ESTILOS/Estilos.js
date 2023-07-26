// Hoy vamos a aprender los diferentes metodos por el cual darle estilo a un componente. Por ejemplo los estilos en una hoja CSS externa ,estilos en linea o librerias de estilos en linea. Cada uno de estos enfoques tiene su ventaja y su desventaja a la hora de implementarlos por eso es conveniente elejir el que mejor rendimiento y eficacie provoque dependiendo el proyecto donde estemos trabajando


//LEGACY---> Es la forma en la que se trabajaba antes en react, es importante mencionarla ya que son las bases de los siguientes metodos. El poblema principal es que la hoja de estilos termina siendo muy grande y mientras mas grande sea la hoja de estilos mas probabilidades hay de tener un error de asignacion a las clases llegando al punto de pisar entre si las clases ya que las hojas de estilos impactan de forma global a los componentes llegando a producirse errores de compilacion entre clases y resultando molesto si tenemos muchos componentes para trabajar.

//incline Styling---> Gracias a esta funcion podemos escribir CSS en javascript.El Inline Styling en React se refiere a la forma de aplicar estilos directamente a los elementos utilizando el atributo style en línea. En lugar de definir los estilos en un archivo CSS externo o utilizando librerías de estilos en línea, puedes definir los estilos dentro de tus componentes de React utilizando objetos JavaScript.


//CSS modules---> CSS modules  Proporciona una solución para evitar el conflicto de nombres de clases en CSS y mejora la encapsulación de estilos dentro de los componentes. La idea principal detrás de CSS Modules es que cada archivo CSS se convierte en un módulo independiente, donde las clases definidas en ese archivo se vuelven locales a ese módulo. Esto significa que los nombres de clase en un archivo CSS no se filtrarán ni se mezclarán con otros componentes o estilos en la aplicación.Aquí hay un ejemplo de cómo se utiliza CSS Mo

//Styled components--->