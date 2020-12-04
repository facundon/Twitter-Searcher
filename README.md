# Twitter-Searcher

## Instalar Dependencias

Instalar dependencias de python
```
pip install -r requirements.txt
```

Instalar las dependencias de react dentro de /frontend
```
npm i
```

## Configurar DB
En el archivo /TwitterSearcher/settings.py modificar el diccionario **DATABASES** para utilizar su base de datos local.
Para la key **ENGINE** se admiten los siguientes values:
- 'django.db.backends.postgresql'
- 'django.db.backends.mysql'
- 'django.db.backends.sqlite3'
- 'django.db.backends.oracle'

## Hacer Migraciones a la DB
```
python manage.py makemigrations
python manage.py migrate
```

## Iniciar Servidor

```
python manage.py runserver
```

### Superuser
Para ingresar a localhost:8000/admin utilizar las siguientes credenciales:

- user: **admin**
- pass: **admin**
