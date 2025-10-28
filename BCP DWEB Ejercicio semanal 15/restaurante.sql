-- Crear base de datos
CREATE DATABASE IF NOT EXISTS Restaurante;
USE Restaurante;

-- Tabla Categoria
CREATE TABLE Categoria (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    encargado VARCHAR(100)
);

-- Tabla Plato
CREATE TABLE Plato (
    id_plato INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    dificultad ENUM('Fácil','Media','Difícil'),
    foto VARCHAR(255),
    precio DECIMAL(10,2),
    id_categoria INT,
    FOREIGN KEY (id_categoria) REFERENCES Categoria(id_categoria)
);

-- Tabla Ingrediente
CREATE TABLE Ingrediente (
    id_ingrediente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    cantidad_actual DECIMAL(10,2),
    unidad_medida VARCHAR(50)
);

-- Tabla Receta
CREATE TABLE Receta (
    id_receta INT AUTO_INCREMENT PRIMARY KEY,
    id_plato INT,
    id_ingrediente INT,
    cantidad_requerida DECIMAL(10,2),
    FOREIGN KEY (id_plato) REFERENCES Plato(id_plato),
    FOREIGN KEY (id_ingrediente) REFERENCES Ingrediente(id_ingrediente)
);

-- -----------------------------
-- Insertar 10 registros en Categoria
INSERT INTO Categoria (nombre, descripcion, encargado) VALUES
('Entradas','Platos iniciales','Carlos Medina'),
('Sopas','Variedades de sopas','Ana López'),
('Platos Fuertes','Platos principales','Luis Pérez'),
('Postres','Dulces para finalizar','María Torres'),
('Bebidas','Refrescos y jugos','Jorge Ramírez'),
('Ensaladas','Platos ligeros','Sofía Morales'),
('Especiales','Platos de temporada','Raúl Gómez'),
('Mariscos','Platos de mar','Paola Vega'),
('Carnes','Carnes y cortes','Eduardo Díaz'),
('Vegetarianos','Opciones sin carne','Laura Sánchez');

-- -----------------------------
-- Insertar 10 registros en Plato
INSERT INTO Plato (nombre, descripcion, dificultad, foto, precio, id_categoria) VALUES
('Bruschetta','Pan tostado con tomate y albahaca','Fácil','bruschetta.jpg',85.50,1),
('Sopa de Tortilla','Sopa con tiras de tortilla y chile','Media','sopa_tortilla.jpg',70.00,2),
('Pollo a la Parrilla','Pollo sazonado y asado','Media','pollo_parrilla.jpg',150.00,3),
('Tiramisu','Postre italiano con café y crema','Difícil','tiramisu.jpg',95.00,4),
('Limonada','Bebida de limón natural','Fácil','limonada.jpg',35.00,5),
('Ensalada César','Lechuga, pollo y aderezo especial','Fácil','ensalada_cesar.jpg',80.00,6),
('Pizza Especial','Pizza con ingredientes seleccionados','Difícil','pizza_especial.jpg',180.00,7),
('Ceviche','Mariscos frescos con limón','Media','ceviche.jpg',160.00,8),
('Rib Eye','Corte de carne de res premium','Difícil','ribeye.jpg',250.00,9),
('Tacos Vegetarianos','Tacos con verduras y salsas','Fácil','tacos_veg.jpg',90.00,10);

-- -----------------------------
-- Insertar 10 registros en Ingrediente
INSERT INTO Ingrediente (nombre, cantidad_actual, unidad_medida) VALUES
('Tomate', 1000, 'gramos'),
('Lechuga', 500, 'gramos'),
('Pollo', 2000, 'gramos'),
('Carne de res', 1500, 'gramos'),
('Queso', 800, 'gramos'),
('Café', 300, 'gramos'),
('Limón', 2000, 'gramos'),
('Harina', 1000, 'gramos'),
('Mariscos', 1200, 'gramos'),
('Salsa especial', 500, 'ml');

-- -----------------------------
-- Insertar 10 registros en Receta
INSERT INTO Receta (id_plato, id_ingrediente, cantidad_requerida) VALUES
(1,1,150),
(1,5,50),
(2,1,100),
(2,7,50),
(3,3,250),
(3,5,30),
(4,5,50),
(4,6,30),
(5,7,200),
(6,2,100);
