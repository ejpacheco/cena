<div id="app">
    <div id="main" class='layout-navbar'>
        <div id="main-content">
            <div class="page-heading">

                <section id="basic-horizontal-layouts">

                    <div class="row match-height">
                        <div class="col-md-12 col-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Registrar Producto</h4>
                                </div>
                                <div class="card-content">
                                    <div class="card-body">
                                        <form class="form form-horizontal" id="Form_Productos">
                                            <div class="form-body">
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <label><b>Nombre del Producto</b></label>
                                                    </div>
                                                    <div class="col-md-8 form-group">
                                                        <input type="text" id="producto" name="producto" class="form-control" required>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label><b>Precio</b></label>
                                                    </div>
                                                    <div class="col-md-8 form-group">
                                                        <input type="number" id="producto_precio" name="producto_precio" class="form-control" required>
                                                    </div>

                                                    <div class="col-sm-12 d-flex justify-content-end">
                                                        <button type="submit" class="btn btn-primary me-1 mb-1 btnRegistrarProducto">Registrar</button>
                                                        <button type="reset" class="btn btn-light-secondary me-1 mb-1">Reset</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="row" id="basic-table">
                        <div class="col-12 col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Listado De Productos</h4>
                                </div>
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control" id="Buscarproducto" placeholder="Buscar...">
                                            </div>
                                            <div class="col-sm-6">
                                                <button type="button" class="btn btn-primary btnBuscarProducto">Buscar</button>
                                                <button type="button" class="btn btn-secondary btnLimpiar">Limpiar</button>
                                            </div>
                                        </div>
                                        <div class="table-responsive">

                                            <table class="table table-lg">
                                                <thead>
                                                    <tr>
                                                        <th>N°</th>
                                                        <th>NOMBRE DEL PRODUCTO</th>
                                                        <th>PRECIO</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody id="TablaProductos">
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="pagination">
                                            <button id="prev-page">Anterior</button>
                                            <span id="current-page">1</span>
                                            <button id="next-page">Siguiente</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form class="form form-horizontal" id="Editar_Form_Productos">
                        <div class="modal fade text-left" id="ModalEditarProducto" tabindex="-1" aria-labelledby="myModalLabel1" style="display: none;" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-scrollable" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="myModalLabel1">Editar Producto</h5>
                                        <button type="button" class="close rounded-pill" data-bs-dismiss="modal" aria-label="Close">
                                            <i data-feather="x"></i>
                                        </button>
                                    </div>
                                    <div class="modal-body">

                                        <div class="form-body">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label>Nombre del Producto:</label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12 form-group">
                                                    <input type="text" id="EditarProducto" name="EditarProducto" class="form-control" required>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label>Precio:</label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12 form-group">
                                                    <input type="text" id="EditarProductoPrecio" name="EditarProductoPrecio" class="form-control" required>
                                                    <input type="text" id="id_producto" name="id_producto" class="d-none" required>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> Cerrar </button>
                                        <button type="submit" class="btn btn-primary ml-1"> Guardar </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>


                </section>
            </div>

            <footer>
                <div class="footer clearfix mb-0 text-muted">
                    <div class="float-end">
                        <p>developed by <b> Elquis Pacheco</b></a></p>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</div>