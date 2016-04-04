'use strict';

var projects = [];

function Projects (projects) {
  this.title = projects.title;
  this.category = projects.category;
  this.author = projects.author;
  this.authorUrl = projects.authorUrl;
  this.projectLinksContainer = projects.projectLinksContainer;
  this.body = projects.body;
}

Projects.prototype.toHtml = function() {
  var theTemplateScript = $('#projects-template').text();
  var theTemplate = Handlebars.compile(theTemplateScript);
  return theTemplate(this);
};

rawData.map(function(ele) {
  projects.push(new Projects(ele));
});

projects.map(function(a){
  $('.projectLinksContainer').append(a.toHtml());
});
