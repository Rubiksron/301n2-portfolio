'use strict';

(function(module) {

  $(function(){
    $('.iframe1').hide();
    $('.videoCloseButton').hide();
  });

  $('.videoCloseButton').click(function(){
    videoCloseButtonController();
  });

  $('.finale').click(function(){
    finaleController();
  });

  Projects.all = [];

  Projects.loadAll = function(project) {
    rawData.map(function(project) {
      Projects.all.push(new Projects(project));
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
