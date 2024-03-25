var timer = 4000;

var i = 0;
var max = $('#c > li').length;
 
	$("#c > li").eq(i).addClass('active').css('left','0');
	$("#c > li").eq(i + 1).addClass('active').css('left','25%');
	$("#c > li").eq(i + 2).addClass('active').css('left','50%');
	$("#c > li").eq(i + 3).addClass('active').css('left','75%');
 

	setInterval(function(){ 

		$("#c > li").removeClass('active');

		$("#c > li").eq(i).css('transition-delay','0.25s');
		$("#c > li").eq(i + 1).css('transition-delay','0.5s');
		$("#c > li").eq(i + 2).css('transition-delay','0.75s');
		$("#c > li").eq(i + 3).css('transition-delay','1s');

		if (i < max-4) {
			i = i+4; 
		}

		else { 
			i = 0; 
		}  

		$("#c > li").eq(i).css('left','0').addClass('active').css('transition-delay','1.25s');
		$("#c > li").eq(i + 1).css('left','25%').addClass('active').css('transition-delay','1.5s');
		$("#c > li").eq(i + 2).css('left','50%').addClass('active').css('transition-delay','1.75s');
		$("#c > li").eq(i + 3).css('left','75%').addClass('active').css('transition-delay','2s');
	
	}, timer);




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
				document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
			}
		});
	});

	