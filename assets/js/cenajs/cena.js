// hola
function obtenerFechaActual() {
  const fecha = new Date();
  const anio = fecha.getFullYear();
  const mes = String(fecha.getMonth() + 1).padStart(2, "0"); // Los meses se indexan desde 0, así que sumamos 1 y formateamos con dos dígitos.
  const dia = String(fecha.getDate()).padStart(2, "0"); // Formateamos el día con dos dígitos.

  return `${anio}-${mes}-${dia}`;
}


//se obtiene varibale por url
const urlParams = new URLSearchParams(window.location.search);
const id_facturaG = urlParams.get('id_factura');

// formularios
var jsFormProductos = document.getElementById("Form_Productos");
var jsFormClientes = document.getElementById("Form_Clientes_Cena");
var jsFormEditarProductos = document.getElementById("Editar_Form_Productos");
var jsFormEditarCliente = document.getElementById("Editar_Form_Cliente");
var jsFormRegistrarFactura = document.getElementById("RegistrarFactura");
var jsFormResgistrar_Form_Abono=document.getElementById("Resgistrar_Form_Abono");

// campos
var jsProducto = document.querySelector("#producto");
var jsFechaInicialInformePeriodo = document.querySelector("#FechaInicialInformePeriodo");
var jsFechaFinalInformePeriodo = document.querySelector("#FechaFinalInformePeriodo");
var jsFechaDeInformeProducto = document.querySelector("#FechaDeInformeProducto");
var jsFechaInformeGeneral = document.querySelector("#FechaDeInforme");
var jsProducto_precio = document.querySelector("#producto_precio");
var jsEditarProducto = document.querySelector("#EditarProducto");
var jsEditarProducto_precio = document.querySelector("#EditarProductoPrecio");
var jsid_producto = document.querySelector("#id_producto");
var jsBuscarProducto = document.querySelector("#Buscarproducto");
var jsBuscarInventario = document.querySelector("#BuscarInventario");
var jsBuscarCliente = document.querySelector("#BuscarCliente");
var jsClienteNombre = document.querySelector("#cliente_nombre");
var jsClienteTelefono = document.querySelector("#cliente_telefono");
var jsClienteCedula = document.querySelector("#cliente_cedula");
var jsid_cliente = document.querySelector("#id_cliente");
var jsEditarCliente_Nombre = document.querySelector("#EditarCliente_Nombre");
var jsEditarCliente_Telefono = document.querySelector("#EditarCliente_Telefono");
var jsEditarCliente_Cedula = document.querySelector("#EditarCliente_Cedula");
var jsSelectListadoProductos = document.querySelector("#ListadoProductosFactura");
var jsTotalApagarFactura = document.querySelector("#TotalApagarFactura");
var jsSaldoPendienteFactura = document.querySelector("#SaldoPendienteFactura");
var jsRecibidoFactura = document.querySelector("#RecibidoFactura");
var jsAdevolverFactura = document.querySelector("#AdevolverFactura");
var jsAbonoFactura = document.querySelector("#AbonoFactura");
var jsListadoClientesFactura = document.querySelector("#ListadoClientesFactura");
var jsListadoClientesHistorialFactura = document.querySelector("#ListadoClientesHistorialFactura");
var jsEstadoFactura = document.querySelector("#EstadoFactura");
var jsFechaFacturaHistorial = document.querySelector("#FechaFacturaHistorial");
var jsNombreClienteFactura = document.querySelector("#nombre_cliente_factura");
var jsFechaFactura = document.querySelector("#fecha_factura");
var jsVertotal_factura = document.querySelector("#total_factura");
var jsVerabono_factura = document.querySelector("#abono_factura");
var jsVersaldo_pendiente = document.querySelector("#saldo_pendiente");
var jsVercambio = document.querySelector("#cambio");
var jsBuscarFactura = document.querySelector("#BuscarFactura");
var jsSaldoPendienteAbono=document.querySelector("#SaldoPendienteF");
var jsValorAAbonarF=document.querySelector("#ValorAAbonarF");
var jsid_facturaF=document.querySelector("#id_facturaF");
var jsvaloAbonoViejoF=document.querySelector("#valoAbonoViejoF");
//campos factura cena
var TotalFacturaCena= document.querySelector("#TotalFacturaCena");
var CambioFacturaCena= document.querySelector("#CambioFacturaCena");
var AbonoFacturaCena= document.querySelector("#AbonoFacturaCena");
var SaldoPendienteFacturaCena= document.querySelector("#SaldoPendienteFacturaCena");


// tablas

var jsTablaInformeGeneralPorMes= document.querySelector("#TablaInformeGeneralPorMes");
var jsTablaProducto = document.querySelector("#TablaProductos");
var jsTablaInformeProducto = document.querySelector("#TablaInformeProducto");
var jsTablaInformeGeneral= document.querySelector("#TablaInformeGeneral");
var jsTablaInformeGeneralPorFecha= document.querySelector("#TablaInformeGeneralPorFecha");
var jsTablaCliente = document.querySelector("#TablaClientes");
var jsTablaFactura = document.querySelector("#TablaFactura");
var jsllenarTablaVerFactura = document.querySelector("#LLenar_Productos_Factura");
var jsTablaHistorialFactura = document.querySelector("#TablaHistorialFactura");
var jsTablaFacturaCena= document.querySelector("#TablaFacturaCena");
var jsTablaInventario = document.querySelector("#TablaInventario");

// modales
var modalEditarProducto = document.getElementById("ModalEditarProducto");
var modalEditarCliente = document.getElementById("ModalEditarCliente");
var modalRegistrarFactura = document.getElementById("ModalRegistarFactura");
var modalRegistrarAbono=document.getElementById("ModalRegistrarAbono");

if (modalEditarProducto) {
  var jsModalEditarProducto = new bootstrap.Modal(modalEditarProducto, {
    keyboard: false,
  });
}
if (modalEditarCliente) {
  var jsModalEditarCliente = new bootstrap.Modal(modalEditarCliente, {
    keyboard: false,
  });
}

if (modalRegistrarFactura) {
  var jsModalRegistrarFactura= new bootstrap.Modal(modalRegistrarFactura, {
    keyboard: false,
  });
}


if (modalRegistrarAbono) {
  var jsModalRegistrarAbono= new bootstrap.Modal(modalRegistrarAbono, {
    keyboard: false,
  });
}

// botones
var jsBotonBuscarInformeGeneralPorMes = document.querySelector(".btnBuscarInformeGeneralPorMes");
var jsBotonBuscarProducto = document.querySelector(".btnBuscarProducto");
var jsBotonBuscarInformeProducto = document.querySelector(".btnBuscarInformeProducto");
var jsBotonLimpiarInventario = document.querySelector(".btnLimpiarInventario");
var jsBotonBuscarInformeGeneral = document.querySelector(".btnBuscarInformeGeneral");
var jsBotonBuscarInventario = document.querySelector(".btnBuscarInventario");
var jsBotonBuscarCliente = document.querySelector(".btnBuscarCliente");
var jsbtnAgregarAFactura = document.querySelector(".btnAgregarAFactura");
var jsbtnRegistrarFactura = document.querySelector(".btnRegistrarFactura");
var jsBotonBuscarFactura = document.querySelector(".btnBuscarFactura");
var BtnCalcularFacturaCena = document.querySelector(".btnCalcular");
var btnRegistrarFacturaCena = document.querySelector(".btnRegistrarFacturaCena");
var btnLimpiar = document.querySelector(".btnLimpiar");
var btnLimpiarHistorialFactura = document.querySelector(".btnLimpiarHistorialFactura");
var jsBotonGuardarInventario = document.querySelector(".btnGuardarInventario");
var opcion = "";

// funcion para convertir texto en mayusculas
if (jsProducto) {
  jsProducto.addEventListener("keyup", function () {
    this.value = this.value.toUpperCase();
  });
}
// funcion para convertir texto en mayusculas
if (jsEditarProducto) {
  jsEditarProducto.addEventListener("keyup", function () {
    this.value = this.value.toUpperCase();
  });
}
// funcion para convertir texto en mayusculas
if (jsClienteNombre) {
  jsClienteNombre.addEventListener("keyup", function () {
    this.value = this.value.toUpperCase();
  });
}

if (jsEditarCliente_Nombre) {
  jsEditarCliente_Nombre.addEventListener("keyup", function () {
    this.value = this.value.toUpperCase();
  });
}

