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

## Mejoras posibles o problemas conocidos

* ~~El seeder de roles da problemas cuando lo migras, habria que separarlo en dos diferentes~~. Corregido
* El archivo de routas es un desastre, es posible que sea una gran idea ordenarlo...
* Dentro de User model se puede añadir un metodo setter de Sequelize para encriptar la contraseña ahi y eliminarlo del auth.js middleware...