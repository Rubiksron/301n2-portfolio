
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
