const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const response = await fetch('http://usa15.ciudaddigital.com.uy:8040/FederalFM');
  const buffer = await response.buffer();

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'audio/mpeg',
      'Access-Control-Allow-Origin': '*',
    },
    isBase64Encoded: true,
    body: buffer.toString('base64'),
  };
};