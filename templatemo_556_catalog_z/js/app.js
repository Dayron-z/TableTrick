


async function fetchDataAndRender(consulta) {
    try {
        let url = 'http://localhost:3000/reserva';
        
        // Si se proporciona una consulta, agregarla como parámetro de búsqueda a la URL
        if (consulta) {
            url += `?nombre=${consulta}`; // Convertir la consulta a minúsculas
        }
        
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await response.json();


        console.log(data);

        renderData(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}


// Resto del código igual que antes...


// Resto del código igual que antes...

function renderData(data) {
    const galleryDiv = document.getElementById('bookings');
    // Limpiar los resultados anteriores antes de renderizar nuevos resultados
    galleryDiv.innerHTML = '';

    data.forEach(item => {
        galleryDiv.innerHTML += `
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure class="effect-ming tm-video-item">
                    <img src="img/reservation.jpg" alt="Image" class="img-fluid">
                    <figcaption class="d-flex align-items-center justify-content-center name_and_time">
                        <h2>${item.nombre}</h2>
                        <h2>${item.fecha}</h2>
                        <a href="photo-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div class="d-flex justify-content-between tm-text-gray">
                    <span class="tm-text-gray-light">${item.fecha}</span>
                    <span>${item.estado}</span>
                </div>
            </div>
        `;
    });
}

// Seleccionar el input de búsqueda
const inputBusqueda = document.querySelector('.tm-search-input');

inputBusqueda.addEventListener('input', function(event) {
    // Obtener el valor de búsqueda del input
    const consulta = event.target.value.trim(); // Obtener el valor y eliminar los espacios en blanco al inicio y al final
    
    // Capitalizar la consulta
    const consultaCapitalizada = capitalizeWords(consulta);

    // Llamar a la función para realizar la búsqueda con el valor capitalizado
    fetchDataAndRender(consultaCapitalizada);
});



function capitalizeWords(sentence) {
    return sentence
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }


// Llama a la función para iniciar el proceso (sin consulta inicial)
fetchDataAndRender('');

















































































































































































































































// Desde acá byron
