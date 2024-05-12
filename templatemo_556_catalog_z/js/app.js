// Función para cargar la información inicial o buscar por nombre según el valor del input
async function cargarInformacion() {
    try {
        const inputBusqueda = document.querySelector('.tm-search-input');
        const consulta = inputBusqueda.value.trim();

        let url;
        if (consulta) {
            // Si hay una consulta, realizar la búsqueda por nombre
            const consultaCapitalizada = capitalizeWords(consulta);
            url = `http://localhost:8080/api/sistemareservas/v1/cliente/consulta?nombre=${consultaCapitalizada}`;
        } else {
            // Si no hay consulta, cargar la información inicial
            url = 'http://localhost:8080/api/sistemareservas/v1/cliente';
        }

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        console.log(url);

        renderData(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}


// Función para renderizar datos
function renderData(data) {
    console.log(data);
    const galleryDiv = document.getElementById('bookings');
    // Limpiar los resultados anteriores antes de renderizar nuevos resultados
    galleryDiv.innerHTML = '';

    let itemsToRender = data.content || data;
    
    if (itemsToRender.length > 0) {
        itemsToRender.forEach(item => {
            const bookingContainer = document.createElement('div');
            bookingContainer.classList.add('col-xl-3', 'col-lg-4', 'col-md-6', 'col-sm-6', 'col-12', 'mb-5', 'booking-container');
            bookingContainer.innerHTML = `
                <figure class="effect-ming tm-video-item">
                    <img src="img/reservation.jpg" alt="Image" class="img-fluid">
                    <figcaption class="d-flex align-items-center justify-content-center name_and_time">
                        <h2>${item.nombre}</h2>
                        <h2>${item.apellido}</h2>
                    </figcaption>                    
                </figure>
                <div class="d-flex justify-content-between tm-text-gray">
                    <span class="tm-text-gray-light">${item.apellido}</span>
                    <span>${item.apellido}</span>
                </div>
            `;
            // Asignar el ID de reserva al contenedor
            bookingContainer.dataset.bookingId = item.id;
            console.log(bookingContainer);
            // Agregar el nuevo elemento al contenedor principal
            galleryDiv.appendChild(bookingContainer);
        });
    }

    // Adjuntar el evento de clic a los elementos booking-container después de renderizar los datos
    attachClickEventToBookingContainers();
}

// Función para adjuntar el evento de clic a los elementos booking-container
function attachClickEventToBookingContainers() {
    const bookingContainers = document.querySelectorAll('.booking-container');
    bookingContainers.forEach(container => {
        container.addEventListener('click', () => {
            console.log('Clic en booking-container');
            // Obtener el ID del elemento específico
            const bookingId = container.dataset.bookingId; // Suponiendo que el ID se almacena en un atributo data-booking-id

            // Almacenar el ID en localStorage
            localStorage.setItem('selectedBookingId', bookingId);

            // Redirigir a otra vista
            window.location.href = 'photo-detail.html'; // Reemplaza 'otra_vista.html' con la URL de tu otra vista
        });
    });
}

// Seleccionar el input de búsqueda y adjuntar evento de input
const inputBusqueda = document.querySelector('.tm-search-input');
inputBusqueda.addEventListener('input', cargarInformacion);

// Capitalizar palabras de una oración
function capitalizeWords(sentence) {
    return sentence
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
}

// Llamar a la función para cargar la información inicial al cargar la página
cargarInformacion();































































































































































































































// Desde acá byron
