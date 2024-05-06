async function fetchDataAndRender() {
    try {
        const response = await fetch('http://localhost:3000/reserva');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        data.forEach(item => renderData(item));
    } catch (error) {
        console.error('Fetch error:', error);
    }
}


function renderData(item) {
    const galleryDiv = document.getElementById('bookings');
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
}
// Llama a la función para iniciar el proceso
fetchDataAndRender();



document.addEventListener("keyup", (e) => {
  
})


































































































































































































































































// Desde acá byron