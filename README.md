# miComedor servidor nodejs

Servidor que actua como proxy entre la app miComedor y un servidor Odoo.

La comunicación con Odoo se realiza a través del api odoo-xmlrpc mediante un servidor intermedio nodejs y una base de datos MySQL.

La aplicación usa https://www.npmjs.com/package/odoo-xmlrpc para acceder a la API de odoo (https://www.odoo.com/documentation/10.0/api_integration.html)


## Instalación

* Clonar este repositorio: `https://github.com/appmicomedor/app-server.git`
* Ejecutar `cd app-server`
* Ejecutar `npm install`
* Ejecutar `node server.js` para levantar el servidor nodejs.

## Configuración
Para configurar el servidor nodejs, debe generar un fichero .env en el directorio odoo-api con los siguientes parámetros de conexión a ODOO y a MySQL:
* NODE_ENV = production
* ODOO_URL  =
* ODOO_PORT = 
* ODOO_DB   = 
* ODOO_USER = 
* ODOO_PWD  =
* MYSQL_HOST = 
* MYSQL_USER = 
* MYSQL_PWD  =
* MYSQL_DB   = 