//tabla de inventario
function cargarTablaInventario() {
  opcion = "ListarInventario";
  var data = "opcion=" + opcion;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "app/controlador/CenaControlador.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var listadoInventario = JSON.parse(this.responseText);
      var listadoInventario_buscar = listadoInventario;
      var tablaHtmlInventario = "";
      var currentPage = 1; // Página actual
      var rowsPerPage = 8; // Número de filas por página
      var totalPages = Math.ceil(listadoInventario.length / rowsPerPage); // Total de páginas
      var startIndex = 0; // Índice de inicio de la página actual
      var endIndex = rowsPerPage; // Índice de fin de la página actual
      var prevBtn = document.getElementById("prev-page");
      var nextBtn = document.getElementById("next-page");
      var currentPageElem = document.getElementById("current-page");

      var inputValues = {};
      // Función para mostrar las filas correspondientes a la página actual
      function showRows() {
        tablaHtmlInventario = "";
        for (var i = startIndex; i < endIndex; i++) {
          if (listadoInventario[i]) {
            var inventario = listadoInventario[i];
            // Obtén el valor del campo de entrada del objeto, si existe
            var inputValue = inputValues[inventario.id_producto] || inventario.cantidad;
            var fila = `
              <tr>
                <td>${i + 1}</td>
                <td>${inventario.nombre_producto}</td>
                <td><input type="number" value="${inputValue}" id="${inventario.id_producto}" name="${inventario.id_producto}" class="form-control"></td>
              </tr>
            `;
            tablaHtmlInventario += fila;
          }
        }
        jsTablaInventario.innerHTML = tablaHtmlInventario;
        currentPageElem.textContent = currentPage;
      }
      // Función para actualizar los índices de inicio y fin de la página actual
      function updateIndexes() {
        startIndex = (currentPage - 1) * rowsPerPage;
        endIndex = startIndex + rowsPerPage;
        if (endIndex > listadoInventario.length) {
          endIndex = listadoInventario.length;
        }
      }

      // Mostrar las filas de la primera página
      showRows();

      // Mostrar el paginador
      prevBtn.addEventListener("click", function () {
        if (currentPage > 1) {
          currentPage--;
          updateIndexes();
          showRows();
        }
      });

      nextBtn.addEventListener("click", function () {
        if (currentPage < totalPages) {
          currentPage++;
          updateIndexes();
          showRows();
        }
      });

      jsTablaInventario.addEventListener("input", function (event) {
        if (event.target.tagName === "INPUT") {
          var productId = event.target.id;
          var productValue = event.target.value;
          inputValues[productId] = productValue;
        }
      });
      console.log(inputValues);
      if(jsBotonGuardarInventario){
        jsBotonGuardarInventario.addEventListener("click", function () {
          console.log(inputValues);
          opcion = "ActualizarInventario";
          let inventario_productos_json = JSON.stringify(inputValues);
          var data = "opcion=" + opcion + "&inventario_productos=" + inventario_productos_json;
          var xhr = new XMLHttpRequest();
          xhr.open("POST", "app/controlador/CenaControlador.php", true);
          xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
              if (xhr.response == 1) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Datos Guardados",
                  showConfirmButton: false,
                  timer: 1000,
                });
              }
            }
          };
          xhr.send(data);
        });
      }


      jsBotonBuscarInventario.addEventListener("click", function () {
        var searchTerm = jsBuscarInventario.value.trim().toLowerCase(); // Obtener término de búsqueda y eliminar espacios en blanco
        if (searchTerm !== "") {
          // Filtrar los datos de la tabla por el término de búsqueda
          var filteredData = listadoInventario.filter(function (producto) {
            return (
              producto.nombre_producto.toLowerCase().includes(searchTerm)
            );
          });
          currentPage = 1;
          totalPages = Math.ceil(filteredData.length / rowsPerPage);
          startIndex = 0;
          endIndex = rowsPerPage;
          listadoInventario = filteredData;
          showRows();
        } else {
          listadoInventario = listadoInventario_buscar;
          currentPage = 1;
          totalPages = Math.ceil(listadoInventario.length / rowsPerPage);
          startIndex = 0;
          endIndex = rowsPerPage;
          showRows();
        }
      });
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      alert(
        "Error en la solicitud: " +
          xhr.status +
          " " +
          xhr.statusText +
          " " +
          xhr.response
      );
    }
  };
  xhr.send(data);
}

// funcion para cargar tabla de productos
function cargarTablaProducto() {
  opcion = "ListarProductos";
  var data = "opcion=" + opcion;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "app/controlador/CenaControlador.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var listadoProducto = JSON.parse(this.responseText);
      var listadoProducto_buscar = listadoProducto;
      var tablaHtmlProducto = "";
      var currentPage = 1; // Página actual
      var rowsPerPage = 8; // Número de filas por página
      var totalPages = Math.ceil(listadoProducto.length / rowsPerPage); // Total de páginas
      var startIndex = 0; // Índice de inicio de la página actual
      var endIndex = rowsPerPage; // Índice de fin de la página actual
      var prevBtn = document.getElementById("prev-page");
      var nextBtn = document.getElementById("next-page");
      var currentPageElem = document.getElementById("current-page");

      // Función para mostrar las filas correspondientes a la página actual
      function showRows() {
        tablaHtmlProducto = "";
        for (var i = startIndex; i < endIndex; i++) {
          if (listadoProducto[i]) {
            var producto = listadoProducto[i];
            var fila = `
            <tr>
              <td>${i + 1}</td>
              <td>${producto.nombre_producto}</td>
              <td>${producto.producto_precio}</td>
              <td><button class="btn btn-secondary btnEditarProducto" data-bs-toggle="modal" data-bs-target="#ModalEditarProducto" data-id="${
                producto.id_producto
              }"><i class="bi bi-pencil btniEditarProducto" data-id="${
              producto.id_producto
            }"></i></button>&nbsp;&nbsp;<button class="btn btn-danger btnEliminarProducto" data-id="${
              producto.id_producto
            }"><i class="bi bi-trash btnEliminarProducto" data-id="${
              producto.id_producto
            }"></i></button></td>
            </tr>
          `;
            tablaHtmlProducto += fila;
          }
        }
        jsTablaProducto.innerHTML = tablaHtmlProducto;
        currentPageElem.textContent = currentPage;
      }

      // Función para actualizar los índices de inicio y fin de la página actual
      function updateIndexes() {
        startIndex = (currentPage - 1) * rowsPerPage;
        endIndex = startIndex + rowsPerPage;
        if (endIndex > listadoProducto.length) {
          endIndex = listadoProducto.length;
        }
      }

      // Mostrar las filas de la primera página
      showRows();

      // Mostrar el paginador
      prevBtn.addEventListener("click", function () {
        if (currentPage > 1) {
          currentPage--;
          updateIndexes();
          showRows();
        }
      });

      nextBtn.addEventListener("click", function () {
        if (currentPage < totalPages) {
          currentPage++;
          updateIndexes();
          showRows();
        }
      });

      jsBotonBuscarProducto.addEventListener("click", function () {
        var searchTerm = jsBuscarProducto.value.trim().toLowerCase(); // Obtener término de búsqueda y eliminar espacios en blanco
        if (searchTerm !== "") {
          // Filtrar los datos de la tabla por el término de búsqueda
          var filteredData = listadoProducto.filter(function (producto) {
            return (
              producto.nombre_producto.toLowerCase().includes(searchTerm) ||
              producto.producto_precio
                .toString()
                .toLowerCase()
                .includes(searchTerm)
            );
          });
          currentPage = 1;
          totalPages = Math.ceil(filteredData.length / rowsPerPage);
          startIndex = 0;
          endIndex = rowsPerPage;
          listadoProducto = filteredData;
          showRows();
        } else {
          listadoProducto = listadoProducto_buscar;
          currentPage = 1;
          totalPages = Math.ceil(listadoProducto.length / rowsPerPage);
          startIndex = 0;
          endIndex = rowsPerPage;
          showRows();
        }
      });
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      alert(
        "Error en la solicitud: " +
          xhr.status +
          " " +
          xhr.statusText +
          " " +
          xhr.response
      );
    }
  };
  xhr.send(data);
}

// funcion para cargar tabla de clientes
function cargarTablaClientes() {
  opcion = "ListarCliente";
  var data = "opcion=" + opcion;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "app/controlador/CenaControlador.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var listadoCliente = JSON.parse(this.responseText);
      var listadoCliente_buscar = listadoCliente;
      var tablaHtmlCliente = "";
      var currentPage = 1; // Página actual
      var rowsPerPage = 8; // Número de filas por página
      var totalPages = Math.ceil(listadoCliente.length / rowsPerPage); // Total de páginas
      var startIndex = 0; // Índice de inicio de la página actual
      var endIndex = rowsPerPage; // Índice de fin de la página actual
      var prevBtn = document.getElementById("prev-page");
      var nextBtn = document.getElementById("next-page");
      var currentPageElem = document.getElementById("current-page");

      // Función para mostrar las filas correspondientes a la página actual
      function showRows() {
        tablaHtmlCliente = "";
        for (var i = startIndex; i < endIndex; i++) {
          if (listadoCliente[i]) {
            var cliente = listadoCliente[i];
            var fila = `
            <tr>
              <td>${i + 1}</td>
              <td>${cliente.nombre_cliente}</td>
              <td>${cliente.cedula_cliente}</td>
              <td>${cliente.telefono_cliente}</td>
              <td><button class="btn btn-secondary btnEditarCliente" data-bs-toggle="modal" data-bs-target="#ModalEditarCliente" data-id="${
                cliente.id_cliente
              }"><i class="bi bi-pencil btniEditarCliente" data-id="${
              cliente.id_cliente
            }"></i></button>&nbsp;&nbsp;<button class="btn btn-danger btnEliminarCliente" data-id="${
              cliente.id_cliente
            }"><i class="bi bi-trash btnEliminarCliente" data-id="${
              cliente.id_cliente
            }"></i></button></td>
            </tr>
          `;
            tablaHtmlCliente += fila;
          }
        }
        jsTablaCliente.innerHTML = tablaHtmlCliente;
        currentPageElem.textContent = currentPage;
      }

      // Función para actualizar los índices de inicio y fin de la página actual
      function updateIndexes() {
        startIndex = (currentPage - 1) * rowsPerPage;
        endIndex = startIndex + rowsPerPage;
        if (endIndex > listadoCliente.length) {
          endIndex = listadoCliente.length;
        }
      }

      // Mostrar las filas de la primera página
      showRows();

      // Mostrar el paginador
      prevBtn.addEventListener("click", function () {
        if (currentPage > 1) {
          currentPage--;
          updateIndexes();
          showRows();
        }
      });

      nextBtn.addEventListener("click", function () {
        if (currentPage < totalPages) {
          currentPage++;
          updateIndexes();
          showRows();
        }
      });

      jsBotonBuscarCliente.addEventListener("click", function () {
        var searchTerm = jsBuscarCliente.value.trim().toLowerCase();
        if (searchTerm !== "") {
          var filteredData = listadoCliente.filter(function (cliente) {
            return (
              cliente.nombre_cliente.toLowerCase().includes(searchTerm) ||
              cliente.telefono_cliente
                .toString()
                .toLowerCase()
                .includes(searchTerm)
            );
          });
          currentPage = 1;
          totalPages = Math.ceil(filteredData.length / rowsPerPage);
          startIndex = 0;
          endIndex = rowsPerPage;
          listadoCliente = filteredData;
          showRows();
        } else {
          listadoCliente = listadoCliente_buscar;
          currentPage = 1;
          totalPages = Math.ceil(listadoCliente.length / rowsPerPage);
          startIndex = 0;
          endIndex = rowsPerPage;
          showRows();
        }
      });
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      alert(
        "Error en la solicitud: " +
          xhr.status +
          " " +
          xhr.statusText +
          " " +
          xhr.response
      );
    }
  };
  xhr.send(data);
}



