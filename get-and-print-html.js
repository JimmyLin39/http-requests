function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  const https = require('https');
  let data = '';

  https.get(requestOptions, function(response){
    response.setEncoding('utf8');

    response.on('data', function(chunk){
      data += chunk;
    });

    response.on('end', function(){
      console.log(data);
    });
  });
}

getAndPrintHTML();