# LinkTree—Readme
___
# Coding:
## [LAB CLI](https://github.com/labor-digital/lab-cli) (Recommended)

- Setup your environment variables in .env.template
- Set your app password in .env.template
- Install the lab cli globally: `npm i -g @labor-digital/lab-cli`
- Run `lab up` to start the development server
- Run `lab open` to open the project in your browser
- Start coding in src/

## Without the lab cli

- Copy .env.template to .env
- Setup your environment variables in .env
- Set your app password in .env
- Run `docker-compose up` to start the development server
- Open the IP address of the container set in .env in your browser
___
# Application:
## .env:

- `APP_IP` is the IP address of the container
- `APP_PASSWORD` is the password you set in .env
- `APP_PORT` is the port you set in .env
- `APP_URL` is the url you set in .env (used for lab cli to automatically map the url to the container)

## Routes:

- `/` is the homepage
- `/login` is the login page
- `/admin` is the admin page
___
# Infrastructure:

## Bash functions
### npm
Global access to the npm executable, executed as node user. Look [here](https://docs.npmjs.com/) for additional information.

## Environment variables
### .env
The .env file contains all infrastructure related environment variables for your project. Every time when you change or add one of them
docker-compose will recreate the container automatically. The [lab cli](https://github.com/labor-digital/lab-cli) will copy .env.template and create the .env file for you.
If you don't use the lab cli, just copy .env.template yourself. By default, .env files are not commited, where .env.tempalte files are!
