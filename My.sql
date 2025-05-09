CREATE DATABASE consultoria;

USE consultoria;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

-- Exemplo de usuário:
INSERT INTO usuarios (username, password) VALUES ('admin', '1234');

CREATE TABLE usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(100) UNIQUE NOT NULL,
  senha VARCHAR(255) NOT NULL,
  token_recuperacao VARCHAR(255),
  token_data TIMESTAMP
);
