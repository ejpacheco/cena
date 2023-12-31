<?php
$a=$_SESSION['sesion_active']["user"];
var_dump($a);
?>
<div id="sidebar" class="active">
    <div class="sidebar-wrapper active">

        <div class="sidebar-header">
            <div class="d-flex justify-content-between">
                <div class="toggler">
                    <a href="#" class="sidebar-hide d-xl-none d-block"><i class="bi bi-x bi-middle"></i></a>
                </div>
            </div>
        </div>

        <div class="sidebar-menu">
            <ul class="menu">
                <li class="sidebar-title">Menu</li>

                <li class="sidebar-item ">
                    <a href="index.html" class='sidebar-link'>
                        <i class="bi bi-grid-fill"></i>
                        <span>Tablero</span>
                        <input type="text" value="<?php echo $a?>" id="user_name" hidden >
                    </a>
                </li>

                <li class="sidebar-item ">
                    <a href="productos" class='sidebar-link'>
                        <i class="bi bi-collection-fill"></i>
                        <span>Productos</span>
                    </a>
                </li>

                <li class="sidebar-item  has-sub">
                    <a href="#" class='sidebar-link'>
                        <i class="bi bi-person-badge"></i>
                        <span>Clientes</span>
                    </a>
                    <ul class="submenu ">
                        <li class="submenu-item ">
                            <a href="RegistrarClienteCena">Registrar Clientes Cena</a>
                        </li>
                    </ul>
                </li>
                <li class="sidebar-item  has-sub">
                    <a href="#" class='sidebar-link'>
                        <i class="bi bi-receipt"></i>
                        <span>Factura</span>
                    </a>
                    <ul class="submenu ">
                        <li class="submenu-item ">
                            <a href="RegistrarFacturaCena">Registrar Factura</a>
                        </li>
                        <li class="submenu-item ">
                            <a href="ListadoDeFactura">Historial de Facturas</a>
                        </li>
                    </ul>
                </li>
                <?php
                 if ($_SESSION["sesion_active"]["tipo"]=="ADMINISTRADOR"):
                ?>
                <li class="sidebar-item ">
                    <a href="inventario" class='sidebar-link'>
                        <i class="bi bi-handbag-fill"></i>
                        <span>Inventario</span>
                    </a>
                </li>
                <li class="sidebar-item ">
                    <a href="informe" class='sidebar-link'>
                        <i class="bi bi-bar-chart-line"></i>
                        <span>Informes</span>
                    </a>
                </li>
                <?php
                endif;
                ?>
            </ul>
        </div>
        <button class="sidebar-toggler btn x"><i data-feather="x"></i></button>
    </div>
</div>