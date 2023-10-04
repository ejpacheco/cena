<div id="app">
    <div id="main" class='layout-navbar'>
        <div id="main-content">
            <div class="page-heading">

                <section id="basic-horizontal-layouts">

                    <div class="row match-height">
                        <div class="col-md-12 col-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Registrar Cliente</h4>
                                </div>
                                <div class="card-content">
                                    <div class="card-body">
                                        <form class="form form-horizontal" id="Form_Clientes_Cena">
                                            <div class="form-body">
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <label><b>Nombre</b></label>
                                                    </div>
                                                    <div class="col-md-8 form-group">
                                                        <input type="text" id="cliente_nombre" name="cliente_nombre" class="form-control" required>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label><b>Cedula</b></label>
                                                    </div>
                                                    <div class="col-md-8 form-group">
                                                        <input type="number" id="cliente_cedula" name="cliente_cedula" class="form-control" >
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label><b>Telefono</b></label>
                                                    </div>
                                                    <div class="col-md-8 form-group">
                                                        <input type="number" id="cliente_telefono" name="cliente_telefono" class="form-control" >
                                                    </div>

                                                    <div class="col-sm-12 d-flex justify-content-end">
                                                        <button type="submit" class="btn btn-primary me-1 mb-1 btnRegistrarCliente">Registrar</button>
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
                                    <h4 class="card-title">Listado De Clientes</h4>
                                </div>
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control" id="BuscarCliente" placeholder="Buscar...">
                                            </div>
                                            <div class="col-sm-6">
                                                <button type="button" class="btn btn-primary btnBuscarCliente">Buscar</button>
                                            </div>
                                        </div>
                                        <div class="table-responsive">

                                            <table class="table table-lg">
                                                <thead>
                                                    <tr>
                                                        <th>N°</th>
                                                        <th>NOMBRE</th>
                                                        <th>CEDULA</th>
                                                        <th>TELEFONO</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody id="TablaClientes">
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

                    <form class="form form-horizontal" id="Editar_Form_Cliente">
                        <div class="modal fade text-left" id="ModalEditarCliente" tabindex="-1" aria-labelledby="myModalLabel1" style="display: none;" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-scrollable" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="myModalLabel1">Editar Cliente</h5>
                                        <button type="button" class="close rounded-pill" data-bs-dismiss="modal" aria-label="Close">
                                            <i data-feather="x"></i>
                                        </button>
                                    </div>
                                    <div class="modal-body">

                                        <div class="form-body">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label>Nombre:</label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12 form-group">
                                                    <input type="text" id="EditarCliente_Nombre" name="EditarCliente_Nombre" class="form-control" required>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label>Cedula:</label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12 form-group">
                                                    <input type="number" id="EditarCliente_Cedula" name="EditarCliente_Cedula" class="form-control" >
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label>Telefono:</label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12 form-group">
                                                    <input type="number" id="EditarCliente_Telefono" name="EditarCliente_Telefono" class="form-control" >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <input type="text" id="id_cliente" name="id_cliente" class="d-none" required>
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