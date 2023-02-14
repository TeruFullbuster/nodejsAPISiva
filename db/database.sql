CREATE DATABASE IF NOT EXIST pruebas;

USE pruebas;

CREATE TABLE empleados{
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) DEFAULT NULL,
    apellidoP VARCHAR(45) DEFAULT NULL,
    apellidoM VARCHAR(45) DEFAULT NULL,
    celular INT(10) DEFAULT NULL,
    correo VARCHAR(50) NOT NULL,
    contrasenia VARCHAR(50) NOT NULL,
    ROL VARCHAR(6) NOT NULL,
    empresa VARCHAR DEFAULT NULL,
    tienePrestamos BIT NOT NULL,
    salario INT(50) DEFAULT NULL,
    PRIMARY KEY(id)
};

DESCRIBE empleados;

