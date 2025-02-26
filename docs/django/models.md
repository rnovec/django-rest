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
from .models import MyModel

# 1
admin.site.register(MyModel)

# 2
@admin.register(MyModel)
class MyModelAdmin(admin.AdminModel):
    list_display = ['field1', 'field2', 'field3' ...]
    list_filter = ['field1', 'field2', 'field3' ...]
    search_fields = ['field1', 'field2', 'field3' ...]
    list_editable = ['field1', 'field2', 'field3' ...]

```

### Trabajando con modelos

Asumamos que tenemos un modelo cualquiera llamado `Person` para cada modelo de Django podemos hacer alguna de las siguientes funciones:

```py
# models.py
from django.db import models

class Person(models.Model):
    name = models.CharField(default="", max_length=50)
    age = models.IntegerField(default=0)

# somefile.py
# crear un nuevo registro
instance = Person(name="Ana", age=30)
instance.save()

# otra forma de crear un nuevo registro
Person.objects.create(name="Ana", age=25)

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

```

## ORM

```py
from .models import MyModel

# Acciones sobre los querysets
qs = MyModel.objects.all() # obtener todos los registros de una Tabla/Modelo
qs = MyModel.objects.filter() # filtrar por algun campo
qs.update() # actualizar en masa
qs.delete() # eliminar en masa

# Acciones sobre una instancia
instance = MyModel.objects.create() # crear un nuevo registro
instance = MyModel.objects.get() # obtener un registro por su Primary Key
instance.update() # actualizar un registro
instance.delete() # eliminar un registro
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

### Lookup fields

```py
queryset = Post.objects.filter(title__icontains='Trump')
queryset = Post.objects.filter(some_integer_field__lte=1)
queryset = Post.objects.filter(some_integer_field__gte=1, title="Pepe")
queryset = Post.objects.filter(created_at__range=['2020-01-01', '2020-01-02'])
queryset = Post.objects.filter(created_at='2020-01-01')
...
```

### Tarea

- Crear un modelo llamado Expense
- 10 Examples of ORM Create
- 10 Examples of ORM List/Filter/Order
- 5 Examples of ORM Get
- 5 Examples of ORM Update
- 5 Examples of ORM Delete

## [Relaciones](https://docs.djangoproject.com/en/3.1/topics/db/models/#relationships)

### ForeginKey

### ManyToMany

### OneToOne

## Enlaces útiles

- [UUID](https://es.wikipedia.org/wiki/Identificador_%C3%BAnico_universal)
- [Advanced filtering](https://docs.djangoproject.com/en/3.0/topics/db/queries/#complex-lookups-with-q-objects)

## Abstract Models

project/base_models.py

```py
from django.db.models import Model

class BaseAbstractModel(Model):
    """
    Abstract model to be inherited by all models.
    """
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

```

myapp/models.py

```py
from project.base_models import BaseAbstractModel

class MyModel(BaseAbstractModel):
    ...

```