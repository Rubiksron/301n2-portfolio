'use strict';

(function(module) {

  $(function(){
    $('#finale').click(function(){
      $('.hiddenDivContacts').hide();
      $('html, body').animate({scrollTop : 0},900);
      return false;
    });
  });

  $(function(){
    $('.iframe1').hide();
    $('#videoCloseButton').hide();
  });
  $('#finale').click(function(){
    $('.hiddenDivPortfolio').hide();
    $('.navBarItems').hide();
    $('.iframe1').show();
    $('#videoCloseButton').show();
  });

  $('#videoCloseButton').click(function(){
    $('iframe').hide();
    $('#videoCloseButton').hide();
    $('.navBarItems').show();
    $('.name').show();
    $('.links').show();
    $('.footerText').show();
  });

  $('#about').click(function(){
    aboutController();
  });
  $('.closeAboutMe').click(function(){
    $('.hiddenDivAbout').hide();
    $('#contacts').show();
    $('#portfolio').show();
    $('.name').show();
    $('.links').show();
    $('.footerText').show();
  });

  $('#contacts').click(function(){
    contactsController();
  });
  $('.closeContacts').click(function(){
    $('.hiddenDivContacts').hide();
    $('.name').show();
    $('.links').show();
    $('#about').show();
    $('#portfolio').show();
    $('.footerText').show();
  });

  $('#portfolio').click(function(){
    portfolioController();
  });
  $('.closePortfolio').click(function(){
    $('.hiddenDivPortfolio').hide();
    $('.name').show();
    $('.links').show();
    $('#about').show();
    $('#contacts').show();
    $('.footerText').show();
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
