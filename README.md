# 🧪 Project Nest - Backend API (NestJS + Prisma + MySQL)

## 🚀 Requisitos

- [Docker](https://www.docker.com/products/docker-desktop) 
- Node.js 

---

## ⚙️ Configuración y ejecución con Docker Compose

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/andresmurillo13/project-nest.git
   cd project-nest
   ```

2. **Instala las dependencias del proyecto:**

   ```bash
   npm install
   ```

3. **Levanta los servicios (API y base de datos):**

   ```bash
   docker-compose up -d
   ```

   Esto hará:
   - Levantar MySQL en segundo plano (detach).
   - Levantar Adminer visualizador de la base de datos.

4. **Inicia la aplicación NestJS:**

   ```bash
   npm run start:dev
   ```

   Esto hará:
   - Aplicar migraciones Prisma automáticamente.
   - Levantar el proyecto localmente.

La API estará disponible en: [http://localhost:3000](http://localhost:3000)

- Puedes consultar y probar los endpoints con la colección pública de Postman aquí:  
  [Colección Postman](https://bold-station-575735.postman.co/workspace/Team-Workspace~05fd5fc0-105b-4f1e-8fc0-30dc9d605d6d/collection/24385552-d1947479-b6ec-4cfd-b1b3-1090f6806290?action=share&creator=24385552)

---

## 🛠️ Endpoints principales

- `POST /users`  
  Crear un nuevo usuario  
  **Body ejemplo:**
  ```json
  {
    "name": "Juan Pérez",
    "email": "juan.perez@example.com"
  }
  ```

- `POST /messages`  
  Crear un mensaje asociado a un usuario  
  **Body ejemplo:**
  ```json
  {
    "content": "Hola, este es un mensaje de prueba",
    "userId": 1
  }
  ```

- `GET /users/:id`  
  Listar los mensajes de un usuario  
  **Ejemplo:**  
  `GET http://localhost:3000/users/1`

---

## 🗄️ Visualizar la base de datos

Tienes dos opciones recomendadas:

### 1. Usando Adminer (interfaz web en Docker)

- Accede en tu navegador a: [http://localhost:8080](http://localhost:8080)
- Usa estas credenciales:
  - **Sistema:** MySQL
  - **Servidor:** `db`
  - **Usuario:** `root`
  - **Contraseña:** `root`
  - **Base de datos:** `nest_db`

> Nota: El valor `db` en "Servidor" funciona porque Adminer y MySQL están en la misma red interna de Docker Compose.

---

### 2. Usando TablePlus (o cualquier cliente de escritorio)

- **Host:** `localhost`
- **Puerto:** `3306`
- **Usuario:** `root`
- **Contraseña:** `root`
- **Base de datos:** `nest_db`

> Si usas otro cliente (DBeaver, MySQL Workbench, etc.), los datos de conexión son los mismos que



