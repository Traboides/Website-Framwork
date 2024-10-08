	// Toggle menu for mobile
	const navToggle = document.querySelector('.nav-toggle');
	const navLinks = document.querySelector('.nav-links');

	navToggle.addEventListener('click', function() {
		navLinks.classList.toggle('open');
	});

	// Close nav-toggle when screen size changes
	window.addEventListener('resize', function() {
	if (window.innerWidth > 768) {
		navLinks.classList.remove('open');
	}
	});


	



	// window.addEventListener("DOMContentLoaded", function () {
	// 	// Store and restore scroll position
	// 	if (sessionStorage.getItem("scrollPosition")) {
	// 	  window.scrollTo(0, parseInt(sessionStorage.getItem("scrollPosition"), 10));
	// 	}
	  
	// 	// Save the current scroll position before the page unloads
	// 	window.addEventListener("beforeunload", function () {
	// 	  sessionStorage.setItem("scrollPosition", window.scrollY);
	// 	});
	  
	// 	// Adjust behavior when scrolled to the bottom of the page
	// 	window.addEventListener("scroll", function () {
	// 	  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
	// 		sessionStorage.setItem("scrollPosition", window.scrollY);
	// 	  }
	// 	});
	//   });
	  