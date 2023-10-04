<div id="app">
    <div id="main" class='layout-navbar'>
        <div id="main-content">
            <div class="page-heading">

                <section id="basic-horizontal-layouts">

                    <div class="row" id="basic-table">
                        <div class="col-12 col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Registrar Factura</h4>
                                </div>
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-6 mb-4">
                                                <div class="form-group">
                                                    <select class="form-select" id="ListadoProductosFactura">
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <button type="button" class="btn btn-primary btnAgregarAFactura mx-2">Agregar</button>
                                                <button type="button" class="btn btn-secondary btnRegistrarFactura mx-2">Registrar</button>
                                            </div>
                                        </div>
                                        <div class="table-responsive">
                                            <table class="table table-lg">
                                                <thead>
                                                    <tr>
                                                        <th>PRODUCTO</th>
                                                        <th>CANTIDAD</th>
                                                        <th>PRECIO UNITARIO</th>
                                                        <th>TOTAL</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody id="TablaFactura">
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form class="form form-horizontal" id="RegistrarFactura">
                        <div class="modal fade text-left" id="ModalRegistarFactura" tabindex="-1" aria-labelledby="myModalLabel1" style="display: none;" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-scrollable" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h3 class="modal-title" id="myModalLabel1">REGISTRAR FACTURA</h5>
                                            <button type="button" class="close rounded-pill" data-bs-dismiss="modal" aria-label="Close">
                                                <i data-feather="x"></i>
                                            </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="form-body">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label><b style="font-size:18px;">CLIENTE</b></label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12 form-group">
                                                    <select class="form-select" id="ListadoClientesFactura" >
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label><b style="font-size:18px;">RECIBIDO</b></label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12 form-group">
                                                    <input type="number" class="form-control" id="RecibidoFactura" required>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label><b style="font-size:18px;">ABONO</b></label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12 form-group">
                                                    <input type="text" class="form-control" id="AbonoFactura" required>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label><b style="font-size:18px;">TOTAL A PAGAR</b></label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12 form-group">
                                                    <input type="text" class="form-control" id="TotalApagarFactura" disabled>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label><b style="font-size:18px;">SALDO PENDIENTE</b></label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12 form-group">
                                                    <input type="text" class="form-control" id="SaldoPendienteFactura" disabled>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label><b style="font-size:18px;">A DEVOLVER</b></label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12 form-group">
                                                    <input type="text" class="form-control" id="AdevolverFactura" disabled>
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