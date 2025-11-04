// Hace que el menú cambie al hacer scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Detecta clics en el botón de submenu
const submenuBtn = document.querySelector('.submenu-btn');
const submenuContent = document.querySelector('.submenu-content');

submenuBtn.addEventListener('click', (e) => {
  e.preventDefault(); // evita que recargue la página
  submenuContent.classList.toggle('visible');
});

