# Primeros pasos

## Estructura de un proyecto Django

```
/project/
    /project/
        __init__.py
        urls.py
        settings.py
    blog/
        __init__.py
        models.py
        views.py
        tests.py
    foro/
        __init__.py
        models.py
        views.py
        tests.py
    manage.py
    
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
    django-admin startproject NAME .

## Comandos iniciales

Al crear un nuevo modelo o hacer algun cambio en sus campos:

    $ python manage.py makemigrations
    $ python manage.py migrate

Al inicio del proyecto debemos crear un superusuario:

    $ python manage.py createsuperuser

Para correr el proyecto:

    $ python manage.py runserver

o

    $ ./manage.py runserver

### Primeras configuraciones

```py
import os

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.getenv('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = bool(int(os.getenv('DEBUG', 0)))

ALLOWED_HOSTS = ['*']
```

    $ export DEBUG=1
    $ export SECRET_KEY=my-secret-key

### Variables de entorno

.env.example

## Aplicaciones

Para crear nuestra primera app:

    $ python manage.py startapp blog

o

    $ django-admin startapp financials

```py
INSTALLED_APPS = [
    ...
    'blog',
    'financials',
]
```
