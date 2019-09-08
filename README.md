# Skill test 

## Instalation

run commands:

`$ git clone git@github.com:peroperje/skill-test.git`

`$ yarn`

## Scripts

`yarn start`

It runs back-end and front-end servers

`yarn test`

It runs test

`yarn server`

it runs only back-end server in watch mode

`yarn lint`

It runs eslint


## Login

`email: petar@ptt.yu | password: whatever`

Use for password any word. There is no server-side validation.

## Add new user  

Change file:

`/skill-test/server/db.json`

and add a new object (with the same shape) to users array :

```
...

 "users": [
    {
      "id": 1,
      "firstName": "Petar",
      "lastName": "Borovcanin",
      "email": "petar@ptt.yu"
    }
...
    
```
##  Directory with files samples for upload:

`skill-test/dev/`
