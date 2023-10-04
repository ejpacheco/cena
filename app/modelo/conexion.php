<?php
//conexion a base de datos
class Conexion{
    public  static function conectar(){
        $link = new PDO("mysql:host=localhost; dbname=cena", "root", "");
        return $link;
    }
}
