//Selectores 
const form = document.getElementById("editForm"); 


document.addEventListener("DOMContentLoaded", function() {
 // Obtener el ID de reserva almacenado en localStorage
 const selectedBookingId = localStorage.getItem('selectedBookingId');

 if (!selectedBookingId) {
     console.error('No se ha encontrado un ID de reserva en el almacenamiento local.');
     return; // Salir de la función si no hay ID de reserva
 }

 cargarDatosEspecificos(selectedBookingId);

 async function cargarDatosEspecificos(bookingId) {
     try {
         const url = `http://localhost:8080/api/sistemareservas/v1/cliente/id/${bookingId}`;
         const response = await fetch(url);
         if (!response.ok) {
             throw new Error('Network response was not ok');
         }

         const data = await response.json(); 

         console.log(data);

         pintarDatos(data);

     } catch (error) {
         console.log("Error: ",  error + " catch");
     }
 }


 function pintarDatos(data) {
     //Donde vamos a inyectar
     const infoDiv = document.getElementById('info-details');
     infoDiv.innerHTML = `
         <div class="tm-bg-gray tm-video-details">
             <p class="mb-4">
                 Name: ${data.nombre}
             </p>
             <p class="mb-4">
                 Description: ${data.nombre}
             </p>
             <p class="mb-4">
                 Date: ${data.nombre}
             </p>
             <p class="mb-4">
                 Time: ${data.nombre}
             </p>
             <p class="mb-4">
                 Nombre: ${data.nombre}
             </p>
             <div class="text-center mb-5 d-flex justify-content-center">
                 <a href="#" id="editBtn" class="btn btn-primary tm-btn-big mr-3" data-toggle="modal" data-target="#editModal">Edit</a>
                 <a href="#" id="deleteBtn" class="btn btn-danger tm-btn-big">Delete</a>
             </div>  
         </div>
     `;



     //Selectores
     document.getElementById("inputTitle").value = data.nombre
     document.getElementById("inputDescription").value = data.nombre
     document.getElementById("inputDate").value = "2024-05-12"
     document.getElementById("inputTime").value = "14:30"



     document.getElementById("editBtn").addEventListener("click", (e) => {
        const data = e.target.parentElement.parentElement;



    })
    

 }




































    const editBtn = document.getElementById("editBtn");
    const deleteBtn = document.getElementById("deleteBtn");
    const saveChangesBtn = document.getElementById("saveChangesBtn");

    editBtn.addEventListener("click", function() {
        const editModal = new bootstrap.Modal(document.getElementById('editModal'));
        editModal.show();
    });

    saveChangesBtn.addEventListener("click", function() {
        // Realizar la lógica para guardar los cambios aquí

        // Cerrar el modal y esperar a que se complete
        location.reload(); 
    });

    deleteBtn.addEventListener("click", function() {
        // Mostrar SweetAlert para confirmar la eliminación
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Esta acción no se puede deshacer",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminarlo'
        }).then((result) => {
            if (result.isConfirmed) {
                // Aquí puedes realizar la acción de eliminación
                console.log("Elemento eliminado");
            }
        });
    });

    // Ocultar el modal de edición al inicio
    const editModal = new bootstrap.Modal(document.getElementById('editModal'));
    editModal.hide();

    // Escuchar el evento hidden.bs.modal para realizar acciones después de cerrar el modal
    $('#editModal').on('hidden.bs.modal', function (e) {
        // Restablecer el fondo opaco después de cerrar el modal
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
    });

    // Función para cargar información de reserva específica
    async function cargarReservaEspecifica() {
        let url = "http://localhost:8080/api/sistemareservas/v1/cliente"; 
        const response = await fetch(url); 
    }

    cargarDatosEspecificos();

});

