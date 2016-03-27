var articles = [];

function Article (projects) {
  this.title = projects.title;
  this.category = projects.category;
  this.author = projects.author;
  this.authorUrl = projects.authorUrl;
  this.projectLinksContainer = projects.projectLinksContainer;
  this.body = projects.body;
}

Article.prototype.toHtml = function() {
  var theTemplateScript = $('#articles-template').text();
  var theTemplate = Handlebars.compile(theTemplateScript);
  return theTemplate(this);
};

rawData.map(function(ele) {
  articles.push(new Article(ele));
});

articles.map(function(a){
  $('.projectLinksContainer').append(a.toHtml());
});


// var links = [];
//
// function Links (objects) {
//   this.title = links.title;
//   this.links = links.links;
//   this.img = links.img;
//   this.url = links.url;
// }
//
// Links.prototype.toHtml = function()
//   var theTemplateScript = $('')
