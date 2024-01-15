# Luna - RestFull API en Node.js

## Instalación

Antes de comenzar con la instalación de Luna, asegúrate de tener instalados Node.js y la base de datos MSSQL en tu sistema.

1. **Node.js:**
   Asegúrate de tener Node.js instalado en tu máquina. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).

2. **Base de datos MSSQL:**
   Asegúrate de tener la base de datos MSSQL instalada y configurada en tu entorno. Puedes obtener más información en [Microsoft SQL Server](https://www.microsoft.com/sql-server).

3. **Instalación de paquetes:**
   Ejecuta el siguiente comando para descargar los paquetes necesarios utilizados en la aplicación:

   ```bash
   npm install
   ```

## Creación de la base de datos

Utiliza el siguiente comando para crear la base de datos requerida por Luna:

```bash
npm run db:create
```

## Migraciones de la base de datos

Realiza las migraciones necesarias ejecutando el siguiente comando:

```bash
npm run db:migrate
```

Para deshacerla, utiliza el comando:

```bash
npm run db:migrate:undo
```

## Inicio de la aplicación

Finalmente, inicia la aplicación ejecutando:

```bash
npm start
```
