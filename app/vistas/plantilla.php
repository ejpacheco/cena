<?php
error_reporting(E_ALL);
ini_set('display_errors', 'On');
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>CENA</title>
   <?php
   if (isset($_GET["ruta"]) && $_GET["ruta"] != "VerFactura") :
   ?>
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link rel="stylesheet" href="assets/css/bootstrap.css">
      <link rel="stylesheet" href="assets/vendors/iconly/bold.css">
      <link rel="stylesheet" href="assets/vendors/perfect-scrollbar/perfect-scrollbar.css">
      <link rel="stylesheet" href="assets/vendors/bootstrap-icons/bootstrap-icons.css">
      <link rel="stylesheet" href="assets/css/app.css">
      <link rel="stylesheet" href="assets/vendors/sweetalert2/sweetalert2.min.css">
      <link rel="stylesheet" href="assets/vendors/choices.js/choices.min.css" />
   <?php
   endif;
   ?>
   <?php
   if (!isset($_SESSION["sesion_active"])) {
   ?>
      <link rel="stylesheet" href="assets/css/pages/auth.css">
   <?php
   }
   ?>
   <link rel="shortcut icon" href="assets/images/favicon.svg" type="image/x-icon">






</head>

<body>
   <?php
   if ((isset($_SESSION["sesion_active"])) && isset($_GET["ruta"]) && $_GET["ruta"] == "VerFactura") :
      include "app/vistas/Home/Factura/VerFactura.php";
   endif;

   if (isset($_GET["ruta"]) && $_GET["ruta"] == "prueba") :

      require_once './app/modelo/conexion.php';
      $fecha = "2023-10-07";
      $x = Conexion::conectar()->prepare("SELECT p.tbl_productos_id AS id_producto FROM tbl_productos AS p");
      $x->execute();
      $productos = $x->fetchAll(PDO::FETCH_ASSOC);

      foreach ($productos as $producto) {

         $y = Conexion::conectar()->prepare("SELECT FP.tbl_id_producto as id_producto, P.tbl_productos_nombre as nombre_producto, SUM(FP.tbl_cantidad) as cantidad, F.tbl_fecha_creacion as fecha
         FROM tbl_factura_productos as FP INNER JOIN tbl_factura as F ON FP.tbl_id_factura = F.tbl_id_factura INNER JOIN tbl_productos as P on FP.tbl_id_producto = P.tbl_productos_id
         WHERE FP.tbl_id_producto =:id_producto  AND DATE(F.tbl_fecha_creacion) = :fecha");
         $y->bindParam(":id_producto", $producto["id_producto"], PDO::PARAM_INT);
         $y->bindParam(":fecha", $fecha, PDO::PARAM_STR);
         $y->execute();
         $resultados = $y->fetchAll(PDO::FETCH_ASSOC);
         foreach ($resultados as $resultado) {
            if ($resultado["cantidad"]){
               echo $resultado["nombre_producto"]." - ". $resultado["cantidad"];
               echo "<br>";
            }

         }
      }

   endif;

   if (isset($_SESSION["sesion_active"]) && isset($_GET["ruta"]) && $_GET["ruta"] != "VerFactura" && $_GET["ruta"] != "prueba") {
      include "app/vistas/Home/Structure/Header.php";
      include "app/vistas/Home/Structure/Menu.php";
      if (isset($_GET["ruta"]) && $_GET["ruta"] == "index") :
         include "app/vistas/Home/Dashboard.php";
      elseif (isset($_GET["ruta"]) && $_GET["ruta"] == "productos") :
         include "app/vistas/Home/productos/productos.php";
      elseif (isset($_GET["ruta"]) && $_GET["ruta"] == "RegistrarClienteCena") :
         include "app/vistas/Home/Clientes/ClientesCena.php";
      elseif (isset($_GET["ruta"]) && $_GET["ruta"] == "RegistrarFactura") :
         include "app/vistas/Home/Factura/RegistrarFactura.php";
      elseif (isset($_GET["ruta"]) && $_GET["ruta"] == "ListadoDeFactura") :
         include "app/vistas/Home/Factura/ListadoDeFacturas.php";
      elseif (isset($_GET["ruta"]) && $_GET["ruta"] == "RegistrarFacturaCena") :
         include "app/vistas/Home/Factura/RegistrarFacturaCena.php";
      elseif (isset($_GET["ruta"]) && $_GET["ruta"] == "inventario") :
         include "app/vistas/Home/Inventario/Inventario.php";
      elseif (isset($_GET["ruta"]) && $_GET["ruta"] == "informe") :
         include "app/vistas/Home/Informe/Informe.php";
      elseif (isset($_GET["ruta"]) && $_GET["ruta"] == "logout") :
         include "app/vistas/Login/logout.php";
      else :
         include "app/vistas/Home/Dashboard.php";
      endif;
   } elseif (isset($_GET["ruta"]) && $_GET["ruta"] != "VerFactura"  && $_GET["ruta"] != "prueba") {
      require_once "app/controlador/LoginControlador.php";
      include "app/vistas/Login/login.php";
   } elseif (empty($_GET["ruta"])) {
      header("Location: index");
      exit;
   }
   ?>

   <?php
   if (isset($_GET["ruta"]) && $_GET["ruta"] != "VerFactura"  && $_GET["ruta"] != "prueba") :
   ?>

      <script src="assets/vendors/perfect-scrollbar/perfect-scrollbar.min.js"></script>
      <script src="assets/js/bootstrap.bundle.min.js"></script>
      <script src="assets/js/pages/dashboard.js"></script>
      <script src="assets/vendors/apexcharts/apexcharts.js"></script>
      <script src="assets/js/main.js"></script>
      <script src="assets/vendors/sweetalert2/sweetalert2.all.min.js"></script>
      <script src="assets/vendors/choices.js/choices.min.js"></script>
   <?php
   endif;
   ?>
   <script src="assets/js/cenajs/cena.js"></script>

</body>

</html>