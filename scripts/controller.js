'use strict';

(function(module) {

  var aboutController = {};
  aboutController.index = function() {
    $('.navBarItems').hide();
    $('.links').hide();
    $('.name').hide();
    $('.footerText').hide();
    $('.hiddenDivAbout').fadeIn();
    $('#about').fadeIn();
    $('.closeAboutMe').click(function(){
      aboutController.close();
    });
  };
  aboutController.close = function() {
    $('.hiddenDivAbout').hide();
    $('.navBarItems').show();
    $('.name').show();
    $('.links').show();
    $('.footerText').show();
  };
  module.aboutController = aboutController;

  var contactsController = {};
  contactsController.index = function() {
    $('#contacts').fadeIn();
    $('.hiddenDivContacts').fadeIn();
    $('.navBarItems').hide();
    $('.links').hide();
    $('.name').hide();
    $('#about').hide();
    $('#portfolio').hide();
    $('.footerText').hide();
    $('.closeContacts').click(function(){
      contactsController.close();
    });
  };
  contactsController.close = function() {
    $('.hiddenDivContacts').hide();
    $('.name').show();
    $('.links').show();
    $('.navBarItems').show();
    $('.footerText').show();
  };
  module.contactsController = contactsController;

  var portfolioController = {};
  portfolioController.index = function() {
    $('.links').hide();
    $('.name').hide();
    $('#about').hide();
    $('#contacts').hide();
    $('.footerText').hide();
    $('.navBarItems').hide();
    $('#portfolio').fadeIn();
    $('.hiddenDivPortfolio').fadeIn();
    $('.closePortfolio').click(function(){
      portfolioController.close();
    });
  };
  portfolioController.close = function() {
    $('.hiddenDivPortfolio').hide();
    $('.name').show();
    $('.links').show();
    $('.navBarItems').show();
    $('.footerText').show();
  };
  module.portfolioController = portfolioController;

  var videoCloseButtonController = {};
  videoCloseButtonController = function() {
    $('iframe').hide();
    $('.videoCloseButton').hide();
    $('.navBarItems').show();
    $('.name').show();
    $('.links').show();
    $('.footerText').show();
  };
  module.videoCloseButtonController = videoCloseButtonController;

  var finaleController = {};
  finaleController = function() {
    $('.hiddenDivPortfolio').hide();
    $('.navBarItems').hide();
    $('.iframe1').show();
    $('.videoCloseButton').show();
    $('html, body').animate({scrollTop : 0},900);
    return false;
  };
  module.finaleController = finaleController;
})(window);
