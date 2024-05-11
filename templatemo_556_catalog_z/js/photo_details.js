document.addEventListener("DOMContentLoaded", function() {
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
        console.log("le di");
        alert("Le dí")
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

    const editModal = new bootstrap.Modal(document.getElementById('editModal'));
    editModal.hide();
    // Escuchar el evento hidden.bs.modal para realizar acciones después de cerrar el modal
    $('#editModal').on('hidden.bs.modal', function (e) {
        // Restablecer el fondo opaco después de cerrar el modal
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
    });
    

});
