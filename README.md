##---------------------------------------------in English-------------------------------------------------------------##

# 🍞 React + Vite E-commerce Starter Kit - Bakery Template
Welcome! This is a Boilerplate/Starter Kit for a basic E-commerce application developed with React (version used: 19.2.0) and Vite. While it is designed as an example for bakery businesses, you can easily adapt it to any other type of business by simply changing the logo, categories, and the product JSON data. It features a clean, scalable architecture ready for developer customization.
---

## 🛠 Prerequisites
Before starting, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
- npm
- Recommended Terminal: Git Bash

## 📦 Configuration (IMPORTANT!!!)
Configure Environment Variables:
**Step 1** - Create a file named .env in the project root (you can use .env.example as a guide). 
**Step 2** - To test the application, fill in your MockAPI and ImgBB credentials (free tiers are sufficient). Example:

VITE_MOCKAPI_URL=https://__your-mockapi-endpoint-usually-letters-and-numbers__.com/products
VITE_IMGBB_KEY=__your_imgbb_api_key-usually-just-letters-and-numbers__


**Step 3** - Fallback Code: A local products.json file is included as a backup in case you forget to test with your MockAPI and ImgBB credentials. (Details regarding the MockAPI data fields can be found in the "-📝 Developer Notes" section of this README).

__Note on Cleaning the Code:__
If you prefer not to use the local JSON fallback and only want to test via MockAPI and ImgBB, follow these steps to keep the code clean (although the code works perfectly even if you do not delete/comment these parts, as it includes a built-in fallback system; however, if API keys are provided, the application will automatically prioritize and use the MockAPI and ImgBB services):

-Delete the local JSON folder: (public/data/products.json).

-Delete the bread images for the local JSON (located in the folder: public/images/). 
These files are: baguette.png, focaccia.png, pan-concha.png, pan-de-campo.png, pan-de-corbata-danes.png, pan-de-muerto.png, pan-multigrano-redondo.png, rosca-de-reyes.png.

-Delete the default image that appears if you enter your mockapi credentials, but not your imgbb credentials: prueba-con-tus-credenciales-de-imgbb.png, which is in the folder (public/images/prueba-con-tus-credenciales-de-imgbb.png)

-Delete/comment this if in the export of “uploadToImgbb”, which is in the folder: uploadImage.js : 
  // Si no hay API KEY IMGBB, devuelve la imagen de respaldo
  if (!IMGBB_API_KEY) {
    console.warn("ImgBB Key no configurada. Usando imagen de respaldo.");
    // Aquí pones la ruta a la imagen que creaste
    return "../public/images/prueba-con-tus-credenciales-de-imgbb.png"; 
  }

-Delete/comment out the code at the beginning, and uncomment the code that appears commented out at the bottom of the products.js file in the folder (src/service/products.js).

## 📦 Installation
Follow these steps to get the project running:

- **Install dependencies:**
npm install
npm i react-router-dom

- **Start the development server:**
npm run dev

ATTENTION: If you receive a "SecurityError" or "disabled scripts" error when running npm install, try using Command Prompt or Git Bash instead of PowerShell.

---

## 🚀 Technical Features
- **Build Tool:** Vite (Ultra-fast load speeds).
- **Global State:** Context API for shopping cart management.
- **Routing:** React Router DOM for SPA navigation.
- **Data Persistence:** Ready-to-use integration with **MockAPI**.
- **Image Management:** Image upload system integrated with the **ImgBB API**.
- **Design:** Pure CSS (Responsive Design) without heavy external dependencies.
- **Admin Panel:** Functional `/admin` route for inventory management.


## 🔐 Authentication & Admin Panel
- **Protected Access:** The `/admin` route uses a wrapper component (`RutaProtegida.jsx`) that verifies the session before allowing access to the product management form.
- **Session Management:** Implemented via `AuthContext` and persisted in `sessionStorage`.
- **Logout Note:** To end the administrative session, close the current browser tab. Attempting to access `/admin` without an active session will trigger an automatic redirect to the Home page.
- **Hardcoded Admin Credentials:**
  - User: admin
  - Password: 1234
- **Consumer Focus:** "Guest Checkout" flow (no mandatory registration), optimized for conversion and scalability.


