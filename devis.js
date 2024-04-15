document.getElementById('devisForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const entreprise = document.getElementById('entreprise').value;
    const lieu = document.getElementById('lieu').value;
    const employes = parseInt(document.getElementById('employes').value);
    const prestataire = document.getElementById('prestataire').value;
    
    let produitRecommande = "";
    
    // Logique pour déterminer le produit recommandé en fonction des informations fournies
    if (employes <= 5) {
    produitRecommande = "Petite Firma"; 
    }
    else if (employes <= 10) {
    produitRecommande = "Moyenne Firma";
    }
    else if (employes <=15){
    produitRecommande = "Grande firma"
    }
    else if (employes <= 80) {
    produitRecommande = " La Concerto";
    }
    else {
    produitRecommande = "Maestro";
    }
    
    const resultat = document.getElementById('resultat');
    resultat.innerHTML = `Pour ${entreprise} situé à ${lieu}, avec ${employes} employés et ${
    prestataire === "oui" ? "un" : "aucun"
    } prestataire, nous recommandons une ${produitRecommande}.`;
    
    return false; // ou event.preventDefault();
    });