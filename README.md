# Portafolio - Gabriel Paz

## Descripción
Este proyecto es un portafolio personal desarrollado para demostrar mis habilidades y proyectos como Desarrollador Junior Front-End. Incluye ejemplos interactivos de mis trabajos más destacados y detalles sobre las tecnologías que utilizo, tales como Angular, React y diversas herramientas de desarrollo web.

## Tecnologías Utilizadas

### Frontend:
- **Angular**: Marco de trabajo utilizado para construir la interfaz de usuario debido a su eficiencia y extenso ecosistema.
- **TypeScript**: Lenguaje de programación principal para Angular, proporcionando tipado estático que mejora la mantenibilidad del código.
- **SCSS**: Utilizado para estilos avanzados y mantenibles.
- **Angular Material**: Biblioteca de componentes de UI para integración rápida de elementos de interfaz de usuario estéticamente agradables.

### Testing:
- **Jasmine**: Marco de trabajo para pruebas unitarias, utilizado para probar componentes y servicios de Angular.
- **Karma**: Ejecutor de pruebas utilizado para lanzar instancias de navegadores y ejecutar pruebas Jasmine.


## Requisitos
- Node.js
- Angular CLI

## Instalación
1. Navega al directorio del proyecto:

cd portafolio


2. Instala las dependencias necesarias:

npm install

## Uso
1. Para iniciar el servidor de desarrollo, ejecuta:

ng serve

Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si realizas cambios en los archivos del código fuente.

2. Para construir la versión de producción, ejecuta:

ng build

Los artefactos de construcción se almacenarán en el directorio `dist/`.

## Estructura del Proyecto
A continuación, se muestra un resumen de los directorios y archivos más importantes del proyecto:

**/src**
|-- /app
|   |-- /components
|   |   |-- /navbar
|   |   |-- /home
|   |   |-- /about
|   |   |-- /contact
|   |-- /models
|   |-- /services
|-- /assets
|   |-- /img
|   |-- /video
|-- /environments
|-- index.html
|-- main.ts
|-- styles.css

### Componentes
- **Navbar:** Barra de navegación utilizada en todo el proyecto.
- **Home:** Página de inicio del portafolio.
- **About:** Sección que describe información personal y profesional.
- **Contact:** Formulario y enlaces para contactarme directamente.
- **Project-Slider:** Componente con cards y modal dinamico que muestra los proyectos.

## Desarrollado por
Gabriel Paz - Desarrollador Junior especializado en tecnologías Front-End.

## Licencia
Este proyecto está bajo la Licencia ISC.

## Angular y Herramientas Adicionales
Este proyecto utiliza Angular como framework principal, aprovechando sus capacidades para construir aplicaciones robustas y eficientes.

Además, se integran herramientas como Angular Material para los componentes de la interfaz de usuario y RxJS para la gestión de estados y eventos.
