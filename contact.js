
// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('envoyer-btn').addEventListener('click', envoyerEmail());
// });

function envoyerEmail() {
    console.log('salut')

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    // Initialisation de EmailJS 
    emailjs.init('JOTvNGFjrUQfQG57r');
    // Envoi des données par e-mail via EmailJS
    emailjs.send("Test0307", "template_jln1elq", {
        name: name,
        email: email,
        phone: phone,
        message: message
    })
    .then(function(response) {
        document.getElementById('resultat').innerHTML = "Les informations ont été envoyées par e-mail avec succès !";
    }, function(error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
        document.getElementById('resultat').innerHTML = "Une erreur s'est produite lors de l'envoi de l'e-mail.";
    });
}