if (jsTablaInventario) {

  document.addEventListener("DOMContentLoaded", cargarTablaInventario);
}




// evento para detectar click en los botones de la pagina de prodcutos
if (jsTablaProducto) {
  jsTablaProducto.addEventListener("click", function (event) {
    // mostrar valores de producto en modal
    if (event.target.classList.contains("btnEditarProducto")) {
      let id_producto = event.target.getAttribute("data-id");
      let fila = event.target.parentNode.parentNode;
      let nombre_producto = fila.cells[1].textContent;
      let producto_precio = fila.cells[2].textContent;
      jsEditarProducto.value = nombre_producto;
      jsEditarProducto_precio.value = producto_precio;
      jsid_producto.value = id_producto;
    }
    // mostrar valores de producto en modal
    else if (event.target.classList.contains("btniEditarProducto")) {
      let id_producto = event.target.getAttribute("data-id");
      let fila = event.target.parentNode.parentNode.parentNode;
      let nombre_producto = fila.cells[1].textContent;
      let producto_precio = fila.cells[2].textContent;
      jsEditarProducto.value = nombre_producto;
      jsEditarProducto_precio.value = producto_precio;
      jsid_producto.value = id_producto;
    }
    // eliminar un producto
    else if (event.target.classList.contains("btnEliminarProducto")) {
      let id_producto = event.target.getAttribute("data-id");
      opcion = "EliminarProducto";
      var data = "id_producto=" + id_producto + "&opcion=" + opcion;
      Swal.fire({
        title: "Estas Seguro De Eliminar",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "SI",
      }).then((result) => {
        if (result.isConfirmed) {
          var xhr = new XMLHttpRequest();
          xhr.open("POST", "app/controlador/CenaControlador.php", true);
          xhr.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
          );

          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
              if (xhr.response == 1) {
                Swal.fire({
                  icon: "success",
                  title: "Producto Eliminado",
                  showConfirmButton: false,
                  timer: 1300,
                });
                cargarTablaProducto();
              } else {
                alert("error");
              }
            } else if (xhr.readyState === 4 && xhr.status !== 200) {
              alert(
                "Error en la solicitud: " +
                  xhr.status +
                  " " +
                  xhr.statusText +
                  " " +
                  xhr.response
              );
            }
          };
          xhr.send(data);
        }
      });
    }
  });
  // cargar tabla de productos al cargar la pagina
  document.addEventListener("DOMContentLoaded", cargarTablaProducto);
}
// evento para detectar click en los botones de la pagina de clientes
if (jsTablaCliente) {
  jsTablaCliente.addEventListener("click", function (event) {
    // mostrar valores de cliente en modal
    if (event.target.classList.contains("btnEditarCliente")) {
      let id_cliente = event.target.getAttribute("data-id");
      let fila = event.target.parentNode.parentNode;
      let nombre_cliente = fila.cells[1].textContent;
      let cedula_cliente = fila.cells[2].textContent;
      let telefono_cliente = fila.cells[3].textContent;
      jsEditarCliente_Nombre.value = nombre_cliente;
      jsEditarCliente_Cedula.value = cedula_cliente;
      jsEditarCliente_Telefono.value = telefono_cliente;
      jsid_cliente.value = id_cliente;
    }
    // mostrar valores de cliente en modal
    else if (event.target.classList.contains("btniEditarCliente")) {
      let id_cliente = event.target.getAttribute("data-id");
      let fila = event.target.parentNode.parentNode.parentNode;
      let nombre_cliente = fila.cells[1].textContent;
      let cedula_cliente = fila.cells[2].textContent;
      let telefono_cliente = fila.cells[3].textContent;
      jsEditarCliente_Nombre.value = nombre_cliente;
      jsEditarCliente_Cedula.value = cedula_cliente;
      jsEditarCliente_Telefono.value = telefono_cliente;
      jsid_cliente.value = id_cliente;
    }
    // eliminar un cliente
    else if (event.target.classList.contains("btnEliminarCliente")) {
      let id_cliente = event.target.getAttribute("data-id");
      opcion = "EliminarCliente";
      var data = "id_cliente=" + id_cliente + "&opcion=" + opcion;
      Swal.fire({
        title: "Estas Seguro De Eliminar",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "SI",
      }).then((result) => {
        if (result.isConfirmed) {
          var xhr = new XMLHttpRequest();
          xhr.open("POST", "app/controlador/CenaControlador.php", true);
          xhr.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
          );

          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
              if (xhr.response == 1) {
                Swal.fire({
                  icon: "success",
                  title: "Cliente Eliminado",
                  showConfirmButton: false,
                  timer: 1000,
                });
                cargarTablaClientes();
              } else {
                alert("error");
              }
            } else if (xhr.readyState === 4 && xhr.status !== 200) {
              alert(
                "Error en la solicitud: " +
                  xhr.status +
                  " " +
                  xhr.statusText +
                  " " +
                  xhr.response
              );
            }
          };
          xhr.send(data);
        }
      });
    }
  });
  document.addEventListener("DOMContentLoaded", cargarTablaClientes);
}

// registrar producto
if (jsFormProductos) {
  jsFormProductos.addEventListener("submit", function (event) {
    event.preventDefault();
    let producto = jsProducto.value;
    let producto_precio = jsProducto_precio.value;
    opcion = "RegistrarProducto";
    var data =
      "producto=" +
      producto +
      "&producto_precio=" +
      producto_precio +
      "&opcion=" +
      opcion;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "app/controlador/CenaControlador.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        if (xhr.response == 1) {
          cargarTablaProducto();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Datos Guardados",
            showConfirmButton: false,
            timer: 1000,
          });
        } else {
          Swal.fire({
            icon: "warning",
            title: "Ya exitse el producto",
            showConfirmButton: false,
            timer: 1000,
          });
        }
        jsFormProductos.reset();
      } else if (xhr.readyState === 4 && xhr.status !== 200) {
        alert(
          "Error en la solicitud: " +
            xhr.status +
            " " +
            xhr.statusText +
            " " +
            xhr.response
        );
      }
    };
    xhr.send(data);
  });
}
// editar un producto
if (jsFormEditarProductos) {
  jsFormEditarProductos.addEventListener("submit", function (event) {
    event.preventDefault();
    opcion = "ActualizarProducto";
    let EditarProducto = jsEditarProducto.value;
    let id_producto = jsid_producto.value;
    let EditarProductoPrecio = jsEditarProducto_precio.value;
    var data =
      "editar_producto=" +
      EditarProducto +
      "&editar_producto_precio=" +
      EditarProductoPrecio +
      "&id_producto=" +
      id_producto +
      "&opcion=" +
      opcion;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "app/controlador/CenaControlador.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        if (xhr.response == 1) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Datos Actualizados",
            showConfirmButton: false,
            timer: 1500,
          });
          cargarTablaProducto();
          jsModalEditarProducto.hide();
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "La cedula Ya esta Registrada ",
            showConfirmButton: false,
            timer: 1600,
          });
        }
      } else if (xhr.readyState === 4 && xhr.status !== 200) {
        alert(
          "Error en la solicitud: " +
            xhr.status +
            " " +
            xhr.statusText +
            " " +
            xhr.response
        );
      }
    };
    xhr.send(data);
  });
}

