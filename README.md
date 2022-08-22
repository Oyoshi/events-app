# Events App

Simple application for creating and managing events. Main features are:

1. Creating, Updating and Deleting events ([Redux](https://react-redux.js.org/))
2. Form data validation ([React Hook Form](https://react-hook-form.com/) and [Yup](https://github.com/jquense/yup))
3. Dark/Light Theme switch ([MUI](https://mui.com/))
4. Building and running app in `dev` and `prod` mode ([Docker](https://www.docker.com/))

## How to run :construction_worker:

### dev

1. type: `docker-compose up -d -f docker-compose.dev.yml`
2. navigate to `localhost:3000/events`

### prod

1. type: `docker-compose up -d -f docker-compose.prod.yml`
2. navigate to `localhost:8080/events`
