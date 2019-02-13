const fetch = require('./fetch');

const URL_REGEXP = /ShowLMCButton\('([^']+)/;


module.exports = async function gatto(url) {
  const response = await fetch('https://gat.to/?url=' + url);

  return response.match(URL_REGEXP)[1];
};

