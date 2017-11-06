module.exports = function getHTML (options, callback) {
    /* Your code here */
  const https = require('https');
  let data = '';

  https.get(options, function(response){
    response.setEncoding('utf8');
    response.on('data', function(chunks){
      data += chunks;
    });

    response.on('end', function(){
      callback(data);
    })
  });
};