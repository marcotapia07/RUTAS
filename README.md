# Laboratorio de Rutas

Este proyecto es un laboratorio para la creación de rutas utilizando Express, UUID, json-server y bcrypt en un entorno de Node.js. El proyecto incluye la configuración de varias rutas GET para manejar la información del grupo de trabajo y sus integrantes, así como la presentación de productos en formato HTML.

## Requisitos

- Node.js
- npm (Node Package Manager)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/laboratorio-rutas.git

   
# Estructura del Proyecto
server.js: Archivo principal del servidor donde se configuran las rutas.
db.json: Archivo utilizado por json-server para simular una base de datos.

# Rutas Disponibles
GET /: Presenta la información del grupo de trabajo.
GET /integrantes: Presenta la información de todos los integrantes del grupo.
GET /integrantes/:id: Presenta la información de un integrante del grupo especificado por ID.
GET /products: Presenta un HTML con algunos productos.


# Dependencias
express: Framework web para Node.js.
uuid: Biblioteca para generar identificadores únicos.
json-server: Servidor de API REST falso basado en un archivo JSON.
bcrypt: Biblioteca para el cifrado de contraseñas.

# Contribución
Si deseas contribuir a este proyecto, por favor haz un fork del repositorio, crea una rama con tu función, realiza tus cambios y envía un pull request.

# Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para obtener más información.
