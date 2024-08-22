# playwright_testing

# playwright_testing

Proyecto de Automatización de Pruebas con Playwright
Este proyecto utiliza Playwright para automatizar pruebas en una página diseñada específicamente para testear acciones de usuario, botones, menús desplegables, formularios, iFrames, y otros elementos interactivos.

Descripción
El objetivo de este proyecto es crear un conjunto robusto de pruebas automatizadas que validen la funcionalidad y la experiencia del usuario en la página de pruebas. Este proyecto está orientado a QA y se enfoca en asegurar que todos los componentes interactivos del sitio web funcionen como se espera.

Características
Acciones de Usuario: Pruebas de clics, entradas de texto, y otras interacciones de usuario.
Botones: Validación de la funcionalidad de varios botones y su comportamiento en diferentes escenarios.
Menús Desplegables (Dropdowns): Verificación de la selección de opciones y la respuesta del sitio.
Formularios: Pruebas de validación de formularios, envío y manejo de errores.
iFrames: Aseguramiento de la interacción correcta con contenido dentro de iFrames.
File upload: Testing del flujo de subir un archivo
Otros Elementos: Pruebas adicionales que cubren una variedad de otros componentes interactivos .

Requisitos
Node.js
Playwright

Instalación
Clona este repositorio:

git clone [https://github.com/tu_usuario/nombre-del-repositorio.git](https://github.com/Azulheynen/playwright_testing.git)

Instala las dependencias:
npm install

Configura Playwright (si es necesario):
npx playwright install

Ejecución de Pruebas
npx playwright test

Estructura del Proyecto
/tests: Contiene los archivos de pruebas organizados por funcionalidad.
/helpers: Funciones de utilidad y comandos personalizados para Playwright.
/config: Archivos de configuración y opciones globales para las pruebas.
