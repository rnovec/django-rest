# Programación Orientada a Objetos (POO)

Es un paradigma de programación en el que los conceptos delmundo real relevantes para nuestro problema se modelan a través de clases y objetos, y en el que nuestro programa consiste de una serie de interacciones entre estos objetos.

- Clases
- Objetos
- Atributos
- Properties
- Instancias
- Herencia
- Módulos
- [Decoradores](https://realpython.com/primer-on-python-decorators/)

```py
# Classes, Inheritance, and Polymorphism
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "{} says WOOF!".format(self.name)

# Properties
class Dog(Animal):

    @property
    def name_len(self):
        return len(self.name)

puppy = Dog("puppy")
print(puppy.name)
print(puppy.speak())
print(puppy.name_len)

# Decorators
def decor(func):
    def inner(*args, **kwargs):
        print('wrapper executed this before {}'.format(func.__name__))
        return func(*args, **kwargs)
    return inner

@decor
def display_info(name, age):
    print('display_info ran with arguments {}, {}'.format(name, age))

display_info('John', 25)
```

## [Juice Maker]()

You are given a **Juice** class, which has **name** and **capacity** properties.
You need to complete the code to enable and adding of two Juice objects, resulting in a new Juice object with the combined capacity and names of the two juices being added.

For example, if you add an Orange juice with 1.0 capacity and an Apple juice with 2.5 capacity, the resulting juice should have:
name: **Orange&Apple**
capacity: 3.5

The names have been combined using an **&** symbol.

```py
class Juice:
    def __init__(self, name, capacity):
        self.name = name
        self.capacity = capacity

    # your code goes here
```

> Use the `__add__` method to define a custom behavior for the + operator and return the resulting object.

### Solution

```py
class Juice:
    def __init__(self, name, capacity):
        self.name = name
        self.capacity = capacity

    def __add__(self, other):
        return Juice(f'{self.name}&{other.name}', self.capacity + other.capacity)


    def __str__(self):
        return (self.name + ' ('+str(self.capacity)+'L)')


a = Juice('Orange', 1.5)
b = Juice('Apple', 2.0)

result = a + b
print(result)
```

## Shooting Game


You are creating a shooting game!
The game has two types of enemies, aliens and monsters. You shoot the aliens using your laser, and monsters using your gun.
Each hit decreases the lives of the enemies by 1.
The given code declares a generic Enemy class, as well as the Alien and Monster classes, with their corresponding lives count.
It also defines the hit() method for the Enemy class.

You need to do the following to complete the program:
1. Inherit the Alien and Monster classes from the Enemy class.
2. Complete the while loop that continuously takes the weapon of choice from user input and call the corresponding object's hit() method.

### Sample Input
laser
laser
gun
exit

### Sample Output
Alien has 4 lives
Alien has 3 lives
Monster has 2 lives

```py
class Enemy:
  name = ""
  lives = 0
  def __init__(self, name, lives):
    self.name = name
    self.lives = lives

  def hit(self):
    self.lives -= 1
    if self.lives <= 0:
       print(self.name + ' killed')
    else:
        print(self.name + ' has '+ str(self.lives) + ' lives')

class Monster(Enemy):
  def __init__(self):
    super().__init__('Monster', 3)

class Alien(Enemy):
  def __init__(self):
    super().__init__('Alien', 5)


m = Monster()
a = Alien()

while True:
    x = input()
    if x == 'laser':
      a.hit()
    if x == 'gun':
      m.hit()
    if x == 'exit':
        break
```  