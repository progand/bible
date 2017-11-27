const Handlebars = require('handlebars');
const fs = require('fs');
const articleSource = fs.readFileSync('./templates/article.hbs', 'utf-8');
const articleTemplate = Handlebars.compile(articleSource);
const indexSource = fs.readFileSync('./templates/index.hbs', 'utf-8');
const indexTemplate = Handlebars.compile(indexSource);

module.exports = {
  articleTemplate,
  indexTemplate
};
