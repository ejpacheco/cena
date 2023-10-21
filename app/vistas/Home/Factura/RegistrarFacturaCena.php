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
                                                    Seleccione un cliente
                                                    <select class="form-select" id="ListadoClientesFactura">
                                                    </select>
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
                                                            <th>CANTIDAD</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="TablaFacturaCena">
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-2">
                                                    <label class="form-label">CAMBIO</label>
                                                    <input type="text" class="form-control" id="CambioFacturaCena" value="0">
                                                </div>
                                                <div class="col-md-2">
                                                    <label class="form-label">TOTAL</label>
                                                    <input type="text" class="form-control" id="TotalFacturaCena" value="0">
                                                </div>
                                                <div class="col-md-2">
                                                    <label class="form-label">ABONO</label>
                                                    <input type="text" class="form-control" id="AbonoFacturaCena" value="0" disabled>
                                                </div>
                                                <div class="col-md-3">
                                                    <label class="form-label" style="color:red;">SALDO ANTERIOR</label>
                                                    <input type="text" id="sp_cliente" value="0" class="form-control" disabled>
                                                    <input type="text" id="id_factura_anterior" value="0" class="form-control" hidden>
                                                </div>
                                                <div class="col-md-3">
                                                    <label class="form-label">SALDO PENDIENTE </label>
                                                    <input type="text" class="form-control" id="SaldoPendienteFacturaCena" value="0">
                                                </div>
                                            </div>

                                            <br>
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-check form-switch">
                                                            <input class="form-check-input" type="checkbox" id="checkPendientePorPagar" disabled>
                                                            <label class="form-check-label">SWITCH Pendiente Por Pagar</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <button type="button" class="btn btn-secondary btnCalcular">CALCULAR</button>
                                                        <button type="button" class="btn btn-primary btnRegistrarFacturaCena">GUARDAR</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <br>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <b> - Para pagar las facturas a credito se debe activar el switch Pendiente Por Pagar</b>
                                                </div>
                                                <div class="col-md-12">
                                                    <b> - Si el switch esta desactivado el programa entendera que la factura se pago de contado</b>
                                                </div>
                                                <div class="col-md-12">
                                                    <b> - El switch se deshabilita para facturas que tienen saldos anteriores, para estas facturas no es nesecario el switch</b>
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