### 📂 Project Structure
src/
├── components/     # Components (Nav, Item, etc.)
├── context/        # CartContext (Cart state management)
├── services/       # API logic (MockAPI & ImgBB)
├── utils/          # Product validation logic
└── App.jsx         # Route configuration


### 📝 Developer Notes
**Data Structure:** The frontend expects JSON objects with the following structure from MockAPI: { id: objectID, name: string, price: number, category: string, description: string, imageUrl: string }.

MockAPI Product Example:
[
  {
    "id": "1",
    "name": "Round Multigrain Bread",
    "price": 5000,
    "category": "savory",
    "description": "Made with various grains for a unique flavor and texture",
    "imageUrl": "https://IMAGEN-IMGBB.png"
  }
]
ATTENTION: Product images are uploaded directly via the product form in the application, not through the ImgBB website. You only need to obtain your API key from ImgBB and add it to your .env file.


**Admin Route:** Access the management panel at http://localhost:5173/admin after logging in.

As this is a starter kit, there is no explicit logout button; close the tab to reset the admin session.

**Responsive Design:** The hamburger menu and product grid are optimized for both mobile and desktop devices.

**Data Persistence:** The system is exclusively tested to work with MockAPI and ImgBB. All request logic is centralized in the /services folder for easy adaptation.

### 📄 License and Intent
This code is distributed as a quick-start template. You are free to use it for personal projects or commercial projects for your clients.




##---------------------------------------------en Español-------------------------------------------------------------##

# 🍞 React + Vite E-commerce Starter Kit - Bakery Template
¡Bienvenido! Este es un Boilerplate/Starter Kit para un E-commerce básico desarrollado con React(versión que usé: 19.2.0) y Vite. Está diseñado como ejemplo para negocios de panaderías, pero basta con cambiar el logo, las categorías y los datos del JSON de tus productos para que se adapte a cualquier otro tipo de negocio. Cuenta con una arquitectura limpia, escalable y lista para ser personalizada por desarrolladores.
---

## 🛠 Requisitos Previos
Antes de comenzar, asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (Versión 18 o superior recomendada)
- npm
- Recomendación de terminal: Git Bash

## 📦 Configuración (IMPORTANTE!!!)
-Configurar Variables de Entorno: 
**Paso 1** - Crear un archivo llamado .env en la raíz del proyecto (puedes guiarte del archivo .env.example). 
**Paso 2** - Para realizar la prueba, completa con tus credenciales de Mockapi y Imgbb (basta con las gratuitas), 
Ejemplo:

VITE_MOCKAPI_URL=https://__tu-endpoint-de-mockapi-suelen-ser-numeros-y-letras__.com/products
VITE_IMGBB_KEY=__tu_api_key_de_imgbb-suelen-ser-solo-numeros-y-letras__

**Paso 3** - Codigo de repuesto: tienes un products.json local como repuesto en caso de que se te olvide probar con tus credenciales de MockAPI e ImgBB (son credenciales gratuitas que te permiten crear una API, la aclaración de los campos del api del mockapi estan en este README.md en el apartado de "-📝 Notas para el Desarrollador"), 


__Nota__: si no quieres probar por json local, es decir solo quieres probar con mockapi y imgbb, para dejar el código limpio (aunque el código funciona incluso si no borras/comentas estas partes, ya que funciona cuando no hay api key pero si hay entonces toma las api key de MockAPI e ImgBB), entonces borra/comenta:

-Borra la carpeta del json local: (public/data/products.json).

-Borra las imágenes de los panes del JSON local (ubicadas en la carpeta: public/images/).
Los archivos son: baguette.png, focaccia.png, pan-concha.png, pan-de-campo.png, pan-de-corbata-danes.png, pan-de-muerto.png, pan-multigrano-redondo.png, rosca-de-reyes.png .

-Borra la imagen por default que aparece en caso de que pongas la credencial de tu mockapi, pero no la credencial de tu imgbb: prueba-con-tus-credenciales-de-imgbb.png, que esta en la carpeta (public/images/prueba-con-tus-credenciales-de-imgbb.png)

-Borra/comenta este if en el export de "uploadToImgbb", que esta en la carpeta: uploadImage.js, 
  // Si no hay API KEY IMGBB, devuelve la imagen de respaldo
  if (!IMGBB_API_KEY) {
    console.warn("ImgBB Key no configurada. Usando imagen de respaldo.");
    // Aquí pones la ruta a la imagen que creaste
    return "../public/images/prueba-con-tus-credenciales-de-imgbb.png"; 
  }