//registrar cliente
if (jsFormClientes) {
  jsFormClientes.addEventListener("submit", function (event) {
    event.preventDefault();
    let nombre_cliente = jsClienteNombre.value;
    let cedula_cliente = jsClienteCedula.value;
    let telefono_cliente = jsClienteTelefono.value;
    opcion = "RegistrarCliente";
    var data =
      "cliente_nombre=" +
      nombre_cliente +
      "&cliente_cedula=" +
      cedula_cliente +
      "&cliente_telefono=" +
      telefono_cliente +
      "&opcion=" +
      opcion;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "app/controlador/CenaControlador.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        if (xhr.response == 1) {
          cargarTablaClientes();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Datos Guardados",
            showConfirmButton: false,
            timer: 1000,
          });
          jsFormClientes.reset();
        } else {
          Swal.fire({
            icon: "warning",
            title: "Esta cedula Ya existe",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      } else if (xhr.readyState === 4 && xhr.status !== 200) {
        alert(
          "Error en la solicitud: " +
            xhr.status +
            " " +
            xhr.statusText +
            " " +
            xhr.response
        );
      }
    };
    xhr.send(data);
  });
}

//actualizar cliente
if (jsFormEditarCliente) {
  jsFormEditarCliente.addEventListener("submit", function (event) {
    event.preventDefault();
    opcion = "ActualizarCliente";
    let EditarCliente_nombre = jsEditarCliente_Nombre.value;
    let EditarCliente_cedula = jsEditarCliente_Cedula.value;
    let EditarCliente_telefono = jsEditarCliente_Telefono.value;
    let id_cliente = jsid_cliente.value;
    var data =
      "editar_cliente_nombre=" +
      EditarCliente_nombre +
      "&editar_cliente_cedula=" +
      EditarCliente_cedula +
      "&editar_cliente_telefono=" +
      EditarCliente_telefono +
      "&id_cliente=" +
      id_cliente +
      "&opcion=" +
      opcion;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "app/controlador/CenaControlador.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        if (xhr.response == 1) {
          jsModalEditarCliente.hide();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Datos Actualizados",
            showConfirmButton: false,
            timer: 1000,
          });
          cargarTablaClientes();
        } else {
          alert(
            "Error en la solicitud: " +
              xhr.status +
              " " +
              xhr.statusText +
              " " +
              xhr.response
          );
        }
      } else if (xhr.readyState === 4 && xhr.status !== 200) {
        alert(
          "Error en la solicitud: " +
            xhr.status +
            " " +
            xhr.statusText +
            " " +
            xhr.response
        );
      }
    };
    xhr.send(data);
  });
}

//array para guardar los precios
var precios=[];

//funcion para llenar el select de productos en la pagina de registrar dactura
function cargarSelectProductos() {
  opcion = "ListarProductos";
  var data = "opcion=" + opcion;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "app/controlador/CenaControlador.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var precio="";
      var listadoProducto = JSON.parse(this.responseText);
      var options = "<option value='null'> --seleccione--</option>";
      for (var i = 0; i < listadoProducto.length; i++) {
        precio=listadoProducto[i].producto_precio;
        options += "<option value='" + listadoProducto[i].id_producto+ "'>" + listadoProducto[i].nombre_producto + "</option>";
        precios[i]={
          "id_producto":listadoProducto[i].id_producto,
          "precio":precio
         };
      }
      jsSelectListadoProductos.innerHTML = options;
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      alert(
        "Error en la solicitud: " +
          xhr.status +
          " " +
          xhr.statusText +
          " " +
          xhr.response
      );
    }
  };
  xhr.send(data);
}

//se llena select de priductos al cargar la pagina
if (jsSelectListadoProductos) {
  document.addEventListener("DOMContentLoaded", cargarSelectProductos);
}

// funcion para buscar el precio por el id del producto
function buscarPrecioPorId(idProducto) {
  var precioEncontrado = precios.find(function(elemento) {
    return elemento.id_producto == idProducto;
  });
  if (precioEncontrado) {
    return precioEncontrado.precio;
  } else {
    return null;
  }
}

var productosAgregadosArray = [];

