//menu icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


//sticky sections active links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
  // Sticky navbar
  let header = document.querySelector('.header');

  header.classList.toggle('sticky', window.scrollY > 100);

  //remove menu icon navbar when click navbar link (scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};


//Animation
ScrollReveal({
  // reset: true,
  distance:'60%',
  duration:1600,
  delay:160 
});

ScrollReveal().reveal('.home-contant, .home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.services-container,.portfolio-box, .testimonial-wrapper, .about-content p, .about-content1 p, .contactbox, .sosial-midia .footer-iconTop , .container h1', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img ,.home-content p, h5,.home-content img, .container img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3,about-content,.home-img img, .about-img1 img,  .container li ', { origin: 'right' });


// products js

function changeImage(image) {
    document.getElementById('mainImage').src = image;
}

function selectColor(color) {
    console.log("Selected color: " + color);
}

function addToCart() {
    alert("Item added to cart!");
}

