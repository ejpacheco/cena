<?php

if (isset($_POST["opcion"])) {
	require_once "../modelo/LoginModelo.php";
} else {
	//si la opcion no es mandada por ajax entra aqui
	require_once "app/modelo/LoginModelo.php";
}

class LoginControlador
{
	public function IniciarSesion()
	{
		if (isset($_POST["userRE"])) {
			if ($_POST["userRE"] != null && $_POST["passRE"] != null) {
				$userRE = $_POST["userRE"];
				$respuesta = ModeloUsuarios::ConsultarUsuario($userRE);
				if ($respuesta == false) {
					echo '<div class="alert alert-danger alert-dismissible show fade">
					Usuario o Contraseña Incorrectos.
					<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
				</div>';
				} else {
					if (($respuesta["user"] == $_POST["userRE"]) && ($respuesta["con"] == $_POST["passRE"])) :
						$datos =
						    [
							   'id_user' => $respuesta["id_user"],
							   'user' => $respuesta["user"],
							   'nombre'=>$respuesta["nombre"]
						    ];
						$_SESSION['sesion_active'] = $datos;
						echo '<script>
							    	window.location = "index";
							   </script>';
					else :
						echo '<div class="alert alert-danger alert-dismissible show fade">
						Usuario o Contraseña Incorrectos.
						<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
					</div>';
					endif;
				}
			}
		}
	}
}
