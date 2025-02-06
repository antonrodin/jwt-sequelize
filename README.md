# Autentificación con JWT y Sequelize

Un ejemplo o boilerplate de autorización basada en JWT y Sequelize ORM de JavaScript con Roles (admin, user...ect) y políticas. Obviando lo de Express, Node, Sequelize CLI, MySQL (al ser ORM puedes utilizar Postgre, MariaDB, SQLite).

## Instalación

Primero editar el archivo ___.env__ para tu base de datos. Despues: 

```bash
# Instalar dependencias
npm install

# Crear tablas
npx sequelize-cli db:migrate

# Este ultimo si da problemas volver a ejecutar
# Abajo explicación
npx sequelize-cli db:seed:all
```

# Docker

```bash
# Comando completo
docker run --init --rm --name jwt -w /app -v ./:/app -u 1000:1000 -p 3333:3000 node:18 node app/server.js

# Comando reducido con imagen propia
docker run --init --rm --name jwt -v ./:/app -u 1000:1000 -p 3000:3000 holanode
```

# Docker Compose

Algunos comandos que se han utilizado en la tercera parte del video son estos con algo de explicación:

````bash
# Arrancar el Docker
docker compose up
# Modo detached o en segundo plano
docker compose up -d 
# Parar el contenedor
docker compose stop
# Eliminar el contenedor
docker compose down
# Si tenemos un nombre no estandar de compose.yml
docker compose -f fichero.yml up -d

# Ejecutar el comando dentro del contenedor y destruirlo despues
docker compose run --rm pako npm --version
docker compose run --rm pako npm install

# Reconstruir la imagen del contenedor
docker compose up --build

# Si tenemos el contenedor ejecutado en segundo plano
# Podemos entrar dentro, como si fuese un ssh
docker compose exec pako bash
````

## Mejoras posibles o problemas conocidos

* ~~El seeder de roles da problemas cuando lo migras, habria que separarlo en dos diferentes~~. Corregido
* El archivo de routas es un desastre, es posible que sea una gran idea ordenarlo...
* Dentro de User model se puede añadir un metodo setter de Sequelize para encriptar la contraseña ahi y eliminarlo del auth.js middleware...