# -randomWordsAndMatches
A NodeJS and Express project to consume a random Word API and to find the best or worst match.

This project consist on a server.js main file and several modules required.
There are two options the run this project, based on the Dockerfile provide buil the Docker image with the command:


or based on the package.json you can install it using npm init, afetra that just run node server.js.

Once the local server is running on port 8081 you can test the \search endpoint, either with the browser, 
http://localhost:8081/search?number=5&theword=bar

or via Curl command as shown below:
curl 'localhost:8081/search?number=5&theword=bar'

I this file we are fetching a random word API 

For testing I used Jasmine, unitl know there is only 1 spec. 
And finally the docker is included, the internal and extrenal port defined is 8081.


For more information about the API 
https://random-word-api.herokuapp.com/home
For more information about the string similarity module.
https://www.npmjs.com/package/string-similarity

Author: Alejandro Mercado
