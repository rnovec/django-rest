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

[Serialización](https://es.wikipedia.org/wiki/Serializaci%C3%B3n)

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

    def create(self, validated_data):
        '''
        Ejemplo de una función de creación
        '''
        return MyModel.objects.create(**validated_data)

    def update(self, instance, validated_data):
        '''
        Ejemplo de una función de actualización
        '''
        instance.name = validated_data.get('name', instance.name)
        ...
        instance.save()
        return instance
```
