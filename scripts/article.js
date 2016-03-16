var articles = [];

function Article (projects) {
  this.title = projects.title;
  this.category = projects.category;
  this.author = projects.author;
  this.authorUrl = projects.authorUrl;
  this.projectLinksContainer = projects.projectLinksContainer;
}

Article.prototype.toHtml = function() {
  var theTemplateScript = $('#articles-template').text();
  var theTemplate = Handlebars.compile(theTemplateScript);
  return theTemplate(this);
  // $('article.template').removeClass('template');
};


rawData.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(a){
  $('#articles').append(a.toHtml());
});
