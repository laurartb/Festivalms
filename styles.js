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


// Datos de los artistas
const artistas = {
  1: {
    nombre: "Artista 1",
    imagen: "img/artista1.jpg",
    descripcion: "Este artista traerá toda su energía salvaje al escenario principal. No te lo pierdas."
  },
  2: {
    nombre: "Artista 2",
    imagen: "img/artista2.jpg",
    descripcion: "Con un estilo único y un directo arrollador, promete uno de los shows más esperados del festival."
  },
  3: {
    nombre: "Artista 3",
    imagen: "img/artista3.jpg",
    descripcion: "Fusión de estilos y pura actitud. Será un espectáculo que encenderá la noche madrileña."
  }
};

// Elementos modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeBtn = document.querySelector(".close");

// Evento: abrir modal
document.querySelectorAll(".artista").forEach(item => {
  item.addEventListener("click", () => {
    const id = item.getAttribute("data-artista");
    const info = artistas[id];
    modalImg.src = info.imagen;
    modalTitle.textContent = info.nombre;
    modalDescription.textContent = info.descripcion;
    modal.style.display = "flex";
  });
});

// Evento: cerrar modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar modal con clic fuera de ventana
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
