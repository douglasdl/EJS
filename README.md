Create the project:
```sh
npm init -y
```

Install the dependencies:
```sh
npm i ejs
npm i express
```

Install the development dependencies:
```sh
npm i typescript -D
npm i ts-node -D
npm i @types/node -D
npm i @types/express -D
npm i nodemon -D
npm uninstall concurrently browser-sync browser-sync-webpack-plugin -D
npm i concurrently -D
```

Create the main app file:
```sh 
touch app.js
```

Create the typecript configuratiton file:
```sh 
touch tsconfig.json
```

```sh
node app.js
```