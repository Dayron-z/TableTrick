// document.addEventListener("DOMContentLoaded", function() {
//     const pagination = document.getElementById("pagination");
//     const prevBtn = pagination.querySelector(".tm-btn-prev");
//     const nextBtn = pagination.querySelector(".tm-btn-next");
//     const pagingLinksContainer = pagination.querySelector(".tm-paging");

//     let selectedNumber = 1; // Variable para almacenar el número seleccionado inicialmente

//     // Función para calcular los números de la paginación
//     function calcularNumerosPaginacion(selectedNumber) {
//         const numerosPagina = [];
//         const cantidadNumeros = 4; // Cantidad de números de paginación a mostrar
//         let startNumber = selectedNumber - Math.floor(cantidadNumeros / 2);

//         // Ajustar el inicio si es menor que 1
//         if (startNumber < 1) {
//             startNumber = 1;
//         }

//         // Generar números de página consecutivos
//         for (let i = 0; i < cantidadNumeros; i++) {
//             numerosPagina.push(startNumber + i);
//         }


//         console.log("selectedNumber:" + selectedNumber);
//         console.log( "startNumber:"+ startNumber);
//         console.log("numerosPagina:" + numerosPagina);
//         return numerosPagina;
//     }






//     // Función para actualizar la paginación
//     function actualizarPaginacion(selectedNumber) {
//         // Limpiar la paginación existente
//         pagingLinksContainer.innerHTML = '';

//         // Calcular los números de la paginación
//         const numerosPagina = calcularNumerosPaginacion(selectedNumber);

//         // Agregar los números de la paginación al contenedor
//         numerosPagina.forEach(function(numero) {
//             const link = document.createElement("a");
//             link.href = "javascript:void(0);";
//             link.classList.add("tm-paging-link");
//             if (numero === selectedNumber) {
//                 link.classList.add("active");
//             }
//             link.textContent = numero;
//             pagingLinksContainer.appendChild(link);
//         });

//         // Habilitar o deshabilitar botón "Previous"
//         prevBtn.disabled = selectedNumber === 1;
//     }

//     // Manejar eventos de clic en números de la paginación
//      pagingLinksContainer.addEventListener("click", async function(event) {
//         const link = event.target;
//         if (link.classList.contains("tm-paging-link")) {
//             selectedNumber = parseInt(link.textContent); // Actualizar selectedNumber
//             actualizarPaginacion(selectedNumber);
//             // Lógica para cargar los datos correspondientes al número seleccionado

//             const url = `http://localhost:8080/api/sistemareservas/v1/cliente?page=${selectedNumber}` 
            









//             // Puedes llamar a tu backend aquí para obtener los datos de la página seleccionada
//         }
//     });

//     // Inicializar la paginación con el número seleccionado inicialmente
//     actualizarPaginacion(selectedNumber);

//     // Manejar evento de clic en botón "Previous"
//     prevBtn.addEventListener("click", function() {
//         // Lógica para cargar la página anterior
//         selectedNumber--; // Decrementar selectedNumber
//         actualizarPaginacion(selectedNumber);
//         // Puedes llamar a tu backend aquí para obtener los datos de la página anterior
//     });

//     // Manejar evento de clic en botón "Next Page"
//     nextBtn.addEventListener("click", function() {
//         // Lógica para cargar la siguiente página
//         selectedNumber++; // Incrementar selectedNumber
//         actualizarPaginacion(selectedNumber);
//         // Puedes llamar a tu backend aquí para obtener los datos de la siguiente página
//     });
// });
