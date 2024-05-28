const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const response = await fetch('http://usa15.ciudaddigital.com.uy:8040/FederalFM');
  const body = await response.body;

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'audio/mpeg',
    },
    body: body,
  };
};