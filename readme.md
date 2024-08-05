## Pre-requisites
Before installation, you need to download [MySQL Server](https://dev.mysql.com/downloads/installer/)

## Project Setup
To be able to run the project, run npm install to install all neccessary dependencies. 

#### 1. Configure .env file
Create ```.env``` file under ```src/config```. Mandatory variables are:
- ```PORT``` (Default: 3333)
- ```DB_PASSWORD``` (Your MySQL Passwowrd)

#### 2. Create MySQL Database
Follow instructions below to create new database manually:
```
- mysql -u root -p
- CREATE DATABASE url_shortener;
- USE url_shortener;

- CREATE TABLE urls (
    urlId VARCHAR(255) NOT NULL,
    origUrl VARCHAR(255) NOT NULL,
    shortUrl VARCHAR(255) NOT NULL,
    clicks INT NOT NULL DEFAULT 0,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (urlId)
  );

- DESCRIBE urls;
```

#### 3. Start Project
Run ```node server.js``` to start the application locally. For POST and GET request, see this [Postman API](https://elements.getpostman.com/redirect?entityId=23326990-dab011bf-834e-44b4-9ddd-92afe5c6cc34&entityType=collection).