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
  var theTemplate = Handlebars.compile(theTemplateScript);
  return theTemplate(this);
  $('article.template').removeClass('template');
};


rawData.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(a){
  $('#articles').append(a.toHtml());
});
