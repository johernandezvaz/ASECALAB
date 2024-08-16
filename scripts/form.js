// Inicializa EmailJS con tu usuario ID
emailjs.init("OymTMs4wyLL2auEw7");

document.getElementById("suggestionsForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtén los datos del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const type = document.getElementById("type").value;
    const message = document.getElementById("message").value;

    // Prepara los parámetros para enviar
    const params = {
        name: name,
        email: email,
        type: type,
        message: message
    };

    // Enviar email usando EmailJS
    emailjs.send("service_xb5qah1", "template_yg3da2t", params)
    .then(function(response) {
        // Éxito, muestra mensaje de agradecimiento
        document.getElementById("suggestionsForm").style.display = "none";
        document.getElementById("responseMessage").innerHTML = "<p>Hemos recibido su mensaje, gracias por ayudarnos a mejorar</p>";
    }, function(error) {
        // Error, muestra mensaje de error
        document.getElementById("responseMessage").innerHTML = "<p>Lo sentimos, algo salió mal pero creemos que es nuestra culpa, intentalo de nuevo</p>";
    });
});
