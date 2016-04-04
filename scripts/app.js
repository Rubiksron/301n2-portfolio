'use strict';

(function(module) {

  $(function(){
    $('#finale').click(function(){
      $('.hiddenDiv3').hide();
      $('html, body').animate({scrollTop : 0},900);
      return false;
    });
  });

  $(function(){
    $('.iframe1').hide();
    $('#videoCloseButton').hide();
  });
  $('#finale').click(function(){
    $('.hiddenDiv3').hide();
    $('.iframe1').show();
    $('#videoCloseButton').show();
    $('#portfolio').hide();
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
    $('.hiddenDiv1').hide();
    $('#contact').show();
    $('#portfolio').show();
    $('.name').show();
    $('.links').show();
    $('.footerText').show();
  });

  $('#contact').click(function(){
    $('.links').hide();
    $('.name').hide();
    $('#about').hide();
    $('#portfolio').hide();
    $('.footerText').hide();
    $('.hiddenDiv2').fadeIn();
  });
  $('.closeContacts').click(function(){
    $('.hiddenDiv2').hide();
    $('.name').show();
    $('.links').show();
    $('#about').show();
    $('#portfolio').show();
    $('.footerText').show();
  });

  $('#portfolio').click(function(){
    $('.links').hide();
    $('.name').hide();
    $('#about').hide();
    $('#contact').hide();
    $('.footerText').hide();
    $('.hiddenDiv3').fadeIn();
  });
  $('.closePortfolio').click(function(){
    $('.hiddenDiv3').hide();
    $('.name').show();
    $('.links').show();
    $('#about').show();
    $('#contact').show();
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
