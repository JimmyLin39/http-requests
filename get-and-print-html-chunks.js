// console.log each chunk of data as it is received

function getAndPrintHTMLChunks () {
  const https = require("https");

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  https.get(requestOptions, function(response){
    response.setEncoding('utf8');

    response.on('data', function(chunk){
      console.log('chunk:', chunk + '\n');
    });

    response.on('end', function(){
      console.log('Response stream complete.');
    });
  });

}

getAndPrintHTMLChunks();