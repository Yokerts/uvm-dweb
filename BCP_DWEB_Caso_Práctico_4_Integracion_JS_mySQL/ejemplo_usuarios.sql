CREATE DATABASE ejemplo_db;

USE ejemplo_db;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100)
);

-- Insertar datos de ejemplo
INSERT INTO usuarios (nombre, email) VALUES
('Carlos Medina','carlos@example.com'),
('Ana López','ana@example.com'),
('Luis Pérez','luis@example.com');
