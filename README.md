# Proyecto de Gestión de Usuarios y Tareas

Este proyecto incluye servicios de backend para la gestión de usuarios y tareas, así como una aplicación frontend para interactuar con estos servicios. Todo se ejecuta usando Docker Compose para facilitar la configuración y ejecución.

## Instrucciones para Ejecutar el Proyecto

### Requisitos

- Docker
- Docker Compose

### Pasos para Ejecutar

1. **Clonar el Repositorio**

   Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. **Construir y Ejecutar los Servicios con Docker Compose**

   Desde el directorio raíz del proyecto, ejecuta:
   ```bash
   docker-compose up --build
   ```

   Esto descargará las imágenes necesarias, construirá los contenedores y levantará todos los servicios definidos en `docker-compose.yml`.

### Servicios Disponibles

1. **MongoDB**
   - Puerto: `27017`

2. **User Service (Gestión de Usuarios)**
   - Puerto: `3000`
   - URL Base: `http://localhost:3000`
   - Endpoints:
     - `POST /api/users/register`: Registrar un nuevo usuario
     - `POST /api/users/login`: Autenticar un usuario

3. **Task Service (Gestión de Tareas)**
   - Puerto: `3001`
   - URL Base: `http://localhost:3001`
   - Endpoints:
     - `GET /api/tasks`: Obtener las tareas del usuario autenticado
     - `POST /api/tasks`: Crear una nueva tarea
     - `PUT /api/tasks/{taskId}`: Actualizar una tarea existente
     - `DELETE /api/tasks/{taskId}`: Eliminar una tarea existente

4. **Frontend (Aplicación React)**
   - Puerto: `4000`
   - URL: `http://localhost:4000`

### Notas Adicionales

- Asegúrate de tener Docker y Docker Compose instalados en tu máquina antes de ejecutar el proyecto.
- Si encuentras algún problema durante la ejecución, revisa los logs de los contenedores con:
  ```bash
  docker-compose logs <nombre_del_contenedor>
  ```