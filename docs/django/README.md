# Introducción a Django

Django es un marco web **Python** de alto nivel que fomenta el desarrollo rápido y un diseño limpio y pragmático. Creado por desarrolladores experimentados, se encarga de gran parte de la molestia del desarrollo web, por lo que puede concentrarse en escribir su aplicación sin necesidad de reinventar la rueda. Es gratis y de **código abierto**.

## Patrón MTV

Separa datos, interfaz de usuario y lógica de control:

- **Model** → modelo de datos (`models.py`)
- **View** → vistas de datos (`views.py`): qué datos se presentan
- **Template** → plantillas de páginas (generalmente archivos HTML): cómo se presentan los datos

## ¿Qué hace Django?

- Provee una estructura de trabajo bajo el patrón **M**odel **T**emplate **V**iew
- Mapea objetos Python con la base de datos (**ORM**)
- Permite diseñar URLs amigables para buscadores (útil para **SEO**)
- Tiene un **sistema de plantillas** sencillo para diseñadores
- Genera una interfaz de administración automática
- Dispone de un framework para manejar formularios
- Puede gestionar sesiones de usuario, autenticación, caché, almacenamiento, sitemaps, internacionalización, etc.

### Usa lo que quieras, integra lo que necesites

- Backends de almacenamiento de archivos
- Backends de cache
- Backends de autenticación 
- Sitio de administración
- Sistema de **templates** de Django o uno propio etc.

## Aplicaciones contrib

- **auth**: Autenticación de usuarios.
- **admin**: Sitio de administración **CRUD**.
- **messages**: Mensajes de aviso para usuarios.
- **sessions**: Gestión de sesiones.
- **sites**: Manejar distintos sitios web con un proyecto.
- **sitemaps**: Generar sitemaps a partir de modelos.
- **syndication**: Generar feeds RSS y Atom a partir de modelos.
- **gis**: Trabajar con datos geo espaciales (**PostGIS**)

## Organización de un proyecto Django

- Un desarrollo es un **Proyecto**
- Un **proyecto** consta de una o varias **aplicaciones**
- Cada aplicación hace algo en concreto
- **Proyecto**: "Comunidad web"
- **Aplicaciones**: blog, foro, registro de usuarios, tienda online, newsletter, agregador de feeds...
- Una aplicación puede ser utilizada por distintos proyectos a la vez
- Un **proyecto** puede hacer funcionar varios sitios web
