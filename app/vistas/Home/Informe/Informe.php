<?php
date_default_timezone_set('America/Bogota');
$fechaActual = date("Y-m-d");
?>
<div id="app">
    <div id="main" class='layout-navbar'>
        <div id="main-content">
            <div class="page-heading">

                <section id="basic-horizontal-layouts">

                    <div class="row" id="basic-table">
                        <div class="col-12 col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">INFORME DE HOY (<?php echo $fechaActual; ?>) </h4>
                                </div>
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th>TOTAL VENTA</th>
                                                        <th>ABONOS (Facturas Hoy)</th>
                                                        <th>ABONOS (Facturas Anteriores)</th>
                                                        <th style="color:red;">SALDO PENDIENTE</th>
                                                        <th>CAMBIO</th>
                                                        <th>TOTAL</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="TablaInformeGeneral">
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" id="basic-table">
                        <div class="col-12 col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">INFORME POR FECHA</h4>
                                </div>
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <input type="date" class="form-control" id="FechaDeInforme">
                                            </div>
                                            <div class="col-sm-6">
                                                <button type="button" class="btn btn-secondary btnBuscarInformeGeneral">Buscar</button>
                                            </div>
                                        </div>
                                        <div class="table-responsive">

                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th>TOTAL VENTA</th>
                                                        <th id="AbonoFechaActual">ABONOS (Facturas Hoy)</th>
                                                        <th >ABONOS (Facturas Anteriores)</th>
                                                        <th style="color:red;">SALDO PENDIENTE</th>
                                                        <th>CAMBIO</th>
                                                        <th>TOTAL</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="TablaInformeGeneralPorFecha">
                                                </tbody>
                                            </table>
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