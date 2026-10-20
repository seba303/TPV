# TPV

Sistema de punto de venta (TPV) para la gestión de productos y flujo comercial básico de una pequeña empresa.

## Descripción del proyecto

Este repositorio contiene una versión inicial de un TPV con backend en Node.js y base de datos SQLite, junto con una interfaz web simple desarrollada en HTML, CSS y JavaScript. La idea principal es permitir gestionar productos y operaciones básicas del punto de venta con una estructura sencilla y fácil de revisar.

## Estado actual

El proyecto se encuentra en una etapa de prototipo funcional, pero no está completamente terminado ni listo para producción. Tiene una base de funcionamiento clara y organizada, pero aún requiere pulido, validación de casos de uso reales y una definición más sólida del flujo completo del negocio.

Se puede considerar como una base sólida para continuar desarrollando un sistema de ventas para PyMEs.

## Funcionalidades principales

- gestión de productos
- registro de nombre, talle, precio y stock
- consulta de productos
- edición y eliminación
- persistencia local con SQLite
- API REST para interactuar con los datos
- estructura de frontend básica para visualizar y operar la app

## Stack

- Node.js
- Express
- SQLite
- HTML + CSS + JavaScript

## Estructura del repositorio

```text
TPV/
├── README.md
├── LICENSE
├── Migrado/
│   ├── backend/
│   │   ├── server.js
│   │   ├── tpv.db
│   │   └── tests/
│   └── frontend/
│       ├── index.html
│       ├── dashboard.html
│       ├── main.js
│       ├── estilos.css
│       ├── estilos-productos.css
│       └── ...
```

## Cómo ejecutar

1. Instala las dependencias del backend:

```bash
cd Migrado/backend
npm install express sqlite3 cors
```

2. Inicia el servidor:

```bash
node server.js
```

3. Abre la interfaz frontend:

- puedes abrir `Migrado/frontend/index.html` directamente en el navegador, o
- servir la carpeta frontend con un servidor local si lo prefieres

La API del backend quedará disponible en:

```text
http://localhost:3000
```

## Endpoints principales

```text
GET    /api/productos
GET    /api/productos/:id
POST   /api/productos
PUT    /api/productos/:id
DELETE /api/productos/:id
```

## Observaciones importantes

Aunque la base del proyecto existe y se puede usar como prototipo, todavía hay varios puntos a revisar antes de considerarlo un producto final:

- falta consolidar una definición completa del flujo de ventas
- no hay documentación completa de uso para usuarios finales
- no hay despliegue ni entorno de producción preparado
- hay pruebas de ejemplo, pero no necesariamente una suite completa
- el repositorio aún parece estar en fase de evolución y migración

## Estado funcional real

La aplicación tiene una base funcional local y un backend con CRUD para productos, pero no se puede afirmar que el proyecto esté terminado como producto completo para negocio real. Es un proyecto viable como MVP inicial, pero aún requiere refinamiento antes de considerarse final.

## Licencia

Este proyecto se distribuye bajo la licencia Apache License 2.0.

## Autor

Proyecto personal en desarrollo para gestión de punto de venta para PyMEs.
