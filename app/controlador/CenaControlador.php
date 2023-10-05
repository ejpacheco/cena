<?php
if (isset($_POST["opcion"])) {
    require_once "../modelo/CenaModelo.php";
} else {
    require_once "app/modelo/CenaModelo.php";
}

class CenaControlador
{
    public function RegistrarProducto($datos)
    {
        $respuesta = CenaModelo::RegistrarProducto($datos);
        return $respuesta;
    }
    public function ListarProductos()
    {
        $respuesta = CenaModelo::ListarProductos();
        return $respuesta;
    }
    public function ActualizarProducto($datos)
    {
        $respuesta = CenaModelo::ActualizarProducto($datos);
        return $respuesta;
    }
    public function EliminarProducto($id)
    {
        $respuesta = CenaModelo::EliminarProducto($id);
        return $respuesta;
    }
    public function RegistrarCliente($datos)
    {
        $respuesta = CenaModelo::RegistrarCliente($datos);
        return $respuesta;
    }
    public function ListarCliente()
    {
        $respuesta = CenaModelo::ListarCliente();
        return $respuesta;
    }
    public function ActualizarCliente($datos)
    {
        $respuesta = CenaModelo::ActualizarCliente($datos);
        return $respuesta;
    }
    public function EliminarCliente($id)
    {
        $respuesta = CenaModelo::EliminarCliente($id);
        return $respuesta;
    }
    public function RegistrarFactura($datos, $factura_productos)
    {
        $respuesta = CenaModelo::RegistrarFactura($datos, $factura_productos);
        return $respuesta;
    }
    public function ConsultarFactura($datos)
    {
        $respuesta = CenaModelo::ConsultarFactura($datos);
        return $respuesta;
    }
    public function ConsultarHistorialFactura()
    {
        $respuesta = CenaModelo::ConsultarHistorialFactura();
        return $respuesta;
    }
    public function EliminarFactura($id)
    {
        $respuesta = CenaModelo::EliminarFactura($id);
        return $respuesta;
    }
    public function GuardarAbono($id)
    {
        $respuesta = CenaModelo::GuardarAbono($id);
        return $respuesta;
    }
    public function ListarInventario()
    {
        $respuesta = CenaModelo::ListarInventario();
        return $respuesta;
    }
    public function ActualizarInventario($datos)
    {
        $respuesta = CenaModelo::ActualizarInventario($datos);
        return $respuesta;
    }
}

