// Inicializa EmailJS con tu USER_ID
emailjs.init("OymTMs4wyLL2auEw7");

document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenir el envío predeterminado del formulario

    // Obtener los valores de los campos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const city = document.getElementById('city').value;
    const message = document.getElementById('message').value;

    // Prepara los parámetros para enviar con EmailJS
    const params = {
        name: name,
        email: email,
        number: number,
        city: city,
        message: message
    };

    // Enviar el correo usando EmailJS
    emailjs.send("service_xb5qah1", "template_rduhoii", params)
    .then(function(response) {
        // Mostrar mensaje de éxito
        document.getElementById("email-form").style.display = "none";
        document.getElementById("responseMessage").innerHTML = "<p>¡Gracias! Hemos recibido tu mensaje.</p>";
    }, function(error) {
        // Mostrar mensaje de error
        document.getElementById("responseMessage").innerHTML = "<p>Oops! Algo ha salido mal.</p>";
    });
});
