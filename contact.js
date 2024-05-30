function envoyerEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Vérification des champs obligatoires
    if (!name || !email || !phone || !message) {
        // Affichage d'un message d'erreur si un champ obligatoire est vide
        alert("Veuillez remplir tous les champs obligatoires.");
        return; // Arrêt de la fonction si un champ est vide
    }

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

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');

    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', function () {
            navbar.classList.toggle('active');
        });
    }
});