if (isset($_POST["opcion"])) {
    date_default_timezone_set('America/Bogota');
    $producto = (isset($_POST["producto"])) ? $_POST['producto'] : null;
    $producto_precio = (isset($_POST["producto_precio"])) ? $_POST['producto_precio'] : null;
    $editar_producto = (isset($_POST["editar_producto"])) ? $_POST['editar_producto'] : null;
    $id_producto = (isset($_POST["id_producto"])) ? $_POST['id_producto'] : null;
    $producto_precio_editado = (isset($_POST["editar_producto_precio"])) ? $_POST['editar_producto_precio'] : null;
    $cliente_nombre = (isset($_POST["cliente_nombre"])) ? $_POST['cliente_nombre'] : null;
    $cliente_telefono = (isset($_POST["cliente_telefono"])) ? $_POST['cliente_telefono'] : null;
    $cliente_cedula = (isset($_POST["cliente_cedula"])) ? $_POST['cliente_cedula'] : null;
    $cliente_nombre_editado = (isset($_POST["editar_cliente_nombre"])) ? $_POST['editar_cliente_nombre'] : null;
    $cliente_telefono_editado = (isset($_POST["editar_cliente_telefono"])) ? $_POST['editar_cliente_telefono'] : null;
    $cliente_cedula_editado = (isset($_POST["editar_cliente_cedula"])) ? $_POST['editar_cliente_cedula'] : null;
    $id_cliente = (isset($_POST["id_cliente"])) ? $_POST['id_cliente'] : null;
    $total = isset($_POST["total"]) ? $_POST["total"] : "0";
    $saldo_pendiente = isset($_POST["saldo_pendiente"]) ? $_POST["saldo_pendiente"] : "0";
    $abono = isset($_POST["abono"]) ? $_POST["abono"] : "0";
    $abono_nuevo = isset($_POST["abono_nuevo"]) ? $_POST["abono_nuevo"] : "0";
    $fecha_actual = date('Y-m-d');
    $hora_actual = date('H:i A');
    $factura_productos_json = $_POST['factura_productos'] ?? null;
    $factura_productos = isset($factura_productos_json) ? json_decode($factura_productos_json, true) : null;
    $inventario_productos_json = $_POST['inventario_productos'] ?? null;
    $inventario_productos = isset($inventario_productos_json) ? json_decode($inventario_productos_json, true) : null;
    $fecha_creacion = $fecha_actual . " - " . $hora_actual;
    $id_factura = isset($_POST["id_factura"]) ? $_POST["id_factura"] : null;
    $cambio = isset($_POST["cambio"]) ? $_POST["cambio"] : null;
    $estado = isset($_POST["estado"]) ? $_POST["estado"] : null;
    $datos =
        [
            'nombre_producto_editado' => $editar_producto,
            'nombre_producto' => $producto,
            'producto_precio' => $producto_precio,
            'producto_precio_editado' => $producto_precio_editado,
            'cliente_nombre' => $cliente_nombre,
            'cliente_cedula' => $cliente_cedula,
            'cliente_telefono' => $cliente_telefono,
            'cliente_nombre_editado' => $cliente_nombre_editado,
            'cliente_cedula_editado' => $cliente_cedula_editado,
            'cliente_telefono_editado' => $cliente_telefono_editado,
            'id_cliente' => $id_cliente,
            'id_producto' => $id_producto,
            'total' => $total,
            'saldo_pendiente' => $saldo_pendiente,
            'abono' => $abono,
            'fechaCA' => $fecha_creacion,
            'id_factura' => $id_factura,
            'estado' => $estado,
            'abono_nuevo' => $abono_nuevo,
            'cambio' => $cambio,
        ];

    if ($_POST["opcion"] == "RegistrarProducto") :
        $respuesta = new CenaControlador();
        $respuesta = $respuesta->RegistrarProducto($datos);
        if ($respuesta) {
            echo 1;
        } else {
            echo 2;
        }
    elseif ($_POST["opcion"] == "ListarProductos") :
        $respuesta = new CenaControlador();
        $respuesta = $respuesta->ListarProductos();
        echo json_encode($respuesta, JSON_UNESCAPED_UNICODE);
    elseif ($_POST["opcion"] == "ActualizarProducto") :
        $respuesta = new CenaControlador();
        $respuesta = $respuesta->ActualizarProducto($datos);
        if ($respuesta) {
            echo 1;
        } else {
            echo 2;
        }
    elseif ($_POST["opcion"] == "EliminarProducto") :
        $respuesta = new CenaControlador();
        $respuesta = $respuesta->EliminarProducto($id_producto);
        if ($respuesta) {
            echo 1;
        } else {
            echo 2;
        }
    elseif ($_POST["opcion"] == "RegistrarCliente") :
        $respuesta = new CenaControlador();
        $respuesta = $respuesta->RegistrarCliente($datos);
        if ($respuesta) {
            echo 1;
        } else {
            echo 2;
        }
    elseif ($_POST["opcion"] == "ListarCliente") :
        $respuesta = new CenaControlador();
        $respuesta = $respuesta->ListarCliente();
        echo json_encode($respuesta, JSON_UNESCAPED_UNICODE);
    elseif ($_POST["opcion"] == "ActualizarCliente") :
        $respuesta = new CenaControlador();
        $respuesta = $respuesta->ActualizarCliente($datos);
        if ($respuesta) {
            echo 1;
        } else {
            echo 2;
        }
    elseif ($_POST["opcion"] == "EliminarCliente") :
        $respuesta = new CenaControlador();
        $respuesta = $respuesta->EliminarCliente($id_cliente);
        if ($respuesta) {
            echo 1;
        } else {
            echo 2;
        }
    elseif ($_POST["opcion"] == "RegistrarFactura") :
        $respuesta = new CenaControlador();
        $respuesta = $respuesta->RegistrarFactura($datos, $factura_productos);
        echo $respuesta;
    elseif ($_POST["opcion"] == "ConsultarFactura") :
        $respuesta = new CenaControlador();
        $respuesta = $respuesta->ConsultarFactura($datos);
        echo json_encode($respuesta, JSON_UNESCAPED_UNICODE);
    elseif ($_POST["opcion"] == "ConsultarHistorialFactura") :
        $respuesta = new CenaControlador();
        $respuesta = $respuesta->ConsultarHistorialFactura();
        echo json_encode($respuesta, JSON_UNESCAPED_UNICODE);
    elseif ($_POST["opcion"] == "EliminarFactura") :
        $respuesta = new CenaControlador();
        $respuesta = $respuesta->EliminarFactura($id_factura);
        if ($respuesta) {
            echo 1;
        } else {
            echo 2;
        }
    elseif ($_POST["opcion"] == "GuardarAbono") :
        $respuesta = new CenaControlador();
        $respuesta = $respuesta->GuardarAbono($datos);
        if ($respuesta) {
            echo 1;
        } else {
            echo 2;
        }
    elseif ($_POST["opcion"] == "ListarInventario") :
        $respuesta = new CenaControlador();
        $respuesta = $respuesta->ListarInventario();
        echo json_encode($respuesta, JSON_UNESCAPED_UNICODE);
    elseif ($_POST["opcion"] == "ActualizarInventario") :
        $respuesta = new CenaControlador();
        $respuesta = $respuesta->ActualizarInventario($inventario_productos);
        if ($respuesta) {
            echo 1;
        } else {
            echo 2;
        }
    endif;
}
