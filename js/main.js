// Contact form submission
const contactForm = document.getElementById('contact-form');

if(contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    contactForm.reset();
  });
}

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if(hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

function showDetails(name, price, sizes, availability) {
  document.getElementById("product-name").textContent = name;
  document.getElementById("product-price").textContent = price;
  document.getElementById("product-sizes").textContent = sizes;
  document.getElementById("product-availability").textContent = availability;
  document.getElementById("product-modal").style.display = "block";
}

function closeModal() {
  document.getElementById("product-modal").style.display = "none";
}

// Close modal if user clicks outside
window.onclick = function(event) {
  let modal = document.getElementById("product-modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
