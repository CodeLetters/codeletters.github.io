window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  var image = navbar.querySelector('img');
  var heading = navbar.querySelector('h1');
  var offset = navbar.offsetTop;

  if (window.scrollY > offset + 50) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
    image.style.height = ''; // Reset the height to its original value
    heading.style.fontSize = ''; // Reset the font size to its original value
  }
});

