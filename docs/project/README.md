# Django REST API (SaaS)

API para gestion de miembros (usuarios) y organizaciones

## Modelos

### Organización

- id (default)
- name
- logo
- fanpage

### User

- id (UUID)
- username
- email
- org (solo puede pertenecer a una Organización)
- birthdate (Fecha)

## API

- Debe soportar autenticacion JWT
- Documentación con Swagger
- Acceso limitado de dominios (CORS)
- Debe soportar dos ambientes DEV y PROD

### Auth Endpoints

- **POST** /api/auth/login/
- **GET** /api/auth/groups/ Listar todos los Grupos de autenticacion (Roles) sin paginación.
  - **Leader**: Acceso completo al CRUD de Usuario en su división y RU Organización
  - **Guest**: Acceso de lectura en su org.
  - **User**: RU su propio usuario

### User Endpoints

- **GET** /api/users/ Debe listar todos los usuarios de una org si el usuario es `Leader` o `Guest`.

  - Retornar todos los campos de Usuario.
  - Busqueda por name, email.
  - Todos los campos deben poder filtrarse.
  - Todos los campos deben poder ordenarse
  - Orden por defecto por fecha de creación (`date_joined`)

- **GET** /api/users/{id}/ Obtener información de Usuario

  - Debe incluir solo los campos:
    - id
    - username
    - email
    - org: (`id`, `name`)
    - birthdate

- **POST** /api/users/ Crear un usuario para la Organización
  - Se debe establacer la contraseña
  - Solo usuarios con rol `Leader` tienen acceso.
- **PATCH** /api/users/{id} Actualizar información del usuario
  - Usuario con rol `Leader` de la org.
  - Usuario propietario del recurso
- **DELETE** /api/users/{id} Eliminar usuario
  - Solo si el usuario es `Leader` de la org

### Organización Endpoints

- **GET** /api/orgs/ Listar divsiones si el usuario es Administrator (`is_superuser=True` o `is_staff=True`)
- **GET** /api/orgs/{id}/ Información de la Organización
  - Solo si el usuario es `Leader` o `Guest` de la org.
- **PATCH** /api/orgs/{id} Actualizar org
  - Solo si el usuario es `Leader` de la org.
- **GET** /api/org/{id}/users/ Listar todos los usuarios de la org
  - Si el usuario es `Leader` o `Guest`.
  - Debe retornar solo `id` y `username` del usuario

### Other Endpoints

- **GET** /api/info/ Información general del usuario y la aplicación
  - Debe retornar:
  - `id`
  - `username`
  - `org_name`
  - `public_ip`: IP publica del servidor
