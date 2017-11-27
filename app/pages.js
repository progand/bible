const fetch = require('node-fetch');

module.exports = {
	getContentOf
};

function getContentOf(urlOrURLs) {
	if (Array.isArray(urlOrURLs)) {
		return Promise.all(urlOrURLs.map(url => getContentOf(url)));
	}
	return fetch(urlOrURLs)
		.then(res => res.json())
		.then(data => ({
			id: data.id,
			title: data.title,
			text: data.body
		}));
}
