#ZboxApp
=============

Aplicación para Zbox Postulación Trabajo 09/2015.

Lector de Tweets y Chat utilizando AngularJS y Firebase

##Dependencias
  
  * [Node.js](http://nodejs.org)


##Quickstart
  
  * Abrir terminal y dirigirse a carpeta donde se instalará el proyecto 
  * `git clone https://github.com/gpincheiraa/zboxapp.git o Descargar archivo Zip y copiarlo en la carpeta desead
  * ejecutar `npm install && bower install`  
  * ejecutar `npm start`

##Generar Aplicación

Aplicación Linux 
  * Ejecutar `npm run build-linux`

Aplicación Windows

  * Ejecutar `npm run build-win32`

Aplicación Mac Osx
  
  * Ejecutar npm run build-darwin`

##Desarollo

Una vez descargado el proyecto ejecutar `gulp`. Con gulp se automatiza la inyección de scripts en el archivo
index.html

###Estructura Aplicación Angular

La aplicación construida en AngularJS se encuentra en la carpeta situada en  la ruta `./client`.

Sigue la siguiente estructura de directorios

+-- client

  |   +---bower_components

  |   +---css

  |   +---modules 

  |   app.js

  |   index.html

**bower_components** es la carpeta de instalación de los paquetes de bower configurada en el archivo `.bowerrc` situado en la raíz del proyecto. 
Se recomienda utilizar siempre el comando --save cuando instalamos una paquete de bower. Ejemplo: `bower install package_name --save`  así nuestro archivo bower.json se mantiene siempre actualizado con las dependencias del proyecto.

**css** es la carpeta con los archivos de hoja de estilos.

**modules** es la carpeta donde estan todos los archivos angular separados en carpetas según funcionalidad.
Cabe destacar que utiliza transversalmente en toda la aplicación Angular, la sintáxis recomendada
por la siguiente guía de estilos: https://github.com/johnpapa/angular-styleguide

**app.js** es el archivo que contiene toda la configuración global de la aplicación Angular.

**index.html** archivo base de la aplicación.

<!-- 
##Testing

Los tests están situados en la carpeta que se encuentra en la ruta `./tests/e2e`
Cada test de integración se correponde con la carpeta modules en la ruta `./client/modules`

Para ejecutar los test de integtración necesitamos lo siguiente

* Instalar webdriver-manager como dependencia global `npm install -g webdriver-manager`
* Instalar Selenium http://www.seleniumhq.org/download/

###Ejecutar los Tests de Integración

* En una ventana de terminal ejecutar `webdriver-manager start`
* En una nueva ventana, en la raíz del proyecto ejecutar `node server-test.js` 
* Finalmente en una tercera ventana de la terminal situados en la raíz del proyecto ejecutar `protractor protractor-conf.js`

-->

##Trabajo Futuro

* Test Unitarios y de Integración
* Más Tareas Automatizadas: Linting, Serve, Build, Tests, etc.
* Autenticación con OAuth
* Integración de SASS ó COMPASS