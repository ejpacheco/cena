<?php

require_once "conexion.php";

class CenaModelo
{
      static public function RegistrarProducto($datos)
      {
            $y = Conexion::conectar()->prepare("SELECT count(*) FROM tbl_productos WHERE tbl_productos_nombre=:producto");
            $y->bindParam(":producto", $datos["nombre_producto"], PDO::PARAM_STR);
            $y->execute();
            $n = $y->fetchColumn();
            if ($n > 0) {
                  return false;
            } else {
                  $x = Conexion::conectar()->prepare("INSERT INTO tbl_productos(tbl_productos_id, tbl_productos_nombre, tbl_productos_precio) VALUES (null,:producto,:precio)");
                  $x->bindParam(":producto", $datos["nombre_producto"], PDO::PARAM_STR);
                  $x->bindParam(":precio", $datos["producto_precio"], PDO::PARAM_STR);

                  if ($x->execute()) {
                        return true;
                  } else {
                        return false;
                  }
            }
      }

      static public function ListarProductos()
      {
            $x = Conexion::conectar()->prepare("SELECT P.tbl_productos_id as id_producto, P.tbl_productos_nombre as nombre_producto, P.tbl_productos_precio as producto_precio, P.tbl_producto_cantidad as cantidad FROM tbl_productos as P ORDER BY P.tbl_productos_nombre");
            $x->execute();

            return $x->fetchAll(PDO::FETCH_ASSOC);
      }

