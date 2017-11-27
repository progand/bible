const fs = require('fs');
const path = require('path');

module.exports = {
	writeArticle,
	writeIndex
};

function writeArticle(content, slug, suffix = '.html') {
	return new Promise((resolve, reject) => {
		const file = path.join('./dist', String(slug) + suffix);
		console.log(file);
		return fs.writeFile(file, content, (err) => {
			if (err) reject(err);
			resolve();
		});
	});
}

function writeIndex(content, fileName = 'index.html') {
	return new Promise((resolve, reject) => {
		const file = path.join('./dist', fileName);
		console.log(file);
		return fs.writeFile(file, content, (err) => {
			if (err) reject(err);
			resolve();
		});
	});
}
