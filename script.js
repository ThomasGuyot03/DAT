document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });

    // Ajoutez un écouteur d'événements pour fermer le menu lorsqu'un lien est cliqué
    navbar.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navbar.classList.remove('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.image-container');

    function showNextImage() {
        images[currentImageIndex].style.display = 'none';
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].style.display = 'block';
    }

    setInterval(showNextImage, 10000); // Change d'image toutes les 3 secondes (3000 ms)
});

	document.addEventListener("DOMContentLoaded", function() {
		const filterButtons = document.querySelectorAll(".filter-button");
		const items = document.querySelectorAll(".item");
	
		// Par défaut, n'affiche que les éléments de la première catégorie
		items.forEach(function(item) {
			if (!item.classList.contains("filter1")) {
				item.style.display = "none";
			}
		});
	
		filterButtons.forEach(function(button) {
			button.addEventListener("click", function() {
				const filter = this.getAttribute("data-filter");
	
				items.forEach(function(item) {
					if (item.classList.contains(filter)) {
						item.style.display = "block";
					} else {
						item.style.display = "none";
					}
				});
			});
		});
	});

	let sections = document.querySelectorAll('section');
	let navLinks = document.querySelectorAll('header nav a');
	
	window.addEventListener('scroll', () => {
		sections.forEach(sec => {
			let top = window.scrollY;
			let offset = sec.offsetTop - 100;
			let height = sec.offsetHeight;
			let id = sec.getAttribute('id');
	
			if (top >= offset && top < offset + height) {
				navLinks.forEach(link => {
					link.classList.remove('active');
				});
				let targetLink = document.querySelector('header nav a[href="#' + id + '"]');
				if (targetLink) {
					targetLink.classList.add('active');
				}
			}
		});
	});

	