      static public function ListarProductosConResultado()
      {
            $x = Conexion::conectar()->prepare("SELECT
        P.tbl_productos_id as id_producto,
        P.tbl_productos_nombre as nombre_producto,
        P.tbl_productos_precio as precio,
        P.tbl_producto_cantidad as cantidad,
        (P.tbl_productos_precio * P.tbl_producto_cantidad) as resultado
    FROM tbl_productos as P");
            $x->execute();

            $resultados = $x->fetchAll(PDO::FETCH_ASSOC);

            // Calcular el total de los resultados
            $total = 0;
            foreach ($resultados as $fila) {
                  $total += $fila['resultado'];
            }

            return [
                  'resultados' => $resultados,
                  'total' => $total
            ];
      }


      static public function ActualizarProducto($datos)
      {
            $x = Conexion::conectar()->prepare("UPDATE tbl_productos SET tbl_productos_nombre=:nombre_producto , tbl_productos_precio=:precio  WHERE tbl_productos_id=:id_producto ");
            $x->bindParam(":nombre_producto", $datos["nombre_producto_editado"], PDO::PARAM_STR);
            $x->bindParam(":precio", $datos["producto_precio_editado"], PDO::PARAM_STR);
            $x->bindParam(":id_producto", $datos["id_producto"], PDO::PARAM_INT);
            if ($x->execute()) {
                  return true;
            } else {
                  return false;
            }
      }

      static public function EliminarProducto($id)
      {
            $x = Conexion::conectar()->prepare("DELETE FROM tbl_productos WHERE tbl_productos_id=:id_producto");
            $x->bindParam(":id_producto", $id, PDO::PARAM_INT);
            if ($x->execute()) {
                  return true;
            } else {
                  return false;
            }
      }

      static public function RegistrarCliente($datos)
      {
            $x = Conexion::conectar()->prepare("INSERT INTO tbl_clientes(tbl_clientes_id, tbl_clientes_nombre, tbl_clientes_cedula, tbl_clientes_telefono) VALUES (null,:nombre,:cedula,:telefono)");
            $x->bindParam(":nombre", $datos["cliente_nombre"], PDO::PARAM_STR);
            $x->bindParam(":cedula", $datos["cliente_cedula"], PDO::PARAM_STR);
            $x->bindParam(":telefono", $datos["cliente_telefono"], PDO::PARAM_STR);

            if ($x->execute()) {
                  return true;
            } else {
                  return false;
            }
      }

      static public function ListarCliente()
      {
            $x = Conexion::conectar()->prepare("SELECT C.tbl_clientes_id as id_cliente, C.tbl_clientes_nombre as nombre_cliente, C.tbl_clientes_cedula as cedula_cliente, C.tbl_clientes_telefono as telefono_cliente FROM tbl_clientes as C");
            $x->execute();
            return $x->fetchAll(PDO::FETCH_ASSOC);
      }

      static public function ActualizarCliente($datos)
      {
            $x = Conexion::conectar()->prepare("UPDATE tbl_clientes SET tbl_clientes_nombre=:nombre_cliente ,tbl_clientes_cedula=:cedula_cliente
             ,tbl_clientes_telefono=:telefono_cliente WHERE tbl_clientes_id=:id_cliente");
            $x->bindParam(":nombre_cliente", $datos["cliente_nombre_editado"], PDO::PARAM_STR);
            $x->bindParam(":cedula_cliente", $datos["cliente_cedula_editado"], PDO::PARAM_STR);
            $x->bindParam(":telefono_cliente", $datos["cliente_telefono_editado"], PDO::PARAM_STR);
            $x->bindParam(":id_cliente", $datos["id_cliente"], PDO::PARAM_INT);
            if ($x->execute()) {
                  return true;
            } else {
                  return false;
            }
      }

      static public function EliminarCliente($id)
      {
            $x = Conexion::conectar()->prepare("DELETE FROM tbl_clientes WHERE tbl_clientes_id=:id_cliente");
            $x->bindParam(":id_cliente", $id, PDO::PARAM_INT);
            if ($x->execute()) {
                  return true;
            } else {
                  return false;
            }
      }

      static public function RegistrarFactura($datos, $factura_productos)
      {
            if ($datos["id_factura_anterior"]) {
                  $l = Conexion::conectar()->prepare("UPDATE tbl_factura SET tbl_saldo_pendiente=0,tbl_estado='PAGADO' WHERE tbl_id_factura=:id_factura");
                  $l->bindParam(":id_factura", $datos["id_factura_anterior"], PDO::PARAM_INT);
                  $l->execute();
            }

            $x = Conexion::conectar()->prepare("INSERT INTO tbl_factura(tbl_id_factura, tbl_id_cliente, tbl_total, tbl_abono, tbl_saldo_pendiente,tbl_cambio, tbl_bonificacion, tbl_fecha_creacion, tbl_fecha_actualizacion, tbl_estado) VALUES (null, :id_cliente , :total , :abono, :saldo_pendiente, :cambio, :bonificacion, :fecha_creacion, :fecha_actualizacion, :estado)");
            $x->bindParam(":id_cliente", $datos["id_cliente"], PDO::PARAM_INT);
            $x->bindParam(":total", $datos["total"], PDO::PARAM_STR);
            $x->bindParam(":abono", $datos["abono"], PDO::PARAM_STR);
            $x->bindParam(":bonificacion", $datos["bonificacion"], PDO::PARAM_STR);
            $x->bindParam(":saldo_pendiente", $datos["saldo_pendiente"], PDO::PARAM_STR);
            $x->bindParam(":fecha_creacion", $datos["fechaCA"], PDO::PARAM_STR);
            $x->bindParam(":fecha_actualizacion", $datos["fechaCA"], PDO::PARAM_STR);
            $x->bindParam(":estado", $datos["estado"], PDO::PARAM_STR);
            $x->bindParam(":cambio", $datos["cambio"], PDO::PARAM_STR);
            $x->execute();
            $z = Conexion::conectar()->prepare("SELECT * FROM tbl_factura ORDER BY tbl_id_factura DESC LIMIT 1");
            $z->execute();
            $ultimo_registro = $z->fetch(PDO::FETCH_ASSOC);
            $id_ultimo_registro = $ultimo_registro['tbl_id_factura'];
            foreach ($factura_productos as $producto) {
                  $id_producto = $producto['id_producto'];
                  $cantidad_producto = $producto['cantidad_producto'];
                  $valor_unitario = $producto['valor_unitario'];
                  $total_producto = $producto['total_producto'];
                  $productos_restantes = $producto['productos_restantes'];

                  $y = Conexion::conectar()->prepare("INSERT INTO tbl_factura_productos (tbl_id_factura_producto, tbl_id_factura, tbl_id_producto, tbl_cantidad, tbl_precio, tbl_total) VALUES (null," . $id_ultimo_registro . "," . $id_producto . "," . $cantidad_producto . "," . $valor_unitario . "," . $total_producto . ")");
                  $y->execute();

                  if ($cantidad_producto > 0) {
                        $total_productos_restantes = $productos_restantes - $cantidad_producto;
                        $elquis = Conexion::conectar()->prepare("UPDATE tbl_productos SET tbl_producto_cantidad=:total_productos_restantes WHERE tbl_productos_id=:id_producto");
                        $elquis->bindParam(":total_productos_restantes", $total_productos_restantes, PDO::PARAM_STR);
                        $elquis->bindParam(":id_producto", $id_producto, PDO::PARAM_INT);
                        $elquis->execute();
                  }
            }
            $m = Conexion::conectar()->prepare("INSERT INTO tbl_abonos(tbl_id_abono, tbl_id_factura, tbl_valor_abono,tbl_fecha_abono) VALUES (null,:id_factura,:valor_abono,:fecha_abono)");
            $m->bindParam(":id_factura", $id_ultimo_registro, PDO::PARAM_INT);
            $m->bindParam(":valor_abono", $datos["abono"], PDO::PARAM_STR);
            $m->bindParam(":fecha_abono", $datos["fechaCA"], PDO::PARAM_STR);
            $m->execute();

            return $id_ultimo_registro;
      }


      static public function ConsultarFactura($datos)
      {
            $x = Conexion::conectar()->prepare("SELECT F.tbl_id_factura as id_factura, F.tbl_cambio as cambio, F.tbl_total as total, F.tbl_bonificacion as bonificacion, F.tbl_abono as abono, F.tbl_saldo_pendiente as saldo_pendiente, F.tbl_fecha_creacion as fecha_creacion, F.tbl_fecha_actualizacion as fecha_actualizacion, FP.tbl_cantidad as cantidad, FP.tbl_precio as precio, FP.tbl_total as total_producto, P.tbl_productos_nombre as nombre_producto, C.tbl_clientes_nombre as nombre_cliente FROM tbl_factura as F INNER JOIN tbl_factura_productos as FP on F.tbl_id_factura=FP.tbl_id_factura INNER JOIN tbl_productos as P on FP.tbl_id_producto=P.tbl_productos_id INNER JOIN tbl_clientes as C on F.tbl_id_cliente=C.tbl_clientes_id WHERE F.tbl_id_factura=:id_factura");
            $x->bindParam(":id_factura", $datos["id_factura"], PDO::PARAM_INT);
            $x->execute();
            return $x->fetchAll(PDO::FETCH_ASSOC);
      }

      static public function ConsultarHistorialFactura()
      {
            $x = Conexion::conectar()->prepare("SELECT F.tbl_id_factura as id_factura, F.tbl_total as total, F.tbl_abono as abono, F.tbl_saldo_pendiente as saldo_pendiente, F.tbl_fecha_creacion as fecha_creacion, F.tbl_estado as estado, C.tbl_clientes_nombre as nombre_cliente
            FROM tbl_factura as F
            INNER JOIN tbl_clientes as C on F.tbl_id_cliente=C.tbl_clientes_id
            ORDER BY fecha_creacion DESC;");
            $x->execute();
            return $x->fetchAll(PDO::FETCH_ASSOC);
      }

      static public function EliminarFactura($id)
      {
            $x = Conexion::conectar()->prepare("DELETE FROM tbl_factura WHERE tbl_id_factura=:id_factura");
            $x->bindParam(":id_factura", $id, PDO::PARAM_INT);
            $x->execute();

            $y = Conexion::conectar()->prepare("DELETE FROM tbl_factura_productos WHERE tbl_id_factura=:id_factura");
            $y->bindParam(":id_factura", $id, PDO::PARAM_INT);
            $y->execute();

            $z = Conexion::conectar()->prepare("DELETE FROM tbl_abonos WHERE tbl_id_factura=:id_factura");
            $z->bindParam(":id_factura", $id, PDO::PARAM_INT);
            $z->execute();

            return true;
      }

      static public function GuardarAbono($datos)
      {
            $x = Conexion::conectar()->prepare("UPDATE tbl_factura SET tbl_saldo_pendiente=:saldo_pendiente , tbl_abono=:abono_nuevo, tbl_estado=:estado  WHERE tbl_id_factura=:id_factura");
            $x->bindParam(":id_factura", $datos["id_factura"], PDO::PARAM_INT);
            $x->bindParam(":saldo_pendiente", $datos["saldo_pendiente"], PDO::PARAM_STR);
            $x->bindParam(":abono_nuevo", $datos["abono"], PDO::PARAM_STR);
            $x->bindParam(":estado", $datos["estado"], PDO::PARAM_STR);
            $x->execute();

            $m = Conexion::conectar()->prepare("INSERT INTO tbl_abonos(tbl_id_abono, tbl_id_factura, tbl_valor_abono,tbl_fecha_abono) VALUES (null,:id_factura,:valor_abono,:fecha_abono)");
            $m->bindParam(":id_factura", $datos["id_factura"], PDO::PARAM_INT);
            $m->bindParam(":valor_abono", $datos["abono_nuevo"], PDO::PARAM_STR);
            $m->bindParam(":fecha_abono", $datos["fechaCA"], PDO::PARAM_STR);
            $m->execute();

            return true;
      }

      static public function ListarInventario()
      {
            $x = Conexion::conectar()->prepare("SELECT T.tbl_productos_id as id_producto, T.tbl_productos_nombre as nombre_producto, T.tbl_producto_cantidad as cantidad FROM tbl_productos as T ORDER BY T.tbl_productos_nombre");
            $x->execute();

            return $x->fetchAll(PDO::FETCH_ASSOC);
      }

      static public function ActualizarInventario($datos)
      {
            foreach ($datos as $key => $producto) {
                  $x = Conexion::conectar()->prepare("UPDATE tbl_productos SET tbl_producto_cantidad = :cantidad WHERE tbl_productos_id=:id_producto");
                  $x->bindParam(":id_producto", $key, PDO::PARAM_INT);
                  $x->bindParam(":cantidad", $producto, PDO::PARAM_STR);
                  $x->execute();
            }
            return true;
      }

      static public function ConsultarInformeGeneral($fecha)
      {
            $x = Conexion::conectar()->prepare("SELECT SUM(tbl_total) AS suma_total, SUM( CASE WHEN tbl_saldo_pendiente = 0 THEN tbl_abono ELSE 0 END)
            AS suma_abono, SUM(tbl_saldo_pendiente) as suma_saldo_pendiente, SUM(tbl_cambio) as suma_cambio FROM tbl_factura as F
             WHERE DATE(F.tbl_fecha_creacion) =:fecha");
            $x->bindParam(":fecha", $fecha, PDO::PARAM_STR);
            $x->execute();

            $y = Conexion::conectar()->prepare("SELECT SUM(A.tbl_valor_abono) as suma_abono FROM tbl_abonos as A WHERE DATE(A.tbl_fecha_abono) =:fecha");
            $y->bindParam(":fecha", $fecha, PDO::PARAM_STR);
            $y->execute();

            $Informe = [
                  "factura" => $x->fetch(PDO::FETCH_ASSOC),
                  "abono" => $y->fetch(PDO::FETCH_ASSOC),
            ];

            return $Informe;
      }


      static public function ConsultarInformeDeProductos($fecha)
      {
            $x = Conexion::conectar()->prepare("SELECT p.tbl_productos_id AS id_producto FROM tbl_productos AS p");
            $x->execute();
            $productos = $x->fetchAll(PDO::FETCH_ASSOC);
            $respuestaF = [];
            $monto_total = 0;
            foreach ($productos as $producto) {
                  $y = Conexion::conectar()->prepare("SELECT FP.tbl_id_producto as id_producto, P.tbl_productos_nombre as nombre_producto, SUM(FP.tbl_cantidad) as cantidad, F.tbl_fecha_creacion as fecha
               ,SUM(FP.tbl_cantidad * P.tbl_productos_precio) as monto_total, P.tbl_productos_precio as precio FROM tbl_factura_productos as FP INNER JOIN tbl_factura as F ON FP.tbl_id_factura = F.tbl_id_factura INNER JOIN tbl_productos as P on FP.tbl_id_producto = P.tbl_productos_id
               WHERE FP.tbl_id_producto =:id_producto  AND DATE(F.tbl_fecha_creacion) = :fecha");
                  $y->bindParam(":id_producto", $producto["id_producto"], PDO::PARAM_INT);
                  $y->bindParam(":fecha", $fecha, PDO::PARAM_STR);
                  $y->execute();
                  $resultados = $y->fetchAll(PDO::FETCH_ASSOC);
                  $resultadoF = [];
                  foreach ($resultados as $resultado) {
                        if ($resultado["cantidad"]) {
                              $respuesta = [
                                    "nombre_producto" => $resultado["nombre_producto"],
                                    "cantidad" => $resultado["cantidad"],
                                    "monto_total" => $resultado["monto_total"],
                                    "precio" => $resultado["precio"]
                              ];
                              $monto_total = $monto_total + $resultado["monto_total"];
                              $respuestaF[] = $respuesta;
                        }
                  }
                  $resultadoF[] = [
                        "informe_producto" => $respuestaF,
                        "monto_total" => $monto_total
                  ];
            }

            return $resultadoF;
      }

      static public function ConsultarInformeGeneralPorPeriodos($fechaI, $fechaF)
      {
            $x = Conexion::conectar()->prepare("SELECT SUM(tbl_total) AS suma_total, SUM(tbl_abono) as suma_abono, SUM(tbl_saldo_pendiente) as suma_saldo_pendiente, SUM(tbl_cambio) as suma_cambio
            FROM tbl_factura as F  WHERE DATE(F.tbl_fecha_creacion) >= :fechaI and DATE(F.tbl_fecha_creacion) <= :fechaF");
            $x->bindParam(":fechaI", $fechaI, PDO::PARAM_STR);
            $x->bindParam(":fechaF", $fechaF, PDO::PARAM_STR);
            $x->execute();

            return $x->fetch(PDO::FETCH_ASSOC);
      }

      static public function ConsultarSaldoPendiente($data)
      {
            $x = Conexion::conectar()->prepare("SELECT F.tbl_saldo_pendiente as saldo_pendiente, F.tbl_id_factura as id_factura
             FROM tbl_factura as F WHERE F.tbl_id_cliente=:id_cliente and F.tbl_estado='PENDIENTE'");
            $x->bindParam(":id_cliente", $data, PDO::PARAM_INT);
            $x->execute();

            return $x->fetch(PDO::FETCH_ASSOC);
      }
}
