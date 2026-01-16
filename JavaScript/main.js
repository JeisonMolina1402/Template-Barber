
// animaciones

document.addEventListener("DOMContentLoaded", function() {
    
    const observerOptions = {
        root: null, 
        threshold: 0.2 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Cuando entra en pantalla, activamos la animación
                entry.target.classList.add("active");
            } else {
                // CAMBIO CLAVE: Cuando sale de pantalla, removemos la clase
                // Esto permite que la animación se repita al volver a subir/bajar
                entry.target.classList.remove("active");
            }
        });
    }, observerOptions);

    const elementosAnimar = document.querySelectorAll('.revelar');
    elementosAnimar.forEach(el => observer.observe(el));
});

// notificacion formulario

// Manejo simple del envío del formulario
const contactForm = document.querySelector('#contactForm');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('¡Gracias por escribirnos! En breve un maestro barbero se pondrá en contacto contigo.');
        contactForm.reset();
    });
}

// galeria

// Función para abrir el Lightbox
function abrirLightbox(elemento) {
    // 1. Busca la imagen dentro del div clickeado
    const imagenSrc = elemento.querySelector('img').src;
    
    // 2. Pone esa ruta en la imagen del Modal
    const modalImage = document.getElementById('lightboxImage');
    modalImage.src = imagenSrc;
    
    // 3. Abre el modal usando Bootstrap
    const myModal = new bootstrap.Modal(document.getElementById('lightboxModal'));
    myModal.show();
}

// compra productos
function solicitarProducto(nombreProducto) {
    // Número de teléfono de la barbería
    const telefono = "593981766228";
    
    // Construcción del mensaje para WhatsApp
    const mensaje = `¡Hola! %0A` +
                    `Quisiera adquirir el siguiente producto: %0A` +
                    `*${nombreProducto}*%0A%0A` +
                    `¿Me podrían confirmar si tienen disponibilidad?`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
}

// agendar citas

    // Lógica para enviar la cita por WhatsApp
    document.getElementById('formCita').addEventListener('submit', function (e) {
      e.preventDefault();

      const servicio = document.getElementById('servicio').value;
      // Corregido: Asegúrate de que el selector busque el radio marcado
      const barberoInput = document.querySelector('input[name="barbero"]:checked');
      const barbero = barberoInput ? barberoInput.value : "No seleccionado";
      const fecha = document.getElementById('fecha').value;
      const hora = document.getElementById('hora').value;

      const mensaje = `¡Hola! Quisiera agendar una cita:%0A` +
        `✂️ *Servicio:* ${servicio}%0A` +
        `🧔 *Barbero:* ${barbero}%0A` +
        `📅 *Fecha:* ${fecha}%0A` +
        `⏰ *Hora:* ${hora}`;

      window.location.href = `https://wa.me/1234567890?text=${mensaje}`;
    });
  