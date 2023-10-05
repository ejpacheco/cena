<div id="app">
    <div id="main" class='layout-navbar'>
        <div id="main-content">
            <div class="page-heading">

                <section id="basic-horizontal-layouts">

                    <div class="row" id="basic-table">
                        <div class="col-12 col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">INVENTARIO DE PRODUCTOS</h4>
                                </div>
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control" id="BuscarInventario" placeholder="Buscar...">
                                            </div>
                                            <div class="col-sm-6">
                                                <button type="button" class="btn btn-primary btnBuscarInventario">Buscar</button>
                                                <button type="button" class="btn btn-secondary btnLimpiar">Limpiar</button>
                                                <button type="button" class="btn btn-success btnGuardarInventario">Guardar</button>
                                            </div>
                                        </div>
                                        <div class="table-responsive">

                                            <table class="table table-lg">
                                                <thead>
                                                    <tr>
                                                        <th>N°</th>
                                                        <th>NOMBRE DEL PRODUCTO</th>
                                                        <th>CANTIDAD</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="TablaInventario">
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