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




// Función para renderizar los datos
function renderData(data) {
    console.log(data);
    const galleryDiv = document.getElementById('bookings');
    // Limpiar los resultados anteriores antes de renderizar nuevos resultados
    galleryDiv.innerHTML = '';

    let itemsToRender = data.content || data;
    
    if (itemsToRender.length > 0) {
        itemsToRender.forEach(item => {
            galleryDiv.innerHTML += `
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                    <figure class="effect-ming tm-video-item">
                        <img src="img/reservation.jpg" alt="Image" class="img-fluid">
                        <figcaption class="d-flex align-items-center justify-content-center name_and_time">
                            <h2>${item.nombre}</h2>
                            <h2>${item.apellido}</h2>
                            <a href="photo-detail.html">View more</a>
                        </figcaption>                    
                    </figure>
                    <div class="d-flex justify-content-between tm-text-gray">
                        <span class="tm-text-gray-light">${item.apellido}</span>
                        <span>${item.apellido}</span>
                    </div>
                </div>
            `;
        });
    }
}


// Seleccionar el input de búsqueda
const inputBusqueda = document.querySelector('.tm-search-input');

// Evento que se dispara cuando cambia el valor del input
inputBusqueda.addEventListener('input', function(event) {
    cargarInformacion();
});

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