-borra/comenta el codigo que esta al principio, y des-comenta el codigo que aparece comentado al fondo del archivo products.js que esta en la carpeta (src/service/products.js).


## 📦 Instalación
Sigue estos pasos para poner en marcha el proyecto:

-Instalar dependencias:
npm install
npm i react-router-dom

-Iniciar el servidor de desarrollo:
npm run dev


ATENCIÓN: Si al ejecutar npm install recibes un error de "SecurityError" o "scripts deshabilitados", intenta lo siguiente:
Usa la terminal Command Prompt o Git Bash en lugar de PowerShell.

---

## 🚀 Características Técnicas
- **Herramienta de Construcción:** Vite (Velocidad de carga ultra rápida).
- **Estado Global:** Context API para la gestión del carrito de compras.
- **Rutas:** React Router DOM para navegación SPA.
- **Persistencia de Datos:** Integración lista con **MockAPI**.
- **Gestión de Imágenes:** Sistema de subida de imágenes integrado con la API de **ImgBB**.
- **Diseño:** CSS Puro (Responsive Design) sin dependencias externas pesadas. 
- **Panel Administrador:** Ruta `/admin` funcional para carga de inventario.

### 🔐 Autenticación y Panel de Administración
- **Acceso Protegido:** La ruta `/admin` utiliza un componente de envoltura (`RutaProtegida.jsx`) que verifica la sesión antes de permitir el acceso al formulario de gestión de productos.
- **Gestión de Sesión:** Implementada mediante `AuthContext` y persistida en `sessionStorage`. 
- **Nota sobre Logout:** Para cerrar la sesión administrativa, cierre la pestaña actual del navegador. Si intenta acceder a `/admin` sin una sesión activa, el sistema lo redirigirá automáticamente al inicio, sino solo irá a al formulario de alta de un producto.
- **Credenciales de Administrador (Hardcoded):**
  - **Usuario:** admin
  - **Contraseña:** 1234
- **Enfoque en el Consumidor:** Flujo de "Guest Checkout" (sin registro obligatorio), optimizado para conversión. Arquitectura escalable para futuros sistemas de usuarios.

---

-📂 Estructura del Proyecto:
src/
├── components/     # Componentes (Nav, Item, etc.)
├── context/        # CartContext (para el manejo del carrito)
├── services/       # Lógica de peticiones (MockAPI e ImgBB)
├── utils/          # validaciones de alta de producto
└── App.jsx         # Configuración de rutas


### 📝 Notas para el Desarrollador
**Estructura de Datos:** El frontend espera objetos JSON con la siguiente estructura (del Mockapi): { id: objectID , name: string, price: number, category: string, description: string, imageUrl: string }.
Ejemplo de un producto cargado en el mockapi:
[
  {
    "id": "1"
    "name": "Pan multigrano redondo",
    "price": 5000,
    "category": "salado",
    "description": "Elaborado con varios tipos de granos (no solo trigo), lo que le da un sabor y textura característicos",
    "imageUrl": "https://IMAGEN-IMGBB.png", //recomendación de tamaño de imagen: 640x640 782KB 72ppp 24bits 
  }
]

ACLARACIÓN: la subida de la imagen del producto no se hace desde la pagina del Imgbb sino desde el formulario del alta del producto, de Imgbb solo debe obtener su credencial y colocarla en el archivo .env




**Ruta de Administración:** Puedes acceder al panel de carga de productos en "http://localhost:5173/admin" luego de haber iniciado sesión.
-Recuerda que este es solo un kit de inicio, por lo que no tiene un acceso para salir de sesión de administrador si quieres volver al inicio de sesión cierra la pestaña y vuelve al local host desde otra pestaña.

**Responsive:** El menú hamburguesa y el grid de productos están optimizados para dispositivos móviles - pc.

**Persistencia de Datos:** El sistema está configurado y testeado exclusivamente para funcionar con MockAPI (para datos de productos) e ImgBB (para almacenamiento de imágenes). La lógica de peticiones está centralizada en la carpeta /services, facilitando que un programador pueda probar el código o adaptarlo a sus propias necesidades de API.

### 📄 Licencia e Intención
Este código se distribuye como una plantilla de inicio rápido. Puedes usarlo para proyectos personales o comerciales de tus clientes.
