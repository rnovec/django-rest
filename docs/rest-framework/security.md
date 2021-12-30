# Security

## [Simple JWT Tokens](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/getting_started.html)

    $ pip install djangorestframework-simplejwt

```py
import datetime

REST_FRAMEWORK = {
    ...
    "DEFAULT_AUTHENTICATION_CLASSES": (
        ...
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ),
}

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': datetime.timedelta(minutes=15),
    'REFRESH_TOKEN_LIFETIME': datetime.timedelta(hours=1),
    'USER_ID_FIELD': 'id',
    'USER_ID_CLAIM': 'id'
}
```

```py
# urls.py
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    ...
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    ...
]

```

## [CORS Headers](https://pypi.org/project/django-cors-headers/)

    $ pip install django-cors-headers

```py

INSTALLED_APPS = (
    ...
    'corsheaders',
    ...
)

MIDDLEWARE = [
    ...
    'corsheaders.middleware.CorsMiddleware',  # django-cors-headers middleware
    'django.middleware.common.CommonMiddleware',
    ...
]

CORS_ORIGIN_WHITELIST = os.environ.get("DJANGO_ALLOWED_ORIGINS").split(' ')
CORS_ALLOW_ORIGINS_ALL = True
CORS_ALLOW_CREDENTIALS = True
```
