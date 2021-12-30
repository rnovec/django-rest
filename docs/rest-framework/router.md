# Router

```py
from django.conf.urls import include, url
from rest_framework import routers
from app.views import *

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r"users", UserViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.

urlpatterns = [
    url(r"^api/", include(router.urls)),
]

```
