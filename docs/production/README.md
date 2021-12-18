# Despligue de una API en entorno productivo (notas)

## SSH

### Conectarse por SSH con la llave pem

    ssh -i SERVER_KEY.pem USER@SERVER_IP

### Generar claves SSH para clonar repositorios de manera segura

    ssh-keygen -t rsa
    cat ~/.ssh/id_rsa.pub

## Pasos iniciales

### Clonar el codigo en la instancia

    git clone REPO URL

### Actualizar paquetes

    sudo su
    apt-get update

## Instalar herramientas

### Python 3.8 (Versión requerida por el proyecto)

    sudo add-apt-repository ppa:deadsnakes/ppa
    sudo apt update
    sudo apt install python3.8 --yes
    sudo update-alternatives --install /usr/bin/python python /usr/bin/python3.8 10
    python --version

### PIP3 (Python Installer Packages)

    sudo apt install python3-pip
    wget https://bootstrap.pypa.io/get-pip.py
    python get-pip.py
    sudo rm -r get-pip.py
    pip --version

## Preparar el proyecto

### Entorno virtual y dependencias

    pip  install virtualenv
    virtualenv env
    source venv/bin/activate
    source .env-example
    python -m pip install --upgrade pip
    sudo apt install libcairo2-dev libpangocairo-1.0-0 --yes
    pip install -r requirements.txt

### Crear estaticos y correr servidor

    python manage.py collectstatic --no-input
    python manage.py runserver 0.0.0.0:8000

## Despliegue final

### Crear SCREEN para el proyecto y ejecutar en produccion

    screen -S api-django
    source venv/bin/activate
    source .env-example
    exec venv/bin/gunicorn --access-logfile - --workers 3 --bind 0.0.0.0:8000 config.wsgi:application

    Ctrl A+D # exit screen without killing
    screen -ls
    screen -r SCREEN_ID
    Ctrl C # kill screen

### Migrar la base de datos

    python manage.py migrate

### Crear super usuario (OPCIONAL)

    python manage.py createsuperuser

### Abrir proyecto en el navegador

    http://IP_SERVER:8000/api/v1/

### What's next?

- Nginx
- Base de datos
- Workers