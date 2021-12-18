# Programación Orientada a Objetos (POO)

Es un paradigma de programación en el que los conceptos delmundo real relevantes para nuestro problema se modelan a través de clases y objetos, y en el que nuestro programa consiste de una serie de interacciones entre estos objetos.

- Clases
- Objetos
- Atributos
- Properties
- Instancias
- Herencia
- Módulos
- [Decoradores](https://realpython.com/primer-on-python-decorators/)

## Estructura de un proyecto Django

```
/project/
    /project/
        __init__.py
        urls.py
        manage.py
        settings.py
    blog/
        __init__.py
        models.py
        views.py
        urls.py
        templates/
        static/
    foro/
        __init__.py
        models.py
        views.py
        urls.py
        templates/
```

## Archivos de una aplicación

- `__init__.py`
- `models.py` Contiene nuestros modelos de datos
- `views.py` Contiene las vistas de la aplicación
- `tests.py` Permite que incluyamos tests para la aplicación
- `urls.py`Es usual añadir un `urls.py` con las URLs de nuestra aplicación e importarlas en el `urls.py` del proyecto por motivos de organización.

## Instalación

    python3 -m venv venv
    source venv/bin/activate # ./venv/Scripts/activate
    pip install Django
    django-admin startproject

## Comandos útiles

Para correr el proyecto:

    $ python manage.py runserver

ó

    $ ./manage.py runserver

## Variables de Entorno

```py
import os

# printing environment variables
print(os.environ)
print(os.environ.get('DEBUG', None))
```