//funcion para agregar un producto a la tabla de factura
if (jsbtnAgregarAFactura) {
  jsbtnAgregarAFactura.addEventListener("click", function () {
    var id_producto = jsSelectListadoProductos.value;
    var precio_final = buscarPrecioPorId(id_producto);
    if (id_producto === 'null') {
      Swal.fire({
        icon: "warning",
        title: "No ha seleccionado un Producto",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }
    var ProductoSeleccionado = jsSelectListadoProductos.options[jsSelectListadoProductos.selectedIndex];
    var ProductoSeleccionadoTexto = ProductoSeleccionado.textContent;
    if (productosAgregadosArray.includes(ProductoSeleccionadoTexto)) {
      Swal.fire({
        icon: "warning",
        title: "El producto ya ha sido agregado",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }
    productosAgregadosArray.push(ProductoSeleccionadoTexto);
    var tablaFactura = document.querySelector("#TablaFactura");
    var numFilas = tablaFactura.rows.length;
    var fila = tablaFactura.insertRow();
    var celda = fila.insertCell();
    celda.innerHTML = "<input type='text' value=" + id_producto + " name=campo" + numFilas + "_0 hidden>" + ProductoSeleccionadoTexto;
    for (var i = 1; i <= 3; i++) {
      celda = fila.insertCell();
      if (i === 2) { // agregar precio en la tercera celda
        var inputPrecio = document.createElement("input");
        inputPrecio.type = "number";
        inputPrecio.classList.add("form-control");
        inputPrecio.name = "campo" + numFilas + "_" + i;
        inputPrecio.value = precio_final; // agregar el valor del precio en el campo
        inputPrecio.readOnly = true;
        celda.appendChild(inputPrecio);
      } else { // agregar campos de texto vacíos en las otras celdas
        var input = document.createElement("input");
        input.type = "number";
        input.classList.add("form-control");
        input.classList.add("bg-light");
        input.name = "campo" + numFilas + "_" + i;
        if (i === 1) {
          input.value = "1";
        }
        else if (i === 3) {
          input.value = precio_final;
          input.readOnly = true;
        }
        celda.appendChild(input);
        input.addEventListener("change", function () {
          var precioProducto = parseFloat(this.parentNode.nextSibling.firstChild.value);
          var campoTotal = this.parentNode.nextSibling.nextSibling.firstChild;
          var Cantidad = this.value;
          var TotalAPagar=parseFloat(jsTotalApagarFactura.value);
          var CantidadNum=parseFloat(Cantidad);
          if(Cantidad.length===0 && TotalAPagar>0)
          {
            campoTotal.value=0;
          }
          else if(Cantidad!="")
          {
            var multiplicacion =CantidadNum * parseFloat(precioProducto);
            campoTotal.value=multiplicacion;
          }
        });
      }
    }
    celda = fila.insertCell();
    var botonEliminar = document.createElement("button");
    botonEliminar.innerHTML = " <i class='bi bi-trash'></i>";
    botonEliminar.classList.add("btn", "btn-danger");


    botonEliminar.addEventListener("click", function () {

      var filaAEliminar = this.closest("tr");
      var numFilaAEliminar = filaAEliminar.rowIndex;
      var index = productosAgregadosArray.indexOf(ProductoSeleccionadoTexto);
      if (index > -1) {
        productosAgregadosArray.splice(index, 1);
      }
      filaAEliminar.parentNode.removeChild(filaAEliminar);
      // Actualizar los nombres de los campos de las filas posteriores
      var filas = tablaFactura.rows;
      for (var i = 0; i < filas.length; i++) {
        var campos = filas[i].querySelectorAll('input');
        for (var j = 0; j < campos.length; j++) {
          var campo = campos[j];
          var nombre = campo.name;
          var nuevoNombre = "campo" + i + "_" + j;
          campo.name = nuevoNombre;
        }
      }
    });
    celda.appendChild(botonEliminar);
  });
}

// funcion para abrir la modal de registrar factura
if (jsbtnRegistrarFactura) {
  jsbtnRegistrarFactura.addEventListener('click', function(){
    var filas = jsTablaFactura.rows;
    var camposCantidad = document.querySelectorAll('input[name$="_1"]');
    for (var i = 0; i < camposCantidad.length; i++) {
       var campo=parseFloat(camposCantidad[i].value);
       if (!campo || campo<= 0) {
        Swal.fire({
          icon: "warning",
          title: "La Cantidad no puede ser igual a 0",
          showConfirmButton: false,
          timer: 1200,
        });
        return;
      }
    }
    jsModalRegistrarFactura.show();
    var total = 0;
    for (var i = 0; i < filas.length; i++) {
      var campoTotal = filas[i].querySelector('input[name^="campo"][name$="_3"]');
      if (campoTotal) {
        total += parseFloat(campoTotal.value);
      }
    }
     jsTotalApagarFactura.value=total;
  });
}

//funcion para hacer las operaciones matematicas de la factura
if(jsRecibidoFactura)
{
  jsRecibidoFactura.addEventListener("input", function () {
    var recibido_value = this.value;
    var recibido = parseInt(this.value);
    var TotalApagar = parseInt(jsTotalApagarFactura.value);
    if (recibido_value.length === 0) {
      jsAdevolverFactura.value = 0;
      jsSaldoPendienteFactura.value = 0;
      jsAbonoFactura.value = 0;
    } else if (recibido >= TotalApagar) {
      jsSaldoPendienteFactura.value = 0;
      jsAdevolverFactura.value = recibido - TotalApagar;
      jsAbonoFactura.value = TotalApagar;
    } else {
      jsSaldoPendienteFactura.value = TotalApagar - recibido;
      jsAbonoFactura.value = recibido;
    }
  });
}

//funcion para hacer las operaciones matematicas de la factura
if(jsAbonoFactura)
{
  jsAbonoFactura.addEventListener("input", function () {
    var abono_value = this.value;
    var abono = parseInt(this.value);
    var TotalApagar = parseInt(jsTotalApagarFactura.value);
    if (abono_value.length === 0) {
      jsSaldoPendienteFactura.value = 0;
    } else if (abono >= TotalApagar) {
      jsSaldoPendienteFactura.value = 0;
      jsAdevolverFactura.value=parseInt(jsRecibidoFactura.value)-TotalApagar;
    } else {
      jsAdevolverFactura.value = parseInt(jsRecibidoFactura.value) - abono;
      jsSaldoPendienteFactura.value = TotalApagar- abono;
    }
  });
}

//funcion para cargar el select de los clientes en la modal de facturas
function cargarSelectClientes(select) {
  opcion = "ListarCliente";
  var data = "opcion=" + opcion;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "app/controlador/CenaControlador.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var listadoCliente = JSON.parse(this.responseText);
      var options = "<option value='null'> CLIENTE</option>";
      for (var i = 0; i < listadoCliente.length; i++) {
        options += "<option value='" + listadoCliente[i].id_cliente+ "'>" + listadoCliente[i].nombre_cliente + "</option>";
      }
      if(select==1) {
        jsListadoClientesFactura.innerHTML = options;
      }
      else if(select==2){
        jsListadoClientesHistorialFactura.innerHTML = options;
      }
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      alert(
        "Error en la solicitud: " +
          xhr.status +
          " " +
          xhr.statusText +
          " " +
          xhr.response
      );
    }
  };
  xhr.send(data);
}

//funcion para cargar el select de los clientes en la modal de facturas
if (jsListadoClientesFactura ) {
  document.addEventListener("DOMContentLoaded", cargarSelectClientes(1));
}
else if(jsListadoClientesHistorialFactura){
  document.addEventListener("DOMContentLoaded", cargarSelectClientes(2));
}

//funcion para guaradar la factura y redirigir a ver factura
if (jsFormRegistrarFactura) {
  jsFormRegistrarFactura.addEventListener("submit", function (event) {
    event.preventDefault();
    opcion = "RegistrarFactura";
    let id_cliente = jsListadoClientesFactura.value;
    let TotalAPagar = jsTotalApagarFactura.value;
    let SaldoPendiente = jsSaldoPendienteFactura.value;
    let abono = jsAbonoFactura.value;
    let id_producto = 0;
    let cantidad = 0;
    let valor_unitario = 0;
    let total_producto = 0;
    let estado = "";
    if (SaldoPendiente == 0) {
      estado = "PAGADO";
    } else {
      estado = "PENDIENTE";
    }
    let factura_productos = [];

    if (id_cliente == "null") {
      Swal.fire({
        icon: "warning",
        title: "No has seleccionado un cliente",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }

    if (TotalAPagar == 0) {
      Swal.fire({
        icon: "warning",
        title: "Faltan datos Por llenar",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }

    for (let i = 0; i < jsTablaFactura.rows.length; i++) {
      let fila = [];
      for (let j = 0; j < jsTablaFactura.rows[i].cells.length - 1; j++) {
        let nombreCampo = "campo" + i + "_" + j;
        let valorCampo = parseInt(
          jsTablaFactura.rows[i].cells[j].querySelector(
            "input[name='" + nombreCampo + "']"
          ).value
        );
        if (j === 0) {
          id_producto = valorCampo;
        }
        if (j === 1) {
          cantidad = valorCampo;
        }
        if (j === 2) {
          valor_unitario = valorCampo;
        }
        if (j === 3) {
          total_producto = valorCampo;
        }
      }
      factura_productos[i] = {
        "id_producto": id_producto,
        "cantidad_producto" : cantidad,
        "valor_unitario": valor_unitario,
        "total_producto": total_producto,
      };
    }
    let factura_productos_json = JSON.stringify(factura_productos);
    var data =
      "id_cliente=" +
      id_cliente +
      "&total=" +
      TotalAPagar +
      "&saldo_pendiente=" +
      SaldoPendiente +
      "&abono=" +
      abono +
      "&factura_productos=" +
      encodeURIComponent(factura_productos_json) +
      "&opcion=" +
      opcion+"&estado="+estado;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "app/controlador/CenaControlador.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var id_factura = xhr.response;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Factura Registrada",
          showConfirmButton: false,
          timer: 1200,
        });
        jsFormRegistrarFactura.reset();
        setTimeout(function () {
          window.location.href = "/cena/VerFactura?id_factura=" + id_factura;
        }, 1400);
      } else if (xhr.readyState === 4 && xhr.status !== 200) {
        alert(
          "Error en la solicitud: " +
            xhr.status +
            " " +
            xhr.statusText +
            " " +
            xhr.response
        );
      }
    };
    xhr.send(data);
  });
}

// consultar Factura
function ConsultarFactura(id_facturaG) {
  opcion = "ConsultarFactura";
  var data = "id_factura=" + id_facturaG + "&opcion=" + opcion;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "app/controlador/CenaControlador.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var DatosFactura = JSON.parse(this.responseText);
      jsNombreClienteFactura.textContent=DatosFactura[0].nombre_cliente;
      jsFechaFactura.textContent=DatosFactura[0].fecha_creacion;
      jsVertotal_factura.textContent=parseFloat(DatosFactura[0].total).toLocaleString();
      jsVerabono_factura.textContent=parseFloat(DatosFactura[0].abono).toLocaleString();
      jsVersaldo_pendiente.textContent=parseFloat(DatosFactura[0].saldo_pendiente).toLocaleString();
      jsVercambio.textContent=parseFloat(DatosFactura[0].cambio).toLocaleString();
      for(var i = 0; i < DatosFactura.length; i++) {
        var nombre_producto = DatosFactura[i].nombre_producto;
        var cantidad = parseFloat(DatosFactura[i].cantidad);
        var total_producto = parseFloat(DatosFactura[i].total_producto);
        var precio = parseFloat(DatosFactura[i].precio);
        // Creamos una fila de la tabla y las celdas
        var fila = document.createElement("tr");
        var celdaCantidad = document.createElement("td");
        var celdaNombreProducto = document.createElement("td");
        var celdaTotal = document.createElement("td");
        var celdaPrecio = document.createElement("td");


        // Añadimos los valores a las celdas
        celdaCantidad.innerHTML ="&nbsp;&nbsp;"+cantidad.toLocaleString()+"-&nbsp;";
        celdaNombreProducto.innerHTML = nombre_producto+" - ";
        celdaPrecio.innerHTML = "&nbsp;"+precio.toLocaleString()+" - ";
        celdaTotal.innerHTML = "&nbsp;"+total_producto.toLocaleString()+"&nbsp;";

        celdaNombreProducto.style.fontSize="12px";
        celdaCantidad.style.fontSize="12px";
        celdaTotal.style.fontSize="12px";
        celdaPrecio.style.fontSize="12px";

        celdaNombreProducto.style.textAlign="center";
        celdaCantidad.style.textAlign="center";
        celdaTotal.style.textAlign="center";
        celdaPrecio.style.textAlign="center";
        // Agregamos las celdas a la fila
        fila.appendChild(celdaCantidad);
        fila.appendChild(celdaNombreProducto);
        fila.appendChild(celdaPrecio);
        fila.appendChild(celdaTotal);

        // Agregamos la fila a la tabla
        jsllenarTablaVerFactura.appendChild(fila);
      }

    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      alert(
        "Error en la solicitud: " +
          xhr.status +
          " " +
          xhr.statusText +
          " " +
          xhr.response
      );
    }
  };
  xhr.send(data);
}

// //llamado a consultar factura
if (id_facturaG) {
 ConsultarFactura(id_facturaG);
}

