
// Creación del archivo CSS: Crea un archivo CSS para tu componente. Por ejemplo, MiComponente.module.css:

// css

// .container {
//   background-color: blue;
//   padding: 10px;
// }

// .title {
//   color: white;
//   font-size: 20px;
// }
// Uso en el componente: En tu componente de React, importa el archivo CSS y utiliza las clases generadas por CSS Modules:

// jsx

// import React from 'react';
// import styles from './MiComponente.module.css';

// function MiComponente() {
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Hola mundo</h1>
//     </div>
//   );
// }
// En este ejemplo, styles es un objeto que contiene las clases generadas automáticamente por CSS Modules a partir del archivo MiComponente.module.css. Utilizamos estas clases en los elementos JSX mediante la propiedad className.

// Estilos dinámicos: Puedes combinar las clases de CSS Modules con estilos en línea para lograr estilos dinámicos. Por ejemplo:

// jsx

// import React, { useState } from 'react';
// import styles from './MiComponente.module.css';

// function MiComponente() {
//   const [isRed, setIsRed] = useState(false);

//   const containerClasses = `${styles.container} ${isRed ? styles.redContainer : ''}`;

//   return (
//     <div className={containerClasses}>
//       <h1 className={styles.title}>Hola mundo</h1>
//       <button onClick={() => setIsRed(!isRed)}>Cambiar color</button>
//     </div>
//   );
// }
// En este ejemplo, agregamos una clase dinámica redContainer a containerClasses en función del estado isRed. La clase redContainer se define en el archivo CSS y se agrega o se quita según el valor de isRed.

// Con CSS Modules, puedes crear y utilizar clases CSS locales en tus componentes de React. Esto proporciona una forma de encapsular estilos y evitar conflictos de nombres de clase en toda la aplicación.

// Espero que este ejemplo te ayude a comprender cómo utilizar CSS Modules en React. Si tienes más preguntas, no dudes en preguntar.