# [Serializers](https://www.django-rest-framework.org/api-guide/serializers/)

```py
# serializers.py
from rest_framework import serializers
from .models import *

# Serializers define the API representation.
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = []
        exclude = []
```

[Serilización](https://es.wikipedia.org/wiki/Serializaci%C3%B3n)

## Lectura

```py
from rest_framework import serializers​
from .models import MyModel

class MyModelSerializer(serializers.ModelSerializer):​
    '''
    Ejemplo de un serializer heredando de ModelSerializer
    y su estructura básica
    '''
    class Meta:​
       model = MyModel # model to serialize
       fields = []​ # campos incluidos
       exclude = [] # campos a ignorar
       depth = 1 # manejo de relaciones
```

## Escritura

...
