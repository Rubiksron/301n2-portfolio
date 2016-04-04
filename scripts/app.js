'use strict';

(function(module) {

  $(function(){
    $('.iframe1').hide();
    $('.videoCloseButton').hide();
  });

  $('#about').click(function(){
    aboutController();
  });
  $('.closeAboutMe').click(function(){
    closeAboutMe();
  });

  $('#contacts').click(function(){
    contactsController();
  });
  $('.closeContacts').click(function(){
    closeContacts();
  });

  $('#portfolio').click(function(){
    portfolioController();
  });
  $('.closePortfolio').click(function(){
    closePortfolio();
  });

  $('.videoCloseButton').click(function(){
    videoCloseButton();
  });

  $('.finale').click(function(){
    finale();
  });

  Projects.all = [];

  Projects.loadAll = function(rawData) {

    rawData.map(function(ele) {
      Projects.all.push(new Projects(ele));
    });
  };
  Projects.fetchAll = function() {
    if (localStorage.rawData) {
      Projects.loadAll(JSON.parse(localStorage.rawData));
      Projects.all.map(function(a){
        $('project-projectLinksContainer.projects').append(a.toHtml());
      });
    } else {
      $.getJSON('projects.json', function(data) {
        Projects.loadAll(data);
        localStorage.setItem('rawData', JSON.stringify(data));
        Projects.all.map(function(a){
          $('project-projectLinksContainer.projects').append(a.toHtml());
        });
      });
    }
  };
  module.Projects.fetchAll = Projects.fetchAll;
})(window);
