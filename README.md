# How to setup MEAN project in local server ?

## 1. NodeJS server - Backend
* download and install NodeJS
* make sure Node and NPM are installed and their PATHs defined
  * node -v
  * npm -v
* navigate to the api folder
* install the required packages from NPM
  * npm install
* start the Node Server
  * node index.js
* You should see your console.log message show up in your console, with port number 3000.

## 2. Angular server - Frontend
* navigate to the web folder
* install angular
  * npm install -g @angular/cli
* install the required packages from NPM
  * npm install
* start the server
  * ng serve --open
* After a while, it spins up a server at localhost:4200 in default browser.
