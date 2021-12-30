# Introducción

## Arquitectura básica​

Una API de DRF se compone de 3 capas: el serializador, el conjunto de vistas y el enrutador.​

- **Serializer** → representación de datos (`serializers.py`): convierte los datos del modelo en una representación JSON​
- **Viewsets** → vistas de datos (`views.py`): lógica de negocio, relativo a la ruta y el método HTTP​
- **Router** → Endpoints (`urls.py`): ruta del recurso base.

## Core

- **decorators**
- **permissions**
- **renderers**
- **responses**
- **status**

# REST Framework

- [Codigos de Estado](https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP)
- [Protocolo HTTP](https://developer.mozilla.org/es/docs/Web/HTTP/Overview)
- [REST](https://es.wikipedia.org/wiki/Transferencia_de_Estado_Representacional)

## [Instalación](https://www.django-rest-framework.org/#installation)

    $ pip install djangorestframework markdown

```py
# settings.py

INSTALLED_APPS = (
    ...
    'rest_framework'
)

REST_FRAMEWORK = {
    # Use Django's standard `django.contrib.auth` permissions,
    # or allow read-only access for unauthenticated users.
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated'
    ],
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework.authentication.SessionAuthentication",
        "rest_framework.authentication.BasicAuthentication"
    )
}
```

## [CORS](https://pypi.org/project/django-cors-headers/)

    pip install django-cors-headers

```py
INSTALLED_APPS = [
    ...
    "corsheaders",
    "rest_framework",
    ...
]

## TODO: add middlewares conf

CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_CREDENTIALS = True
```
