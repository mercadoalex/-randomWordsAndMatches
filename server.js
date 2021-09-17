const  express = require('express');
const app = express();
const fs = require('fs');
const request = require('request');
const yaml = require('js-yaml');
//const search = require('./searchStringInArray');
const stringSimilarity = require("string-similarity");

app.get('/search', function(req, res){    
    var wordsNumber = req.query.number;
    var theWord = req.query.theword;

    let options = {
        url:'https://random-word-api.herokuapp.com/word?number='+ wordsNumber,
        method:'GET',
        json: true
    }

  request(options, function(err, body){
        const stringified = JSON.stringify(body);
        // optional. write JSON string to a file
        fs.writeFile('words.json', stringified, (err) => {
        if (err) { throw err; } console.log("JSON data is saved.");
        });
        const filename = global.process.mainModule.filename;    
        //modulo de busqueda exacta   
        //search.searchStringInArray(theWord,body.body);
        
        const similarity = stringSimilarity.findBestMatch(theWord,body.body);
        const targets =  JSON.stringify(similarity.ratings);
        const bestMatch = JSON.stringify(similarity.bestMatch);
        
        var clientAnswer = "{ words: ";
        for (let i = 0; i < body.body.length; i++) {
            clientAnswer += body.body[i]+",";
        }

        clientAnswer += '}, ratings: ' + targets + ', bestMatch: '+ bestMatch;
        res.json(clientAnswer);
        //res.json(body); //res is the response object, and it passes info back to client side

        //Forming & writing the YAML file  
        let yamlout = 
        {
        title: 'Demo Random Word API',
          config: { 
            match_method: 'npm string-similarity',
            word: `${theWord}`,
            words: `${body.body}`,
            ratings: `${targets}`,
            bestMatch: `${bestMatch}`
          }, 
        meta: {
          author: { name: 'Alejandro Mercado', contact: 'mercadoalex@gmail.com', file: `${filename}` }
          } 
        }
        let yamlStr= yaml.dump(yamlout);
        fs.writeFile('data-out.yaml', yamlStr, (err) => {
        if (err) { throw err; } console.log("YAML file written.");
        });
        
  });
});

var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("The app is listening on http://%s:%s", host, port);
})

//http://localhost:8081/search?number=5&theword=bar
//curl 'localhost:8081/search?number=5&theword=bar'
