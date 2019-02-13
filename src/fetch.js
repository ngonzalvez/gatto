const https = require('https');


module.exports = async function fetch(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, response => {
      let data = '';

      response.setEncoding('utf8');
      response.on('data', chunk => data += chunk);
      response.on('end', () => resolve(data));
    });

    req.on('error', reject);
  });
};
