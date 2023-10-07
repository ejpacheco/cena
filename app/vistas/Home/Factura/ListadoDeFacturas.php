<div id="app">
    <div id="main" class='layout-navbar'>
        <div id="main-content">
            <div class="page-heading">

                <section id="basic-horizontal-layouts">

                    <div class="row" id="basic-table">
                        <div class="col-12 col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Historial de Facturas</h4>
                                </div>
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <select class="form-select" id="ListadoClientesHistorialFactura">
                                                </select>
                                            </div>
                                            <div class="col-sm-3">
                                                <select class="form-select" id="EstadoFactura">
                                                    <option value="null">ESTADO</option>
                                                    <option value="PAGADO">PAGADO</option>
                                                    <option value="PENDIENTE">PENDIENTE</option>
                                                </select>
                                            </div>
                                            <div class="col-sm-3">
                                                <input type="date" class="form-control" id="FechaFacturaHistorial">
                                            </div>
                                            <div class="col-sm-3">
                                                <button type="button" class="btn btn-primary btnBuscarFactura">Buscar</button>
                                                <button type="button" class="btn btn-secondary btnLimpiarHistorialFactura">Limpiar</button>
                                            </div>
                                        </div>
                                        <div class="table-responsive">

                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th>N°</th>
                                                        <th>NOMBRE</th>
                                                        <th>ESTADO</th>
                                                        <th>TOTAL</th>
                                                        <th>ABONO</th>
                                                        <th>SALDO PENDIENTE</th>
                                                        <th>FECHA Y HORA</th>
                                                        <th>USUARIO</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody id="TablaHistorialFactura">
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

                    <form class="form form-horizontal" id="Resgistrar_Form_Abono">
                        <div class="modal fade text-left" id="ModalRegistrarAbono" tabindex="-1" aria-labelledby="myModalLabel1" style="display: none;" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-scrollable" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="myModalLabel1">Registrar Abono</h5>
                                        <button type="button" class="close rounded-pill" data-bs-dismiss="modal" aria-label="Close">
                                            <i data-feather="x"></i>
                                        </button>
                                    </div>
                                    <div class="modal-body">

                                        <div class="form-body">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label>Saldo Pendiente:</label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12 form-group">
                                                    <input type="text" id="SaldoPendienteF" name="SaldoPendienteF" class="form-control" disabled>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label>Valor a Abonar:</label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12 form-group">
                                                    <input type="number" id="ValorAAbonarF" name="ValorAAbonarF" class="form-control" required>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <input type="text" id="id_facturaF" name="id_facturaF" class="d-none">
                                        <input type="text" id="valoAbonoViejoF" name="valoAbonoViejoF" class="d-none">
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