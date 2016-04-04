'use strict';
(function(module) {
  var aboutController = {};
  aboutController = function() {
    $('.navBarItems').hide();
    $('.links').hide();
    $('.name').hide();
    $('.footerText').hide();
    $('.hiddenDivAbout').fadeIn();
    $('#about').fadeIn();
  };
  module.aboutController = aboutController;
})(window);

(function(module) {
  var closeAboutMeController = {};
  closeAboutMeController = function() {
    $('.hiddenDivAbout').hide();
    $('#contacts').show();
    $('#portfolio').show();
    $('.name').show();
    $('.links').show();
    $('.footerText').show();
  };
  module.closeAboutMeController = closeAboutMeController;
})(window);

(function(module) {
  var contactsController = {};
  contactsController = function() {
    $('.navBarItems').hide();
    $('.links').hide();
    $('.name').hide();
    $('#about').hide();
    $('#portfolio').hide();
    $('.footerText').hide();
    $('#contacts').fadeIn();
    $('.hiddenDivContacts').fadeIn();
  };
  module.contactsController = contactsController;
})(window);


(function(module) {
  var closeContactsController = {};
  closeContactsController = function() {
    $('.hiddenDivContacts').hide();
    $('.name').show();
    $('.links').show();
    $('#about').show();
    $('#portfolio').show();
    $('.footerText').show();
  };
  module.closeContactsController = closeContactsController;
})(window);

(function(module) {
  var portfolioController = {};
  portfolioController = function() {
    $('.links').hide();
    $('.name').hide();
    $('#about').hide();
    $('#contacts').hide();
    $('.footerText').hide();
    $('.navBarItems').hide();
    $('#portfolio').fadeIn();
    $('.hiddenDivPortfolio').fadeIn();
  };
  module.portfolioController = portfolioController;
})(window);

(function(module) {
  var closePortfolioController = {};
  closePortfolioController = function() {
    $('.hiddenDivPortfolio').hide();
    $('.name').show();
    $('.links').show();
    $('#about').show();
    $('#contacts').show();
    $('.footerText').show();
  };
  module.closePortfolioController = closePortfolioController;
})(window);


(function(module) {
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
})(window);

(function(module) {
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
