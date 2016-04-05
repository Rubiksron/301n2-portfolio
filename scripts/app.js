'use strict';

(function(module) {

  $(function(){
    $('.iframe1').hide();
    $('.videoCloseButton').hide();
  });

  // $('#about').click(function(){
  //   aboutController.index();
  // });

  // $('.closeAboutMe').click(function(){
  //   aboutController.close();
  // });
  //
  // $('#contacts').click(function(){
  //   contactsController.index();
  // });
  //
  // $('.closeContacts').click(function(){
  //     contactsController.close();
  // });

  // $('#portfolio').click(function(){
  //   portfolioController.index();
  // });
  //
  // $('.closePortfolio').click(function(){
  //   portfolioController.close();
  // });

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
