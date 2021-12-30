# Otros puntos importantes

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
