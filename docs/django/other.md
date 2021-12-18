# Django Admin 

```py
# accounts/admin.py
from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin
from .forms import CustomUserCreationForm, CustomUserChangeForm

CustomUser = get_user_model()

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ['email', 'username',]

admin.site.register(CustomUser, CustomUserAdmin)
```

## Admin Models

```py
# accounts/admin.py
from django.contrib import admin
from .models import MyModel

class MyModelAdmin(admin.AdminModel):
    model = MyModel
    list_display = []

admin.site.register(MyModelAdmin)

@admin.register(User)
class MyModelAdmin(admin.AdminModel):
    model = MyModel
    list_display = []

```

## [Vistas](https://docs.djangoproject.com/en/3.1/topics/http/views/)

```py
from django.shortcuts import render

def home(request):
    # ...
    # Respuesta con template y contexto
    return render(request, 'index.html', { "foo": "bar" })
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>{{ foo }}</h1>
  </body>
</html>
```

## Response

```py
from django.http import HttpResponse, JsonResponse​

def example_http(request):
    # ...
    # Respuesta con HTML string
    return HttpResponse('<h1/>Hello!!!</h1>')

def example_json(request):​
    # ...
    # Respuesta con JSON
    return JsonResponse({ "foo": "bar" })
```

# Custom User Model 
# Services y selectores 
# Signals 