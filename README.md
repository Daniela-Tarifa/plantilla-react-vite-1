# 🍞 React + Vite E-commerce Starter Kit - Bakery Template

¡Bienvenido! Este es un Boilerplate/Starter Kit profesional para un E-commerce básico desarrollado con React y Vite. Está diseñado como ejemplo para negocios de panaderías, pero basta con cambiar el logo, las categorías y los datos del JSON de tus productos para que se adapte a cualquier otro tipo de negocio. Cuenta con una arquitectura limpia, escalable y lista para ser personalizada por desarrolladores.
---

## 🚀 Características Técnicas

- **Bundler:** Vite (Velocidad de carga ultra rápida).
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

## 🛠️ Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (Versión 16 o superior recomendada)
- npm
- Recomendación de terminal: Git Bash
---

## 📦 Instalación y Configuración

Sigue estos pasos para poner en marcha el proyecto:
-Instalar dependencias:
npm install
npm i react-router-dom

-Configurar Variables de Entorno: Crea un archivo llamado .env en la raíz del proyecto (puedes guiarte del archivo .env.example) y completa con tus credenciales de Mockapi y Imgbb:
VITE_MOCKAPI_URL=https://tu-endpoint-de-mockapi.com/products
VITE_IMGBB_KEY=tu_api_key_de_imgbb

-Iniciar el servidor de desarrollo:
npm run dev

-📂 Estructura del Proyecto:
src/
├── components/     # Componentes reutilizables (Nav, Item, etc.)
├── context/        # CartContext (para el manejo del carrito)
├── services/       # Lógica de peticiones (MockAPI e ImgBB)
├── pages/          # Vistas principales (Home, Detalle, Carrito, Admin)
└── App.jsx         # Configuración de rutas

-📝 Notas para el Desarrollador
**Estructura de Datos: El frontend espera objetos JSON con la siguiente estructura: { id, name, price, category, description, imageUrl }.
Ejemplo de un producto cargado en el mockapi:
[
  {
    "id": "1"
    "name": "Pan multigrano redondo",
    "price": 5000,
    "category": "salado",
    "description": "Elaborado con varios tipos de granos (no solo trigo), lo que le da un sabor y textura característicos",
    "imageUrl": "https://IMAGEN-IMGBB.png",
  }
]
ACLARACIÓN: la subida de la imagen del producto no se hace desde la pagina del Imgbb sino desde el formulario del alta del producto, de Imgbb solo debe obetener su credencial y colocarla en el archivo .env

**Ruta de Administración: Puedes acceder al panel de carga de productos en "tu-url/admin" luego de  haber iniciado sesión.

**Responsive: El menú hamburguesa y el grid de productos están optimizados para dispositivos móviles - pc.

**Persistencia de Datos: El sistema está configurado y testeado exclusivamente para funcionar con MockAPI (para datos de productos) e ImgBB (para almacenamiento de imágenes). La lógica de peticiones está centralizada en la carpeta /services, facilitando que un programador pueda probar el código o adaptarlo a sus propias necesidades de API.

-📄 Licencia e Intención
Este código se distribuye como una plantilla de inicio rápido. Puedes usarlo para proyectos personales o comerciales de tus clientes.
