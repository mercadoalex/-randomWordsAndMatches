# Project -randomWordsAndMatches
A NodeJS and Express project to consume a random Word API and to find the best or worst match.

## Description

I this file we are fetching a random word API 
For testing I used Jasmine, unitl know there is only 1 spec. 
And finally the docker is included, the internal and extrenal port defined is `8081`.

## Setup
This project consist on a server.js main file and several modules required.
There are two options the run this project, based on the Dockerfile provide build the Docker image with the command:
```sh
$ docker build . -t <your username>/node-expres-wordapi
```
once the image is buitl run the container like this:
```sh
$ docker run -p 49160:8080 -d <your username>/node-expres-wordapi
```
You can get the container id
```sh
$ docker ps
```
If you need to go inside the container you can use the exec command: 
```sh
$ docker exec -it <container id> /bin/bash
```
or based on the package.json you can install it using npm init, afetra that just run
```sh
$ node server.js
```
Once the local server is running on port `8081` you can test the \search endpoint, either with the browser, 
http://localhost:8081/search?number=5&theword=bar

or via Curl command as shown below:
```sh
$ curl 'localhost:8081/search?number=5&theword=bar'
```

## More information
For more information about the API 
https://random-word-api.herokuapp.com/home
For more information about the string similarity module.
https://www.npmjs.com/package/string-similarity

## Todos 
  Clean a lltle bit the endpoint response.
  Push the image to Docker Registry.
## Contact  
[Alejandro Mercado] mercadoalex@gmail.com [amp]

[amp]: <https://alexmarket.medium.com/>  