//cargar tabla historia factura
function cargarTablaHistorialFactura() {
  opcion = "ConsultarHistorialFactura";
  var data = "opcion=" + opcion;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "app/controlador/CenaControlador.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var listadoFactura = JSON.parse(this.responseText);
      var listadoFactura_buscar = listadoFactura;
      var tablaHtmlHFactura = "";
      var currentPage = 1; // Página actual
      var rowsPerPage = 8; // Número de filas por página
      var totalPages = Math.ceil(listadoFactura.length / rowsPerPage); // Total de páginas
      var startIndex = 0; // Índice de inicio de la página actual
      var endIndex = rowsPerPage; // Índice de fin de la página actual
      var prevBtn = document.getElementById("prev-page");
      var nextBtn = document.getElementById("next-page");
      var currentPageElem = document.getElementById("current-page");
      var estadoF="";
      // Función para mostrar las filas correspondientes a la página actual
      function showRows() {
        tablaHtmlHFactura = "";
        for (var i = startIndex; i < endIndex; i++) {
          if (listadoFactura[i]) {
            var facturaData = listadoFactura[i];
            if(facturaData.estado=="PAGADO")
            {
               estadoF='<td><label style="color:#45a33f;">'+facturaData.estado+'</label></td>';
            }
            else
            {
              estadoF='<td><label style="color:red;">'+facturaData.estado+'</label></td>';
            }
            var fila = `
            <tr>
              <td>${i + 1}</td>
              <td>${facturaData.nombre_cliente}</td>
              ${estadoF}
              <td>${parseFloat(facturaData.total).toLocaleString()}</td>
              <td>${parseFloat(facturaData.abono).toLocaleString()}</td>
              <td>${parseFloat(facturaData.saldo_pendiente).toLocaleString()}</td>
              <td>${facturaData.fecha_creacion}</td>
              <td><button class="btn btn-secondary btnRegistrarAbono" data-bs-toggle="modal" data-bs-target="#ModalRegistrarAbono" data-id="${
                facturaData.id_factura
              }"><i class="bi bi-pencil btniRegistrarAbono" data-id="${
                facturaData.id_factura
            }"></i></button>&nbsp;&nbsp;<br><button class="btn btn-success btnVerFactura" data-id="${
              facturaData.id_factura
            }"><i class="bi bi-eye btniVerFactura" data-id="${
              facturaData.id_factura
            }"></i></button>&nbsp;&nbsp;<br><button class="btn btn-danger btnEliminarFactura" data-id="${
              facturaData.id_factura
            }"><i class="bi bi-trash btnEliminarFactura" data-id="${
              facturaData.id_factura
            }"></i></button></td>

            </tr>
          `;
            tablaHtmlHFactura += fila;
          }
        }
        jsTablaHistorialFactura.innerHTML = tablaHtmlHFactura;
        currentPageElem.textContent = currentPage;
      }

      // Función para actualizar los índices de inicio y fin de la página actual
      function updateIndexes() {
        startIndex = (currentPage - 1) * rowsPerPage;
        endIndex = startIndex + rowsPerPage;
        if (endIndex > listadoFactura.length) {
          endIndex = listadoFactura.length;
        }
      }

      // Mostrar las filas de la primera página
      showRows();

      // Mostrar el paginador
      prevBtn.addEventListener("click", function () {
        if (currentPage > 1) {
          currentPage--;
          updateIndexes();
          showRows();
        }
      });

      nextBtn.addEventListener("click", function () {
        if (currentPage < totalPages) {
          currentPage++;
          updateIndexes();
          showRows();
        }
      });

      jsBotonBuscarFactura.addEventListener("click", function () {
        var selectedOptionCliente = jsListadoClientesHistorialFactura.options[jsListadoClientesHistorialFactura.selectedIndex].text;
        var selectedOptionEstado = jsEstadoFactura.value;
        var fechaHistorialFactura = jsFechaFacturaHistorial.value;
         console.log(selectedOptionCliente);
         console.log(fechaHistorialFactura);
         console.log(selectedOptionEstado);
        if (jsListadoClientesHistorialFactura.value !=="null" || selectedOptionEstado !=="null" || fechaHistorialFactura ) {
          Swal.fire({
            title: 'Cargando....',
            timer: 500,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
            },
          })
          var filteredData = listadoFactura.filter(function (factura) {
            var fechaFacturaSinHora = factura.fecha_creacion.split(" - ")[0];

            if(jsListadoClientesHistorialFactura.value !=="null" && selectedOptionEstado !=="null" && fechaHistorialFactura ){
              return (
                factura.nombre_cliente === selectedOptionCliente && factura.estado == selectedOptionEstado && fechaFacturaSinHora === fechaHistorialFactura
              );
            }
            else if(jsListadoClientesHistorialFactura.value !=="null" && selectedOptionEstado !=="null"){
              return (
                factura.nombre_cliente === selectedOptionCliente && factura.estado == selectedOptionEstado
              );
            }
            else if(jsListadoClientesHistorialFactura.value !=="null" && fechaHistorialFactura ){
              return (
                factura.nombre_cliente === selectedOptionCliente && fechaFacturaSinHora === fechaHistorialFactura
              );
            }
            else if(selectedOptionEstado !=="null" && fechaHistorialFactura ){
              return (
                factura.estado == selectedOptionEstado && fechaFacturaSinHora === fechaHistorialFactura
              );
            }
            else if(jsListadoClientesHistorialFactura.value !=="null"){
              return (
                factura.nombre_cliente === selectedOptionCliente
              );
            }
            else if(selectedOptionEstado !=="null"){
              return (
                factura.estado == selectedOptionEstado
              );
            }
            else if(fechaHistorialFactura){
              return (
                fechaFacturaSinHora === fechaHistorialFactura
              );
            }
          });
          currentPage = 1;
          totalPages = Math.ceil(filteredData.length / rowsPerPage);
          startIndex = 0;
          endIndex = rowsPerPage;
          listadoFactura= filteredData;
          showRows();
        } else {
          listadoFactura = listadoFactura_buscar;
          currentPage = 1;
          totalPages = Math.ceil(listadoFactura.length / rowsPerPage);
          startIndex = 0;
          endIndex = rowsPerPage;
          showRows();
        }
      });
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      alert(
        "Error en la solicitud: " +
          xhr.status +
          " " +
          xhr.statusText +
          " " +
          xhr.response
      );
    }
  };
  xhr.send(data);
}

//tabla de hsitorial factura
if (jsTablaHistorialFactura) {
  jsTablaHistorialFactura.addEventListener("click", function (event) {
    // mostrar valores de cliente en modal
    if (event.target.classList.contains("btnRegistrarAbono")) {
      let id_factura= event.target.getAttribute("data-id");
      let fila = event.target.parentNode.parentNode;
      let Saldo_Pendiente = fila.cells[5].textContent;
      let Abono_Viejo=fila.cells[4].textContent;
      jsSaldoPendienteAbono.value= Saldo_Pendiente;
      jsvaloAbonoViejoF.value=Abono_Viejo;
      jsid_facturaF.value=id_factura;
    }
    else if (event.target.classList.contains("btniRegistrarAbono"))
    {
      let id_factura= event.target.getAttribute("data-id");
      let fila = event.target.parentNode.parentNode.parentNode;
      let Saldo_Pendiente = fila.cells[5].textContent;
      let Abono_Viejo=fila.cells[4].textContent;
      jsSaldoPendienteAbono.value= Saldo_Pendiente;
      jsvaloAbonoViejoF.value=Abono_Viejo;
      jsid_facturaF.value=id_factura;
    }
    else if (event.target.classList.contains("btniVerFactura"))
    {
      let id_factura= event.target.getAttribute("data-id");
      window.open("/cena/VerFactura?id_factura=" + id_factura, "_blank");
    }
    else if (event.target.classList.contains("btniVerFactura"))
    {
      let id_factura= event.target.getAttribute("data-id");
      window.open("/cena/VerFactura?id_factura=" + id_factura, "_blank");
    }
    else if (event.target.classList.contains("btnEliminarFactura")) {
      let id_factura= event.target.getAttribute("data-id");
      opcion = "EliminarFactura";
      var data = "id_factura=" + id_factura + "&opcion=" + opcion;
      Swal.fire({
        title: "Estas Seguro De Eliminar",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "SI",
      }).then((result) => {
        if (result.isConfirmed) {
          var xhr = new XMLHttpRequest();
          xhr.open("POST", "app/controlador/CenaControlador.php", true);
          xhr.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
          );

          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
              if (xhr.response == 1) {
                Swal.fire({
                  icon: "success",
                  title: "Cliente Eliminado",
                  showConfirmButton: false,
                  timer: 1000,
                });
                cargarTablaHistorialFactura();
              } else {
                alert("error");
              }
            } else if (xhr.readyState === 4 && xhr.status !== 200) {
              alert(
                "Error en la solicitud: " +
                  xhr.status +
                  " " +
                  xhr.statusText +
                  " " +
                  xhr.response
              );
            }
          };
          xhr.send(data);
        }
      });
    }
  });
  document.addEventListener("DOMContentLoaded", cargarTablaHistorialFactura);
}

//registrar abono
if (jsFormResgistrar_Form_Abono) {
  jsFormResgistrar_Form_Abono.addEventListener("submit", function (event) {
    event.preventDefault();
    opcion = "GuardarAbono";
    var id_factura=jsid_facturaF.value;
    var saldo_pendiente=jsSaldoPendienteAbono.value;
    var abono_viejo=jsvaloAbonoViejoF.value;
    var abonoNuevo=jsValorAAbonarF.value;
    if(saldo_pendiente==0)
    {
      Swal.fire({
        icon: "warning",
        title: "Esta Factura Esta al Dia",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }
    else
    {
      saldo_pendiente=parseInt(saldo_pendiente.replace(".", ""))-abonoNuevo;
      abono_viejo=parseInt(abono_viejo.replace(".", ""))+parseInt(abonoNuevo);
      if(saldo_pendiente==0)
      {
          estado="PAGADO";
      }
      else
      {
         estado="PENDIENTE";
      }
      var data="opcion="+opcion+"&saldo_pendiente="+saldo_pendiente+"&abono="+abono_viejo+"&id_factura="+id_factura+"&abono_nuevo="+abonoNuevo+"&estado="+estado;

      var xhr = new XMLHttpRequest();
      xhr.open("POST", "app/controlador/CenaControlador.php", true);
      xhr.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
      );

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          if (xhr.response == 1) {
            Swal.fire({
              icon: "success",
              title: "Datos Actualizados",
              showConfirmButton: false,
              timer: 1000,
            });
            cargarTablaHistorialFactura();
            jsFormResgistrar_Form_Abono.reset();
            jsModalRegistrarAbono.hide();
          } else {
            alert("error");
          }
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
          alert(
            "Error en la solicitud: " +
              xhr.status +
              " " +
              xhr.statusText +
              " " +
              xhr.response
          );
        }
      };
      xhr.send(data);
    }
  });
}

