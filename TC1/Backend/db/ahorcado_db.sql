DROP DATABASE IF EXISTS ahorcado_db;
CREATE DATABASE ahorcado_db;
USE ahorcado_db;

CREATE TABLE palabras(
    id INT PRIMARY KEY AUTO_INCREMENT,
    palabra VARCHAR(50) NOT NULL
);

INSERT INTO palabras(palabra) 
VALUES
('hola'),
('mundo'),
('perro'),
('gato'),
('casa'),
('carro'),
('computadora'),
('telefono'),
('teclado'),
('raton'),
('monitor'),
('pantalla'),
('ventana'),
('puerta'),
('silla'),
('mesa'),
('lampara'),
('foco'),
('cama'),
('almohada'),
('cobija'),
('cobertor'),
('sabana'),
('toalla'),
('jabon'),
('shampoo'),
('cepillo'),
('peine'),
('espejo'),
('lavabo'),
('regadera'),
('tina'),
('cortina'),
('candado'),
('llave ');


CREATE TABLE partidas(
    id INT PRIMARY KEY AUTO_INCREMENT,
    jugador_1 VARCHAR(50) NOT NULL,
    jugador_2 VARCHAR(50) NOT NULL,
    ganador VARCHAR(50), 
    rondas_completas INT DEFAULT 0,
    tiempo_total DECIMAL(10,2) DEFAULT 0.00,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE rondas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    partida_id INT,
    ronda_numero INT NOT NULL,
    jugador VARCHAR(50) NOT NULL,
    palabra_asignada VARCHAR(50) NOT NULL,
    tiempo DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (partida_id) REFERENCES partidas(id)
);

