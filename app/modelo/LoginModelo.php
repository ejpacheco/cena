<?php

require_once "conexion.php";

Class ModeloUsuarios{
    static public function ConsultarUsuario($userRE)
    {
            $z=Conexion::conectar()->prepare("SELECT U.tbl_usuario_id as id_user, U.tbl_usuario_user as user, U.tbl_usuario_con as
            con, U.tbl_usuario_nombre as nombre, U.tbl_usuario_tipo as tipo_usuario FROM tbl_usuarios as U WHERE U.tbl_usuario_user=:user");
            $z->bindParam(":user", $userRE, PDO::PARAM_STR);
            $z->execute();
            return $z->fetch();

    }
}
?>


