# [Views](https://www.django-rest-framework.org/api-guide/views/)

### Un ejemplo sin DRF

```py
from django.http import JsonResponse​

def example(request, *args, **kwargs):​
    return JsonResponse({ "foo": "bar" })

```

### Un ejemplo basico con DRF

```py
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view()
def hello_world(request):
    return Response({"message": "Hello, world!"})

```


## [Viewsets](https://www.django-rest-framework.org/api-guide/viewsets/)

```py
# views.py
from rest_framework import viewsets
from .models import *
from .serializers import *

class RoleViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows roles to be viewed or edited.
    """
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
```

## Model Viewsets

```py
from rest_framework import viewsets​
from .models import MyModel
from .serializers import MyModelSerializer

class MyModelViewSet(viewesets.ModelViewSet):​

    queryset = MyModel.objects.all()
    serializer_class = MyModelSerializer

    def list(self, request):​
        ...​

    def retrieve(self, request):​
        ...​

    def create(self, request):​
        ...​

    def update(self, request):​
        ...

    def partial_update(self, request):​
        ...

    def remove(self, request):​
        ...
```

## Router

```py
...
from django.urls import path, include
from rest_framework import routers
from myapp.views import MyModelViewSet

router = routers.DefaultRouter()
router.register(r'base_path', MyModelViewSet)

urlpatterns = [
    ...
    path('api/', include(router.urls)),
    ...
]

```

## Filtros y Paginación

    $ pip install django-filter

```py
# settings.py

INSTALLED_APPS = (
    ...
    'django_filters',
)

REST_FRAMEWORK = {
    ...
    "DEFAULT_FILTER_BACKENDS": [
        "django_filters.rest_framework.DjangoFilterBackend",
        "rest_framework.filters.OrderingFilter",
        "rest_framework.filters.SearchFilter",
    ],
    "DEFAULT_PAGINATION_CLASS": "rest_framework.pagination.LimitOffsetPagination",
    "PAGE_SIZE": 10,
    'TEST_REQUEST_DEFAULT_FORMAT': 'json'
}
```

- [Mixins]()
- [Generic Views]()

## [Custom actions]()

- [Params]()
- [Source code](https://github.com/encode/django-rest-framework/blob/master/rest_framework/viewsets.py)
- [Filters](https://pypi.org/project/django-filter/)

## Documentación API