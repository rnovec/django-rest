## [Modelos](https://docs.djangoproject.com/en/3.1/topics/db/models/)

Para la persistencia de la infromación Django maneja modelos dentro de su ORM

```py
from django.db import models

# Create your models here.
class Income(models.Model):
    name = models.CharField(max_length=50) # para textos cortos de longitud fija
    date = models.DateField() # para fechas sin hora
    amount = models.DecimalField(max_digits=10, decimal_places=2) # para decimales FloatField, IntegerField
    description = models.TextField(blank=True) # para textos largos
    is_active = models.BooleanField(default=True) # para booleanos
    created_at = models.DateTimeField(auto_now_add=True) # para fechas con hora
    updated_at = models.DateTimeField(auto_now=True)
```

Al crear un nuevo modelo o hacer algun cambio en sus campos:

    $ python manage.py makemigrations
    $ python manage.py migrate

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

## Admin site

```py
# accounts/admin.py
from django.contrib import admin
from .models import MyModel

# 1
admin.site.register(MyModel)

# 2
@admin.register(MyModel)
class MyModelAdmin(admin.AdminModel):
    list_display = []

```

### Trabajando con modelos

Asumamos que tenemos un modelo cualquiera llamado `Person` para cada modelo de Django podemos hacer alguna de las siguientes funciones:

```py
# models.py
from django.db import models

class Person(models.Model):
    name = CharField(default="", max_length=50)
    age = IntegerField(default=0)

# somefile.py
obj = Person.objects.get(pk=1) # obtener un registro por su Primary Key
obj = Person.objects.get(name="Carlos") # obtener un registro por algun campo especifico
obj.name # podemos acceder a sus datos

# actualiar el valor de un campo
obj.age = 40
obj.save()

queryset = Person.objects.all() # obetener todos los registros de una Tabla/Modelo

# podemos cambiar el orden por defecto
queryset = Person.objects.all().order_by('name') # ASCENDENTE
queryset = Person.objects.all().order_by('-name') # DESCENDENT

queryset = Person.objects.filter(name="Carlos") # Filtrar por algun campo esto devuelve una lista

# actualizar en masa, actualizara todos los registros con los datos proporcionados
Person.objects.update(name="Carlos", age=35)

# crear un nuevo registro
instance = Person(name="Ana", age=30)
instance.save()

```

```py
from django.db import models

class MyModel(models.Model):
    ...
```

## ORM

```py
from .models import MyModel

MyModel.objects.all()
MyModel.objects.filter()
MyModel.objects.get()
MyModel.objects.create()
```

### CRUD

```py
from .models import MyModel

# Create
instance = MyModel.objects.create(foo='bar')
instance.save()

# Read
MyModel.objects.all()
MyModel.objects.filter()
MyModel.objects.get()

# Update
instance = MyModel.objects.get(pk=1)
instance.bar = 'foo'
instance.save()

queryset = MyModel.objects.all()
queryset.update(name='Pedro')

# Delete
instance = MyModel.objects.get(pk=1)
instance.delete()

queryset = MyModel.objects.all()
queryset.delete()
```

## [QuerySet](https://docs.djangoproject.com/en/3.1/ref/models/querysets/)

Una **queryset** es el resultado de aplicar acciones de lectura del ORM especificmente usando los metodos `all()` y/o `filter()` estos metodos siempre devolveran una queryset en la cual disponemos de ciertas acciones del mismo ORM.

```py

queryset = MyModel.objects.all() # todos los registros de la tabla
queryset = MyModel.objects.filter() # obtener algunos registros aplicando un filtro

queryset = queryset.order_by('foo') # ASC
queryset = queryset.order_by('-foo') # DESC

```

### Filtros avanzados

```py
# filtering instances
queryset = Post.objects.filter(title__icontains='Trump')
queryset = Post.objects.filter(some_integer_field__lte=1)
queryset = Post.objects.filter(some_integer_field__gte=1, title="Pepe")
queryset = Post.objects.filter(created_at__range=['2020-01-01', '2020-01-02'])
queryset = Post.objects.filter(created_at='2020-01-01')
...
```

### Tarea

- 10 Examples of ORM Create
- 10 Examples of ORM List/Filter/Order
- 5 Examples of ORM Get
- 5 Examples of ORM Update/Partial
- 5 Examples of ORM Delete

## [Relaciones](https://docs.djangoproject.com/en/3.1/topics/db/models/#relationships)

### ForeginKey

### ManyToMany

### OneToOne

## Enlaces útiles

- [UUID](https://es.wikipedia.org/wiki/Identificador_%C3%BAnico_universal)
- [Advanced filtering](https://docs.djangoproject.com/en/3.0/topics/db/queries/#complex-lookups-with-q-objects)
