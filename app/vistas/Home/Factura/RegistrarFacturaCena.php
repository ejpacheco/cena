<form action="" id="RegistrarFactura">

    <div id="app">
        <div id="main" class='layout-navbar'>
            <div id="main-content">
                <div class="page-heading">

                    <section id="basic-horizontal-layouts">

                        <div class="row" id="basic-table">
                            <div class="col-12 col-md-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">Registrar Factura </h4>
                                    </div>
                                    <div class="card-content">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-6 mb-4">
                                                    <div class="form-group">
                                                        <select class="form-select" id="ListadoClientesFactura">
                                                        </select>
                                                    </div>
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
                                                        </tr>
                                                    </thead>
                                                    <tbody id="TablaFacturaCena">
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label class="form-label">CAMBIO</label>
                                                    <input type="text" class="form-control" id="CambioFacturaCena" value="0">
                                                </div>
                                                <div class="col-md-3">
                                                    <label class="form-label">TOTAL</label>
                                                    <input type="text" class="form-control" id="TotalFacturaCena" value="0">
                                                </div>
                                                <div class="col-md-3">
                                                    <label class="form-label">ABONO</label>
                                                    <input type="text" class="form-control" id="AbonoFacturaCena" value="0">
                                                </div>
                                                <div class="col-md-3">
                                                    <label class="form-label">SALDO PENDIENTE</label>
                                                    <input type="text" class="form-control" id="SaldoPendienteFacturaCena" value="0">
                                                </div>
                                            </div>

                                            <div class="row mt-3">
                                                <div class="col-md-12 d-flex justify-content-center">
                                                    <button type="button" class="btn btn-secondary btnCalcular mx-3">CALCULAR</button>
                                                    <button type="button" class="btn btn-primary btnRegistrarFacturaCena mx-3">GUARDAR</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

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
</form>