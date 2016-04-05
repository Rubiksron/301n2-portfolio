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
  };
  aboutController.close = function() {
    $('.hiddenDivAbout').hide();
    $('#contacts').show();
    $('#portfolio').show();
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
  };
  contactsController.close = function() {
    $('.hiddenDivContacts').hide();
    $('.name').show();
    $('.links').show();
    $('#about').show();
    $('#portfolio').show();
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
  };
  portfolioController.close = function() {
    $('.hiddenDivPortfolio').hide();
    $('.name').show();
    $('.links').show();
    $('#about').show();
    $('#contacts').show();
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