//cargar tabla de factura cena
function cargarTablaFacturaCena() {
  opcion = "ListarProductos";
  var data = "opcion=" + opcion;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "app/controlador/CenaControlador.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var listadoProducto = JSON.parse(this.responseText);
      var conta = 0;
      for (var i = 0; i < listadoProducto.length; i++) {
        var producto = listadoProducto[i];
        var conta = 0;

        // Crear nueva fila
        var nuevaFila = jsTablaFacturaCena.insertRow(-1);

        // Agregar celda con el nombre del producto
        var celdaProducto = nuevaFila.insertCell(-1);
        var inputProducto = document.createElement("input");
        inputProducto.type = "text";
        inputProducto.name = `campo${i}${conta}`;
        inputProducto.className = "form-control";
        inputProducto.value = producto.id_producto;
        inputProducto.style.display = "none";
        celdaProducto.appendChild(inputProducto);
        celdaProducto.appendChild(
          document.createTextNode(producto.nombre_producto)
        );
        conta++;

        // Agregar celda con el campo de cantidad
        var celdaCantidad = nuevaFila.insertCell(-1);
        var inputCantidad = document.createElement("input");
        inputCantidad.type = "text";
        inputCantidad.name = `campo${i}${conta}`;
        inputCantidad.className = "form-control";
        inputCantidad.value = 0;
        celdaCantidad.appendChild(inputCantidad);
        conta++;

        // Agregar celda con el campo de precio unitario
        var celdaPrecioUnitario = nuevaFila.insertCell(-1);
        var inputPrecioUnitario = document.createElement("input");
        inputPrecioUnitario.type = "text";
        inputPrecioUnitario.name = `campo${i}${conta}`;
        inputPrecioUnitario.className = "form-control";
        inputPrecioUnitario.value = producto.producto_precio;
        celdaPrecioUnitario.appendChild(inputPrecioUnitario);
        conta++;

        // Agregar celda con el campo de total
        var celdaTotal = nuevaFila.insertCell(-1);
        var inputTotal = document.createElement("input");
        inputTotal.type = "text";
        inputTotal.name = `campo${i}${conta}`;
        inputTotal.className = "form-control";
        inputTotal.value = 0;
        inputTotal.disabled=true;
        celdaTotal.appendChild(inputTotal);

        var celdaCantidadProducto = nuevaFila.insertCell(-1);
        celdaCantidadProducto.textContent = producto.cantidad;

        inputCantidad.addEventListener("change", (function(cantidad, precio, inputTotal) {
          return function() {
            if (isNaN(cantidad.value) || isNaN(precio.value) || cantidad.value === "" || precio.value === "") {
              TotalFacturaCena.value=parseFloat(TotalFacturaCena.value)-parseFloat(inputTotal.value);
              inputTotal.value = 0;
              this.value=0;
            } else {
              var valorCantidad = parseFloat(cantidad.value);
              var valorPrecio = parseFloat(precio.value);
              var totalProducto = valorCantidad * valorPrecio;
              inputTotal.value = totalProducto;
            }
          }
        })(inputCantidad, inputPrecioUnitario, inputTotal));

        inputPrecioUnitario.addEventListener("change", (function(cantidad, precio, inputTotal) {
          return function() {
            if (isNaN(cantidad.value) || isNaN(precio.value) || cantidad.value === "" || precio.value === "") {
              TotalFacturaCena.value=parseFloat(TotalFacturaCena.value)-parseFloat(inputTotal.value);
              inputTotal.value = 0;
              this.value=0;
            } else {
              var valorCantidad = parseFloat(cantidad.value);
              var valorPrecio = parseFloat(precio.value);
              var totalProducto = valorCantidad * valorPrecio;
              inputTotal.value = totalProducto;
            }
          }
        })(inputCantidad, inputPrecioUnitario, inputTotal));
      }
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      alert(
        "Error en la solicitud: " +
          xhr.status +
          " " +
          xhr.statusText +
          " " +
          xhr.response
      );
    }
  };
  xhr.send(data);
}


//tabla de factura cena nueva
if (jsTablaFacturaCena) {
  cargarTablaFacturaCena();
}

//boton de calcular factura
if(BtnCalcularFacturaCena)
{
  BtnCalcularFacturaCena.addEventListener("click", function() {
    // Recorrer todos los inputTotal y sumar sus valores
    var total = 0;
    var inputsTotal = document.querySelectorAll('input[name^="campo"][name$="3"]');
    for (var i = 0; i < inputsTotal.length; i++) {
      total += parseFloat(inputsTotal[i].value);
    }
    if(CambioFacturaCena.value != "" )
    {
      TotalFacturaCena.value = total-parseFloat(CambioFacturaCena.value);
    }
    else{
      TotalFacturaCena.value = total;
      CambioFacturaCena.value=0;
    }
    if(AbonoFacturaCena.value != "" &&  AbonoFacturaCena.value!=0)
    {

      SaldoPendienteFacturaCena.value=parseFloat(TotalFacturaCena.value)-parseFloat(AbonoFacturaCena.value)
    }
    else
    {
      SaldoPendienteFacturaCena.value=0;
    }

  });
}

if (btnRegistrarFacturaCena) {
  btnRegistrarFacturaCena.addEventListener("click", function () {
    var tabla = jsTablaFacturaCena;
    var filas = tabla.getElementsByTagName("tr");
    var totalTotal = TotalFacturaCena.value;
    var cambio = CambioFacturaCena.value;
    var abono = AbonoFacturaCena.value;
    var SaldoPendiente = SaldoPendienteFacturaCena.value;
    var id_cliente = jsListadoClientesFactura.value;
    var estado = "";
    if (id_cliente == "null") {
      Swal.fire({
        icon: "warning",
        title: "Faltan datos Por llenar",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }
    if (SaldoPendiente == 0) {
      estado = "PAGADO";
    } else {
      estado = "PENDIENTE";
    }
    if (totalTotal == 0) {
      Swal.fire({
        icon: "warning",
        title: "Faltan datos Por llenar",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }
    var factura = [];
    var contf = 0;
    for (var i = 0; i < filas.length; i++) {
      opcion = "RegistrarFactura";
      var celdas = filas[i].getElementsByTagName("td");
      var id_producto = celdas[0].getElementsByTagName("input")[0].value;
      var cantidad = celdas[1].getElementsByTagName("input")[0].value;
      var precio_unitario = celdas[2].getElementsByTagName("input")[0].value;
      var total = celdas[3].getElementsByTagName("input")[0].value;
      var cantidadC=parseFloat(cantidad);
       if(cantidadC != 0)
       {
        factura[contf] = {
          id_producto: id_producto,
          cantidad_producto: cantidad,
          valor_unitario: precio_unitario,
          total_producto: total,
        };
        contf= contf+1;
      }
    }
    var data =
      "estado=" +
      estado +
      "&opcion=" +
      opcion +
      "&id_cliente=" +
      id_cliente +
      "&total=" +
      totalTotal +
      "&abono=" +
      abono +
      "&cambio=" +
      cambio +
      "&saldo_pendiente=" +
      SaldoPendiente +
      "&factura_productos=" +
      JSON.stringify(factura);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "app/controlador/CenaControlador.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var id_factura = xhr.response;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Factura Registrada",
          showConfirmButton: false,
          timer: 1200,
        });
        jsFormRegistrarFactura.reset();
        setTimeout(function () {
          window.location.href = "/cena/VerFactura?id_factura=" + id_factura;
        }, 1400);
      } else if (xhr.readyState === 4 && xhr.status !== 200) {
        alert(
          "Error en la solicitud: " +
            xhr.status +
            " " +
            xhr.statusText +
            " " +
            xhr.response
        );
      }
    };
    xhr.send(data);
  });
}


if (btnLimpiar) {
  btnLimpiar.addEventListener("click", function () {
     cargarTablaProducto();
  });
}

if (btnLimpiarHistorialFactura) {
  btnLimpiarHistorialFactura.addEventListener("click", function () {
    Swal.fire({
      title: 'Limpiando....',
      timer: 500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      },
    })
    cargarTablaHistorialFactura();
  });
}

