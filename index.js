const {
	getLinksFrom
} = require('./app/links');
const {
	getContentOf
} = require('./app/pages');
const {
	articleTemplate,
  indexTemplate
} = require('./app/templates');
const {
	writeArticle,
  writeIndex
} = require('./app/html');

const proceedLink = (link) =>
	getContentOf(link)
	.then(page => [articleTemplate(page), page])
  .then(([content, page]) => writeArticle(content, page.id).then(() => page));

getLinksFrom('https://jsonplaceholder.typicode.com/posts')
	.then(links => Promise.all(links./*slice(0, 1).*/map(proceedLink)))
  .then(pages => indexTemplate({pages}))
  .then(content => writeIndex(content))
	.then(() => console.log('Finished!'))
  .catch(() => console.error('Failed!'));
