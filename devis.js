document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuToggle');
    const navbar = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', function () {
        navbar.classList.toggle('active'); // Ajouter/retirer la classe active sur la nav
        menuIcon.classList.toggle('active'); // Animation du menu burger
    });

    // Fonction d'envoi de l'e-mail
    function envoyerEmail() {
        const entreprise = document.getElementById('entreprise').value;
        const lieu = document.getElementById('lieu').value;
        const employes = parseInt(document.getElementById('employes').value);
        const prestataire = document.getElementById('prestataire').value;

        // Vérification des champs obligatoires
        if (!entreprise || !lieu || !employes || !prestataire) {
            alert("Veuillez remplir tous les champs obligatoires.");
            return;
        }

        let produitRecommande = "";
        // Logique pour déterminer le produit recommandé
        if (employes <= 5) {
            produitRecommande = "Petite Firma"; 
        } else if (employes <= 10) {
            produitRecommande = "Moyenne Firma";
        } else if (employes <= 15) {
            produitRecommande = "Grande firma";
        } else if (employes <= 80) {
            produitRecommande = "La Concerto";
        } else if (employes <= 150) {
            produitRecommande = "Maestro";
        }

        // Initialisation de EmailJS 
        emailjs.init('JOTvNGFjrUQfQG57r');

        // Envoi des données via EmailJS
        emailjs.send("Test0307", "template_ozppsop", {
            entreprise: entreprise,
            lieu: lieu,
            employes: employes,
            prestataire: prestataire,
            produitRecommande: produitRecommande
        })
        .then(function(response) {
            console.log('E-mail envoyé avec succès !', response);
            document.getElementById('resultat').innerHTML = "Les informations ont été envoyées par e-mail avec succès !";
        }, function(error) {
            console.error("Erreur lors de l'envoi de l'e-mail :", error);
            document.getElementById('resultat').innerHTML = "Une erreur s'est produite lors de l'envoi de l'e-mail.";
        });
    }

    // Associer la fonction au bouton
    document.querySelector("button").addEventListener("click", envoyerEmail);
}); // Ceci est la fermeture du DOMContentLoaded
