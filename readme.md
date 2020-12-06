# API Spec

## Authentication

All API must use this authentication

Request :
- Header :
    - X-Api-Key : "your secret api key"

## Create Article

Request :
- Method : POST
- Endpoint : `/api/posts`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
    "id" : "string, unique",
    "title" : "string",
    "subtitle" : "string",
    "description" : "string"
    "publhised" : "boolean"
     opsional =>
    "createdAt" : "string"
    "updatedAt" : "string"
   
}
```

Response :

```json 
{
     "id" : "string, unique",
    "title" : "string",
    "subtitle" : "string",
    "description" : "string"
    "publhised" : "boolean"
     opsional =>
    "createdAt" : "string"
    "updatedAt" : "string"
   
}
```

## Get Article

Request :
- Method : GET
- Endpoint : `/api/posts/{id_posts}`
- Header :
    - Accept: application/json

Response :

```json 
{
    
    "id" : "string, unique",
    "title" : "string",
    "subtitle" : "string",
    "description" : "string"
    "publhised" : "boolean"
     opsional =>
    "createdAt" : "string"
    "updatedAt" : "string"
     
}
```

## Update Article

Request :
- Method : PATCH
- Endpoint : `/api/posts/{id_product}`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
    "id" : "string, unique",
    "title" : "string",
    "subtitle" : "string",
    "description" : "string"
    "publhised" : "boolean"
     opsional =>
    "createdAt" : "string"
    "updatedAt" : "string"
}
```

Response :

```json 
{
    "id" : "string, unique",
    "title" : "string",
    "subtitle" : "string",
    "description" : "string"
    "publhised" : "boolean"
     opsional =>
    "createdAt" : "string"
    "updatedAt" : "string"
     
}
```

## List Articles

Request :
- Method : GET
- Endpoint : `/api/posts`
- Header :
    - Accept: application/json
- Query Param :
    - size : number,
    - page : number

Response :

```json [
   {
    "id" : "string, unique",
    "title" : "string",
    "subtitle" : "string",
    "description" : "string"
    "publhised" : "boolean"
     opsional =>
    "createdAt" : "string"
    "updatedAt" : "string"
    },
    {
     "id" : "string, unique",
    "title" : "string",
    "subtitle" : "string",
    "description" : "string"
    "publhised" : "boolean"
     opsional =>
    "createdAt" : "string"
    "updatedAt" : "string"
    }
    ]

```

## Delete Product

Request :
- Method : DELETE
- Endpoint : `/api/posts/{id_posts}`
- Header :
    - Accept: application/json

Response :

```json 
{
    "code" : "number",
    "status" : "string"
}
```


# Deployment 

## you can clone this project

## Case heroku

```cli 
- open cmd  and make sure heroku installed yet before
- heroku login
- cd <your app>
- git add .
- git commit -m "bismillah"
- heroku create <your app>
- git push heroku master
- heroku addons:create heroku-potgres --app potgres_db-app
- heroku config => postgres://database:password@host:5432/user
- heroku config:set DATABASE_URL=postgres://database:password@host:5432/user
- edit db.config.js 
    module.exports = {
      HOST: <host>,
      USER: <user>,
      PASSWORD: <pass>,
      DB: <db>
    };
    
 - run npx sequelize db:migrate in local and delete SequelizeMetha in database before update or 
 - run in server heroku 1,heroku run bash
                        2,run => sequelize db:migrate
                        
 - git add .
 - git commit
 - git push origin master
 - git push heroku master
```

Now you can make CRUD operations with our Rest Apis using the url:
http://localhost:4000/api/posts also database has been conect to sever heroku

or https://<app-name>herokuapp.com/api/posts

