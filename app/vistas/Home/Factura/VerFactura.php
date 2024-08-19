<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif; /* Fuente sans serif para mejor legibilidad */
            font-size: 14px; /* Tamaño de fuente ajustado para mejor claridad en impresión térmica */
            line-height: 1.4; /* Aumentar altura de línea para mejorar la legibilidad */
        }
        table {
            width: 100%;
            border-collapse: separate; /* Cambiar a border-collapse: separate para usar border-spacing */
            border-spacing: 0 8px; /* Espacio entre las filas de la tabla */
        }
        th, td {
            padding: 8px; /* Espacio interno para separar el texto de los bordes */
            border-bottom: 1px solid #ddd; /* Línea sutil para separación de filas */
        }
        th {
            font-size: 11px; /* Tamaño de letra para encabezados */
            background-color: #f4f4f4; /* Fondo gris claro para encabezados */
        }
        td {
            font-size: 12px; /* Tamaño de letra para resultados */
        }
        thead th {
            font-weight: bold;
        }
        tfoot th {
            background-color: #f4f4f4;
            font-weight: bold;
        }
        .separator {
            border: none;
            padding: 8px 0; /* Espacio para separación de secciones */
        }
        .text-left {
            text-align: left;
        }
        /* Estilo para filas separadas con borde superior */
        tbody tr {
            border-top: 2px solid #ddd; /* Línea de separación entre filas */
        }
        /* Clase para ajustar el tamaño de la fuente solo en la celda "Total" del encabezado */
        .total-header {
            font-size: 14px; /* Tamaño de fuente ajustado */
        }
        /* Clase para ajustar el tamaño de la fuente solo en la celda "Total" del pie de página */
        .small-font {
            font-size: 15px; /* Tamaño de fuente reducido */
        }
    </style>
</head>
<body>
    <table>
        <thead>
            <tr>
                <td colspan="3" class="separator"></td>
            </tr>
            <tr>
                <th colspan="3">PANADERIA Y REPOSTERIA CENA</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="3" class="separator"></td>
            </tr>
            <tr>
                <td colspan="2"><b>Nit</b></td>
                <td>1.128.268.195</td>
            </tr>
            <tr>
                <td colspan="2"><b>Direccion</b></td>
                <td>CRA 18 58-44 Buena Esperanza Local 3</td>
            </tr>
            <tr>
                <td colspan="3" class="separator"></td>
            </tr>
            <tr>
                <td colspan="2"><b>Cliente</b></td>
                <td><label id="nombre_cliente_factura"></label></td>
            </tr>
            <tr>
                <td colspan="2"><b>Fecha</b></td>
                <td><label id="fecha_factura"></label></td>
            </tr>
            <tr>
                <td colspan="2"><b>N&#186;</b></td>
                <td><label id="numero_factura"></label></td>
            </tr>
        </tbody>
    </table>
    <table class="text-left">
        <thead>
            <tr>
                <th>Cant.</th>
                <th>Producto</th>
                <th class="total-header">Total</th> <!-- Aplicar clase total-header aquí -->
            </tr>
        </thead>
        <tbody id="LLenar_Productos_Factura">
            <!-- Aquí se llenarán los productos -->
        </tbody>
        <tfoot>
            <tr>
                <td colspan="4" class="separator"></td>
            </tr>
            <tr>
                <th colspan="2" class="small-font">Total</th>
                <td class="small-font"><label id="total_factura"></label></td>
            </tr>
            <tr>
                <th colspan="2">Abono</th>
                <td><label id="abono_factura"></label></td>
            </tr>
            <tr>
                <th colspan="2">Saldo pendiente</th>
                <td><label id="saldo_pendiente"></label></td>
            </tr>
            <tr>
                <th colspan="2">Cambio</th>
                <td><label id="cambio"></label></td>
            </tr>
            <tr>
                <th colspan="2">Bonificacion</th>
                <td><label id="bonificacion"></label></td>
            </tr>
        </tfoot>
    </table>
</body>
</html>
