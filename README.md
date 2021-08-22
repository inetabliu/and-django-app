# AND Digital GoldenShoe Django App

# Run locally

Clone the repo, then cd into the folder:

```sh
git clone https://github.com/inetabliu/and-django-app.git
cd and-django-app
```

To start the backend, run:

```sh
pipenv install
pypenv shell
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

This will start a development server at `localhost:8000`.

To start the frontend, run:

```sh
cd client
yarn install
yarn start
```

This will run the React development server at `localhost:3000`.

The website is available at `localhost:3000`, while the admin dashboard is available at `localhost:8000/admin`.