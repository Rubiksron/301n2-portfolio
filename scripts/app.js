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
    closeAboutMeController();
  });

  $('#contacts').click(function(){
    contactsController();
  });
  $('.closeContacts').click(function(){
    closeContactsController();
  });

  $('#portfolio').click(function(){
    portfolioController();
  });
  $('.closePortfolio').click(function(){
    closePortfolioController();
  });

  $('.videoCloseButton').click(function(){
    videoCloseButtonController();
  });

  $('.finale').click(function(){
    finaleController();
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
  module.Projects.loadAll = Projects.loadAll;
  module.Projects.fetchAll = Projects.fetchAll;
})(window);
