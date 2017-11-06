function getAndPrintHTML (options) {

  /* Add your code here */
  const https = require('https');
  let data = '';

  https.get(options, function(response){
    response.setEncoding('utf8');
    response.on('data', function(chunks){
      data += chunks;
    });

    response.on('end',function(){
      console.log(data);
    });
  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);