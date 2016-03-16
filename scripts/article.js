var articles = [];

function Article (projects) {
  this.author = projects.author;
  this.authorUrl = projects.authorUrl;
  this.title = projects.title;
  this.category = projects.category;
  this.body = projects.body;
}
 Article.prototype.toHtml = function() {
   var theTemplateScript = $('#articles-template').text();
   console.log('am i here?', theTemplateScript);
 }
