<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif; /* Fuente sans serif para mejor legibilidad */
            font-size: 12px; /* Tamaño de fuente adecuado para impresoras térmicas */
            line-height: 1.4; /* Aumentar altura de línea para mejorar la legibilidad */
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            padding: 8px; /* Espacio interno para separar el texto de los bordes */
            border-bottom: 1px solid #ddd; /* Línea sutil para separación de filas */
        }
        th {
            font-size: 12px; /* Tamaño de letra para encabezados */
            background-color: #f4f4f4; /* Fondo gris claro para encabezados */
            font-weight: bold;
        }
        td {
            font-size: 12px; /* Tamaño de letra para resultados */
        }
        thead th {
            text-align: left;
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
    </style>
</head>
<body>
    <table>
        <thead>
            <tr>
                <td colspan="3" class="separator"></td>
            </tr>
            <tr>
                <th colspan="3">INFORME DE PRODUCTOS</th>
            </tr>
        </thead>
    </table>
    <table class="text-left">
        <thead>
            <tr>
                <th>Cant.</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody id="LLenar_Informe_Producto">
            <!-- Aquí se llenarán los productos -->
        </tbody>
        <tfoot>
            <tr>
                <td colspan="4" class="separator"></td>
            </tr>
            <tr>
                <th colspan="2">Total:&nbsp;</th>
                <td><label id="Total_Informe_Producto"></label></td>
            </tr>
        </tfoot>
    </table>
    <!-- Los párrafos se han eliminado para centrarse en la tabla -->
</body>
</html>
