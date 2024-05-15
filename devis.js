function envoyerEmail() {
    const entreprise = document.getElementById('entreprise').value;
    const lieu = document.getElementById('lieu').value;
    const employes = parseInt(document.getElementById('employes').value);
    const prestataire = document.getElementById('prestataire').value;

    let produitRecommande = "";

    // Logique pour déterminer le produit recommandé en fonction des informations fournies
    if (employes <= 5) {
        produitRecommande = "Petite Firma"; 
    } else if (employes <= 10) {
        produitRecommande = "Moyenne Firma";
    } else if (employes <=15) {
        produitRecommande = "Grande firma";
    } else if (employes <= 80) {
        produitRecommande = "La Concerto";
    } else {
        produitRecommande = "Maestro";
    }

    // Initialisation de EmailJS 
    emailjs.init('JOTvNGFjrUQfQG57r');
    console.log(emailjs)

    // Envoi des données par e-mail via EmailJS
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
        console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
        document.getElementById('resultat').innerHTML = "Une erreur s'est produite lors de l'envoi de l'e-mail.";
    });
}
