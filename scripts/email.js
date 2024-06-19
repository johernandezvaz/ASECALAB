function sendEmail(event) {
    event.preventDefault();  // Prevenir el envío del formulario

    // Obtener los valores de los campos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const city = document.getElementById('city').value;
    const message = document.getElementById('message').value;

    // Construir el enlace mailto
    const recipient = 'johernandezvaz@gmail.com';
    const subject = encodeURIComponent('Contacto desde el formulario');
    const body = encodeURIComponent(
        `Nombre Completo: ${name}\n` +
        `Correo Electrónico: ${email}\n` +
        `Número de contacto: ${number}\n` +
        `Ciudad: ${city}\n\n` +
        `Mensaje:\n${message}`
    );

    // Abrir el enlace mailto
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
}