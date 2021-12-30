## API docs

https://www.django-rest-framework.org/api-guide/schemas/

- POSTMAN
- OpenAPI
- Swagger

## Best practices

- Estructura
- Settings
- Whitenoise
- Urls
- Services
- Selectors
- Abstract Models

## Deployment

- [Gunicorn](https://pypi.org/project/gunicorn/)
- [Heroku]()

## Recursos adicionales

- https://github.com/rnovec/django-templates
- https://github.com/CryceTruly/incomeexpensesapi
- https://www.youtube.com/watch?v=rJWAGQ0JxxI

* Django REST Registration
* Django social Auth
* Boto3
* Celery
* DRF YASGN

## Permisos

```py
from restframework.permissions import BasePermission

class BasePermission(BasePermission):
    """
    A base class from which all permission classes should inherit.
    """
    def has_permission(self, request, view):
        """
        Return `True` if permission is granted, `False` otherwise.
        """
        return True

    def has_object_permission(self, request, view, obj):
        """
        Return `True` if `has_permission` is `True` and object permission is granted, `False` otherwise.
        """
        return True
```


