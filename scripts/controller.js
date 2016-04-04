
(function(module) {

  var aboutController = {};
  aboutController.index = function() {
    $('.navBarItems').hide();
    $('.links').hide();
    $('.name').hide();
    $('.footerText').hide();
    $('.hiddenDiv1').fadeIn();
    $('#about').fadeIn();
  };
  module.aboutController = aboutController;
})(window);

(function(module) {

  var contactController = {};
  contactController.index = function() {
    $('.navBarItems').hide();
    $('#contact').fadeIn();
  };
  module.contactController = contactController;
})(window);

(function(module) {

  var portfolioController = {};
  portfolioController.index = function() {
    $('.navBarItems').hide();
    $('#portfolio').fadeIn();
  };
  module.portfolioController = portfolioController;
})(window);
