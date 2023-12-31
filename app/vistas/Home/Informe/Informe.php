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
                                                        <th>ABONOS</th>
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
                                            <br>
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th>TOTAL VENTA</th>
                                                        <th>ABONOS</th>
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

                    <div class="row" id="basic-table">
                        <div class="col-12 col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">INFORME POR PERIODOS</h4>
                                </div>
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label for="">Fecha Inicial</label>
                                                <input type="date" class="form-control" id="FechaInicialInformePeriodo">
                                            </div>
                                            <div class="col-sm-4">
                                                <label for="">Fecha Final</label>
                                                <input type="date" class="form-control" id="FechaFinalInformePeriodo">
                                            </div>
                                            <div class="col-sm-4">
                                                <button type="button" class="btn btn-secondary btnBuscarInformeGeneralPorMes">Buscar</button>
                                            </div>
                                        </div>
                                        <div class="table-responsive">
                                            <br>
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th>TOTAL VENTA</th>
                                                        <th style="color:red;">SALDO PENDIENTE</th>
                                                        <th>CAMBIO</th>
                                                        <th>TOTAL</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="TablaInformeGeneralPorMes">
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
                                    <h4 class="card-title">INFORME DE VENTAS DE PRODUCTOS</h4>
                                </div>
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <input type="date" class="form-control" id="FechaDeInformeProducto">
                                            </div>
                                            <div class="col-sm-6">
                                                <button type="button" class="btn btn-secondary btnBuscarInformeProducto">Buscar</button>
                                                <button type="button" class="btn btn-success btnImprimirInformeProducto">Imprimir</button>
                                            </div>
                                        </div>
                                        <div class="table-responsive">
                                            <br>
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th>PRODUCTO</th>
                                                        <th>CANTIDAD</th>
                                                        <th>PRECIO</th>
                                                        <th>TOTAL</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="TablaInformeProducto">
                                                    <!-- Contenido de la tabla va aquí -->
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <td colspan="2">TOTAL GENERAL:</td>
                                                        <td id="totalGeneralProducto">0.00</td>
                                                    </tr>
                                                </tfoot>
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