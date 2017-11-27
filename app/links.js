const fetch = require('node-fetch');

module.exports = {
  getLinksFrom
};

function getLinksFrom(url) {
  return fetch(url)
    .then(res => res.json())
    .then(data => (data.map(item => `${url}/${item.id}`)));
}