function consultarInformeGeneral() {

  opcion = "ConsultarInformeGeneral";
  const fechaInforme = obtenerFechaActual();

    var data = "opcion=" + opcion + "&fechaInforme="+ fechaInforme;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "app/controlador/CenaControlador.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var consultaInforme = JSON.parse(this.responseText);
        function formatearNumero(numero) {
          if (numero === null || numero === undefined) {
            return ""; // O cualquier otro valor predeterminado que desees
          }

          const options = {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          };

          return new Intl.NumberFormat("es-ES", options).format(numero);
        }
        if (consultaInforme.factura.suma_total !== null) {
          var AbonosAnteriores=0;
          if(parseFloat(consultaInforme.abono.suma_abono)>parseFloat(consultaInforme.factura.suma_abono)){
             AbonosAnteriores=parseFloat(consultaInforme.abono.suma_abono)-parseFloat(consultaInforme.factura.suma_abono);
          }

          var totalInformeGeneral=(parseFloat(consultaInforme.factura.suma_total)-parseFloat(consultaInforme.factura.suma_saldo_pendiente))+parseFloat(AbonosAnteriores);
          var tablaHtmlInforme = `
            <tr>
            <td>${formatearNumero(consultaInforme.factura.suma_total)}</td>
            <td>${formatearNumero(AbonosAnteriores)}</td>
            <td>${formatearNumero(consultaInforme.factura.suma_saldo_pendiente)}</td>
            <td>${formatearNumero(consultaInforme.factura.suma_cambio)}</td>
            <td>${formatearNumero(totalInformeGeneral)}</td>
            </tr>
          `;
      jsTablaInformeGeneral.innerHTML = tablaHtmlInforme;
        }

      } else if (xhr.readyState === 4 && xhr.status !== 200) {
        alert(
          "Error en la solicitud: " +
            xhr.status +
            " " +
            xhr.statusText +
            " " +
            xhr.response
        );
      }
    };
    xhr.send(data);

}


function consultarInformeGeneralPorFecha() {

  opcion = "ConsultarInformeGeneral";
  var fechaInforme = jsFechaInformeGeneral.value;

  if(!fechaInforme){
    Swal.fire({
      icon: "warning",
      title: "Debe ingresar una fecha",
      showConfirmButton: false,
      timer: 800,
    });
    return;
  }

    var data = "opcion=" + opcion + "&fechaInforme="+ fechaInforme;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "app/controlador/CenaControlador.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var consultaInforme = JSON.parse(this.responseText);
        function formatearNumero(numero) {
          if (numero === null || numero === undefined) {
            return ""; // O cualquier otro valor predeterminado que desees
          }

          const options = {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          };

          return new Intl.NumberFormat("es-ES", options).format(numero);
        }
          if (
            consultaInforme.factura.suma_abono === null ||
            consultaInforme.factura.suma_cambio === null ||
            consultaInforme.factura.suma_saldo_pendiente === null ||
            consultaInforme.factura.suma_total === null
          ) {
            Swal.fire({
              icon: "warning",
              title: "Sin resultados...",
              showConfirmButton: false,
              timer: 1000,
            });
            jsTablaInformeGeneralPorFecha.innerHTML = "";
          }else{
            Swal.fire({
              title: 'Cargando...',
              timer: 500,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading()
              },
            })
          }

          var AbonosAnteriores=0;
            if(parseFloat(consultaInforme.abono.suma_abono)>parseFloat(consultaInforme.factura.suma_abono)){
               AbonosAnteriores=parseFloat(consultaInforme.abono.suma_abono)-parseFloat(consultaInforme.factura.suma_abono);
            }

            var totalInformeGeneral=(parseFloat(consultaInforme.factura.suma_total)-parseFloat(consultaInforme.factura.suma_saldo_pendiente))+parseFloat(AbonosAnteriores);
            var tablaHtmlInforme = `
              <tr>
              <td>${formatearNumero(consultaInforme.factura.suma_total)}</td>
              <td>${formatearNumero(AbonosAnteriores)}</td>
              <td>${formatearNumero(consultaInforme.factura.suma_saldo_pendiente)}</td>
              <td>${formatearNumero(consultaInforme.factura.suma_cambio)}</td>
              <td>${formatearNumero(totalInformeGeneral)}</td>
              </tr>
            `;
        jsTablaInformeGeneralPorFecha.innerHTML = tablaHtmlInforme;
      } else if (xhr.readyState === 4 && xhr.status !== 200) {
        alert(
          "Error en la solicitud: " +
            xhr.status +
            " " +
            xhr.statusText +
            " " +
            xhr.response
        );
      }
    };
    xhr.send(data);
}

function consultarInformeDeProductos() {

  opcion = "ConsultarInformeDeProductos";
  var fechaInforme = jsFechaDeInformeProducto.value;
  var tablaHtmlInformeProducto="";
  if(!fechaInforme){
    Swal.fire({
      icon: "warning",
      title: "Debe ingresar una fecha",
      showConfirmButton: false,
      timer: 800,
    });
    return;
  }

    var data = "opcion=" + opcion + "&fechaInforme="+ fechaInforme;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "app/controlador/CenaControlador.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var consultaInforme = JSON.parse(this.responseText);
          if(consultaInforme.length ==0){
            Swal.fire({
              icon: "warning",
              title: "Sin resultados",
              showConfirmButton: false,
              timer: 800,
            });
            return;
          }
          function formatearNumero(numero) {
            if (numero === null || numero === undefined) {
              return ""; // O cualquier otro valor predeterminado que desees
            }

            const options = {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            };

            return new Intl.NumberFormat("es-ES", options).format(numero);
          }

            Swal.fire({
              title: 'Cargando...',
              timer: 500,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading()
              },
            })

            for (var i = 0; i < consultaInforme.length; i++) {
              if (consultaInforme[i]) {
                var cantidad = consultaInforme[i].cantidad;
                var nombre_producto = consultaInforme[i].nombre_producto;
                var fila = `
                  <tr>
                    <td>${nombre_producto}</td>
                    <td>${cantidad}</td>
                  </tr>
                `;
                tablaHtmlInformeProducto += fila;
              }
            }

        jsTablaInformeProducto.innerHTML = tablaHtmlInformeProducto;
      } else if (xhr.readyState === 4 && xhr.status !== 200) {
        alert(
          "Error en la solicitud: " +
            xhr.status +
            " " +
            xhr.statusText +
            " " +
            xhr.response
        );
      }
    };
    xhr.send(data);

}

function consultarInformeGeneralPorPeriodos() {

  opcion = "ConsultarInformeGeneralPorPeriodos";
  var fechaInformeInicialv = new Date(jsFechaInicialInformePeriodo.value);
  var fechaInformeFinalv = new Date(jsFechaFinalInformePeriodo.value);
  var fechaInformeInicial = jsFechaInicialInformePeriodo.value;
  var fechaInformeFinal = jsFechaFinalInformePeriodo.value;
  // Verificar si alguna de las fechas no es válida
  if (isNaN(fechaInformeInicialv) || isNaN(fechaInformeFinalv)) {
    Swal.fire({
      icon: "warning",
      title: "Las fechas ingresadas no son válidas",
      showConfirmButton: false,
      timer: 800,
    });
    return;
  }
  // Comparar las fechas
  if (fechaInformeInicialv > fechaInformeFinalv) {
    Swal.fire({
      icon: "warning",
      title: "La fecha inicial no puede ser mayor que la fecha final",
      showConfirmButton: false,
      timer: 900,
    });
    return;
  }

    var data = "opcion=" + opcion + "&fechaInforme="+ fechaInformeInicial+ "&fechaInformeFinal="+ fechaInformeFinal;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "app/controlador/CenaControlador.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var consultaInforme = JSON.parse(this.responseText);
        function formatearNumero(numero) {
          if (numero === null || numero === undefined) {
            return ""; // O cualquier otro valor predeterminado que desees
          }

          const options = {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          };

          return new Intl.NumberFormat("es-ES", options).format(numero);
        }
          if (
            consultaInforme.suma_cambio === null ||
            consultaInforme.suma_saldo_pendiente === null ||
            consultaInforme.suma_total === null
          ) {
            Swal.fire({
              icon: "warning",
              title: "Sin resultados...",
              showConfirmButton: false,
              timer: 1000,
            });
            jsTablaInformeGeneralPorFecha.innerHTML = "";
            return;
          }
            Swal.fire({
              title: 'Cargando...',
              timer: 500,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading()
              },
            })


            var totalInformeGeneral=(parseFloat(consultaInforme.suma_total)-parseFloat(consultaInforme.suma_saldo_pendiente));
            var tablaHtmlInforme = `
              <tr>
              <td>${formatearNumero(consultaInforme.suma_total)}</td>
              <td>${formatearNumero(consultaInforme.suma_saldo_pendiente)}</td>
              <td>${formatearNumero(consultaInforme.suma_cambio)}</td>
              <td>${formatearNumero(totalInformeGeneral)}</td>
              </tr>
            `;
        jsTablaInformeGeneralPorMes.innerHTML = tablaHtmlInforme;
      } else if (xhr.readyState === 4 && xhr.status !== 200) {
        alert(
          "Error en la solicitud: " +
            xhr.status +
            " " +
            xhr.statusText +
            " " +
            xhr.response
        );
      }
    };
    xhr.send(data);
}


if (jsBotonBuscarInformeGeneral) {
  jsBotonBuscarInformeGeneral.addEventListener("click", function () {
    consultarInformeGeneralPorFecha();
  });
}

if (jsTablaInformeGeneral) {
  document.addEventListener("DOMContentLoaded", consultarInformeGeneral);
}

if (jsBotonLimpiarInventario) {
  jsBotonLimpiarInventario.addEventListener("click", function () {
    jsBuscarInventario.value="";
    cargarTablaInventario();
  });
}

if (jsBotonBuscarInformeProducto) {
  jsBotonBuscarInformeProducto.addEventListener("click", function () {
     consultarInformeDeProductos();
  });
}

if (jsBotonBuscarInformeGeneralPorMes) {
  jsBotonBuscarInformeGeneralPorMes.addEventListener("click", function () {
    consultarInformeGeneralPorPeriodos();
  });
}