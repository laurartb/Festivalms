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


document.addEventListener('DOMContentLoaded', () => {
  const artistas = {
    1: {
      nombre: "Miranda",
      imagen: "imagenes/artistas/MIRANDA-2-scaled-e1686847545905.jpeg",
      descripcion: "Miranda llega con su mezcla única de pop y energía eléctrica. Uno de los platos fuertes de esta edición."
    },
    2: {
      nombre: "Al Safir",
      imagen: "imagenes/artistas/fleek-al-safir-entrevista-lacoste-7-scaled.jpg",
      descripcion: "El rapero granadino Al Safir se sube al escenario del Madrid Salvaje con su estilo inconfundible."
    },
    3: {
      nombre: "Swit Eme",
      imagen: "imagenes/artistas/image00002-1-1-scaled.jpeg",
      descripcion: "Desde Alicante, Swit Eme trae su sonido urbano y contundente para encender la noche madrileña."
    }
  };

  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const closeBtn = document.querySelector('.close');

  document.querySelectorAll('.artista').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.getAttribute('data-artista');
      const info = artistas[id];
      if (!info) return;

      modalImg.src = info.imagen;
      modalTitle.textContent = info.nombre;
      modalDescription.textContent = info.descripcion;
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
