// AJAX

//es un acrónimo de "Asynchronous JavaScript and XML" (JavaScript y XML Asíncronos). Es una técnica de programación web que permite actualizar el contenido de una página de manera asíncrona, sin tener que recargarla por completo.
// Antes de AJAX, cuando se interactuaba con una página web, por ejemplo, al enviar un formulario o hacer clic en un enlace, era necesario recargar toda la página para ver los cambios. Esto resultaba en una experiencia de usuario menos fluida y podía llevar más tiempo, especialmente si la página era grande o la conexión a Internet era lenta.
// Con AJAX, es posible enviar y recibir datos desde el servidor en segundo plano, sin interrumpir la visualización actual de la página. Esto se logra utilizando JavaScript para realizar solicitudes asíncronas al servidor y manipular la respuesta sin tener que recargar la página.

//ajax--->
//Dentro de ajax podemos encontrar dos formas de expresar las solicitudes asincronicas, mediante XML o JSON la diferencia entre ambos dependerá del contexto y los requisitos específicos de la aplicación. JSON es más comúnmente utilizado en aplicaciones web y móviles debido a su simplicidad y su estrecha relación con JavaScript, mientras que XML puede ser más adecuado en casos donde se requiere una mayor flexibilidad o se necesita soporte para metadatos complejos.


// METODOS HTTP--->
// on verbos o acciones que se utilizan para indicar la intención de una solicitud y el tipo de operación que se debe realizar en un recurso en un servidor web. Aquí tienes una explicación de los métodos HTTP más comunes:

// GET: Este método se utiliza para solicitar recursos del servidor. La solicitud GET solicita al servidor que envíe el recurso especificado en la URL. Es un método seguro e idempotente, lo que significa que no debe tener efectos secundarios y se puede llamar varias veces sin cambios en el estado del servidor.

// POST: El método POST se utiliza para enviar datos al servidor para que sean procesados. Por lo general, se utiliza para enviar formularios o enviar datos en el cuerpo de la solicitud HTTP. A diferencia de GET, POST no es idempotente, ya que enviar la misma solicitud varias veces puede tener efectos diferentes o duplicar los datos.

// PUT: El método PUT se utiliza para actualizar un recurso existente en el servidor. Se envía el recurso completo en el cuerpo de la solicitud a una ubicación específica. Si el recurso no existe, se puede crear utilizando PUT. Al igual que POST, no es idempotente.

// DELETE: Como su nombre indica, el método DELETE se utiliza para eliminar un recurso específico en el servidor. Al enviar una solicitud DELETE a una URL, se solicita que se elimine el recurso correspondiente. Al igual que GET, DELETE es seguro e idempotente.
// EVENTOS--->
// RESUMEN IDEAS CENTRALES DE LA CLASE--->
