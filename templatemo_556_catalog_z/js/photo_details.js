document.addEventListener("DOMContentLoaded", function() {
    // Obtener el ID de reserva almacenado en localStorage
    const selectedBookingId = localStorage.getItem('selectedBookingId');


    async function cargarDatosEspecificos() {
        try {
            const url = `http://localhost:8080/api/sistemareservas/v1/cliente/id/${selectedBookingId}`
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json(); 

            console.log(data);


        } catch (error) {
            console.log("Error: ",  error + " catch");
        }
    }


    function pintarDatos() {
        //Donde vamos a inyectar
        const galleryDiv = document.getElementById('bookings');







        
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

