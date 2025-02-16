# proyecto-final-mod3

## Tabla de contenido Proyecto Final Módulo 3
- [proyecto-final-mod3](#proyecto-final-mod3)
  - [Tabla de contenido Proyecto Final Módulo 3](#Tabla-de-contenido-Proyecto-Final-Módulo-3)
  - [Introducción](#Introducción)
  - [Ramas usadas en el proyecto](#Ramas-usadas-en-el-proyecto)
  - [Características](#Características)
  - [Características de las partes del proyecto](#Características-de-las-partes-del-proyecto)
  - [Tecnologías usadas](#Tecnologías-usadas)
  - [Puesta en marcha o instalación](#Puesta-en-marcha-o-instalación)
  - [Mejoras Futuras](#Mejoras-Futuras)
  - [Contribuciones](#Contribuciones)

## Introducción
Este proyecto está compuesto por dos partes principales. La Parte 1 consiste en la resolución de 20 algoritmos utilizando JavaScript. La Parte 2 es el desarrollo de una página web interactiva que se conecta a una API pública y permite realizar operaciones como obtener, agregar, editar y eliminar datos. 
La segunda parte del proyecto implementa una página web que muestra una lista de productos y permite al usuario interactuar con ellos. Además, se implementó un login para identificar al usuario, aunque en este proyecto no se incluyen funcionalidades de compra o detalles adicionales, lo que podría ser desarrollado en una fase futura.

El repositorio está organizado de la siguiente manera:
- *algoritmos*: Contiene las soluciones a los 20 algoritmos propuestos.
- *ProyMod3*: Contiene el código para la página web interactiva.

## Ramas usadas en el proyecto
A continuación, se describen las ramas que se habrían utilizado para simular un flujo de trabajo profesional, aunque en este proyecto solo se han usado las ramas main y develop. Estas ramas adicionales podrían haberse implementado si el proyecto hubiera requerido un manejo más granular del desarrollo de nuevas funcionalidades.

- **main**: Rama principal y estable del proyecto, donde se encuentra la versión lista para producción. Esta rama siempre debe estar en un estado funcional y estable.

- **develop**: Rama donde se integran las nuevas características y cambios antes de ser fusionados con la rama main. Es la rama base para el desarrollo y prueba de nuevas funcionalidades.

- **feature/pagina-principal** (Ejemplo hipotético): Rama destinada al desarrollo de la interfaz principal de la página. Esta rama se utilizaría para trabajar en la visualización de productos obtenidos desde una API.

- **feature/login** (Ejemplo hipotético): Rama enfocada en la implementación de la funcionalidad de login, para permitir la identificación de usuarios y control de acceso a la aplicación.

- **feature/funcionalidades-api** (Ejemplo hipotético): Rama dedicada a la implementación de funciones que permiten interactuar con la API, como mostrar, agregar, editar y eliminar productos.

## Características
  
- *HTML Semántico*: El contenido está estructurado con etiquetas HTML5 apropiadas, como <header>, <footer>, <section>, etc.
- *CSS Anidado*: Se utiliza CSS para dar estilo a los elementos de la página, con un enfoque en anidación para mayor organización y control de los estilos.
- *Responsive Design*: El diseño se adapta a diferentes tipos de visualizaciones, garantizando una experiencia óptima para el usuario.
- *Navegación Dinámica*: Se incluyen enlaces rápidos a diferentes secciones de la página (login).
- *Animaciones y Efectos*: Se incorporan transiciones, efectos visuales y animaciones con CSS para mejorar la experiencia del usuario.
- *Favicon* : Se diseñó el favicon utilizando una herramienta en línea especializada en la creación de logotipos para la empresa PrimeZone. Este favicon se muestra en la pestaña del navegador, mejorando la identidad visual del proyecto y logrando una mayor similitud con la marca de la empresa. Al agregar el favicon, se asegura una experiencia de usuario más profesional y consistente en la navegación.

## Características de las partes del proyecto 

**Parte 1: Resolución de 20 algoritmos**
Los algoritmos resueltos en esta parte son problemas lógicos que se resuelven usando JavaScript. Los archivos están organizados dentro de la carpeta algoritmos, con nombres como ejercicio1.js, ejercicio2.js, etc.

**Parte 2: Página Web Interactiva**
En esta parte se desarrolla una página web que consume datos de una API pública. Las funcionalidades implementadas son:
- **Mostrar datos (GET)**: Los productos obtenidos de la API se muestran en una tabla en la interfaz de usuario.
- **Añadir datos (POST)**: Permite al usuario agregar nuevos productos mediante un formulario.
- **Editar datos (PUT)**: Los usuarios pueden actualizar la información de los productos existentes.
- **Eliminar datos (DELETE)**: Se incluye la opción para eliminar productos.
Además, se implementó un sistema de login para que los usuarios puedan autenticarse, aunque no se ha definido ninguna funcionalidad distinta con los usuarios no identificados, simplemente al realizar esta acción se redirige a la página principal donde se muestran los productos.

## Tecnologías usadas

- HTML5.
- CSS Vanilla 
  - CSS Anidado.
- JavaScript
  - JavaScript (Fetch API): Uso de JavaScript para interactuar con la API pública mediante peticiones GET, POST, PUT y DELETE.
- Vite: Se utilizó Vite para el desarrollo de la segunda parte del proyecto, proporcionando un entorno rápido y optimizado para la creación de la página web interactiva.

## Puesta en marcha o instalación

1. Clona el repositorio (https://github.com/EliGlezS/proyecto-final-mod3.git).
2. **Parte 1: Algoritmos**:
   - Los algoritmos están en la carpeta algoritmos. No es necesario ningún entorno especial para ejecutarlos. Solo debes abrir el HTML de algoritmos y seleccionar Open with Live Server o hacer clic en el icono Go Live que aparece en la esquina inferior derecha de VSCode, esto abrirá el archivo HTML en tu navegador. Si quieres ver los resultados de los algoritmos, abre la Consola del navegador, descomenta uno a uno los archivos donde se han realizado los algoritmos y observa los resultados (No olvides comentar nuevamente las funciones o los prompt para no interferir con tu experiencia de visualizar cada uno de ellos por separado).
3. **Parte 2: Página Web Interactiva**:
   - Si deseas trabajar o visualizar la página web, navega a la carpeta ProyMod3.
   - Instala las dependencias con Vite (si aún no lo has hecho):
     npm install
   - Luego, para iniciar el servidor de desarrollo de Vite, corre el siguiente comando:
     npm run dev
   - Abre tu navegador y visita el local host que aparece después de introducir el comando anterior, a continuación podrás ver la página en acción.
   **Si deseas realizar cambios**
   Crea una nueva rama donde realizar tus cambios, usando el siguiente comando:  git checkout -b nombre-de-tu-rama.

## Mejoras Futuras
Algunas posibles mejoras para este proyecto son:
- Implementar la funcionalidad de compra de productos, así como incorporar un sistema de carrito de compra.
- Mejorar la interfaz de usuario con más animaciones y efectos visuales.
- Implementar la funcionalidad al input de search product (header).
- Crear un menú interno para los usuarios autenticados.

## Contribuciones
Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, por favor crea un "pull request" con tus sugerencias o mejoras.







