// //Haz tú validación en javascript acá



// // Obtener el formulario
// const form = document.querySelector('.formcontacto__form');

// // Agregar un evento de envío al formulario
// form.addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevenir el envío del formulario por defecto

//   // Obtener los valores de los campos de entrada
//   const nombre = form.nombre.value;
//   const email = form.email.value;
//   const asunto = form.asunto.value;
//   const mensaje = form.mensaje.value;

//   // Validar que los campos no estén vacíos
//   if (nombre === '' || email === '' || asunto === '' || mensaje === '') {
//     alert('Por favor, completa todos los campos del formulario.');
//     return; // Detener la ejecución si hay campos vacíos
//   }

//   // Crear un objeto con los datos del formulario
//   const datosFormulario = {
//     nombre: nombre,
//     email: email,
//     asunto: asunto,
//     mensaje: mensaje
//   };

//   // Aquí puedes realizar la lógica para enviar los datos del formulario a tu backend o servicio de correo electrónico.
//   // Por ejemplo, puedes utilizar fetch() para hacer una solicitud POST a tu servidor.

//   // Mostrar un aviso de éxito
//   alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo a la brevedad.');

//   // Restablecer el formulario
//   form.reset();
// });



// ------------------------------------------------------------------------------------------------

// Obtener el formulario
const form = document.querySelector('.formcontacto__form');

// Agregar un evento de envío al formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el envío del formulario por defecto

  // Obtener los valores de los campos de entrada
  const nombre = form.nombre.value;
  const email = form.email.value;
  const asunto = form.asunto.value;
  const mensaje = form.mensaje.value;

  // Validar que los campos no estén vacíos
  if (nombre === '' || email === '' || asunto === '' || mensaje === '') {
    alert('Por favor, completa todos los campos del formulario.');
    return; // Detener la ejecución si hay campos vacíos
  }

  // Crear un objeto con los datos del formulario
  const datosFormulario = {
    nombre: nombre,
    email: email,
    asunto: asunto,
    mensaje: mensaje
  };

  // Configurar la solicitud POST
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datosFormulario)
  };

  // Enviar la solicitud al servicio de correo electrónico
  fetch('lorenza.mydigitalportfolio@gmail.com', options)
    .then(response => {
      if (response.ok) {
        // Mostrar un aviso de éxito
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo a la brevedad.');
        // Restablecer el formulario
        form.reset();
      } else {
        throw new Error('Ha ocurrido un error al enviar el formulario.');
      }
    })
    .catch(error => {
      console.error(error);
      alert('Ha ocurrido un error al enviar el formulario. Por favor, intenta nuevamente más tarde.');
    });
});
