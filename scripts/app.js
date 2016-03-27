
(function(module){

  function makeItRain() {
   // number of drops created.
    var nbDrop = 558;

    function randRange( minNum, maxNum) {
      return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
    }
    	for( i=1; i<nbDrop; i++) {
      	var dropLeft = randRange(0,500);
      	var dropTop = randRange(-2000,500);
      	$('.makeItRain').append('<div class="drop" id="drop'+i+'"></div>');
      	$('#drop'+i).css('left',dropLeft);
      	$('#drop'+i).css('top',dropTop);
    	}
  }
  makeItRain();

  $(document).ready(function(){
    $('.makeItRain').hide();
  });
  $('#finale').click(function(){
    $('.makeItRain').show();
  });


  $(document).ready(function(){
    $('#finale').click(function(){
      $('.hiddenDiv3').hide();
      $('html, body').animate({scrollTop : 0},900);
      return false;
    });
  });

  $(document).ready(function(){
    $('#scrollToTop').click(function(){
      $('html, body').animate({scrollTop : 0},900);
      return false;
    });
  });

  $(document).ready(function(){
    $('.iframe1').hide();
    $('#videoCloseButton').hide();
  });
  $('#finale').click(function(){
    $('.hiddenDiv3').hide();
    $('.iframe1').show();
    $('#videoCloseButton').show();
    $('#nav3').hide();
  });

  $(document).ready(function(){
    $('.iframe3').hide();
    $('#videoCloseButton').hide();
  });
  $('#finale').click(function(){
    $('.hiddenDiv3').hide();
    $('.iframe3').show();
    $('#videoCloseButton').show();
    $('#nav3').hide();
  });


  $('#videoCloseButton').click(function(){
    $('.makeItRain').hide();
    $('iframe').hide();
    $('#videoCloseButton').hide();
    $('#nav1').show();
    $('#nav2').show();
    $('#nav3').show();
    $('.name').show();
    $('.links').show();
    $('.footerTextDiv').show();
  });

  $('#nav1').hover(function(){
    $('#nav2').hide();
    $('#nav3').hide();
    $('.links').hide();
    $('.name').hide();
    $('.footerTextDiv').hide();
    $('.hiddenDiv1').fadeIn();
  },function(){

  });
  $('.closeAboutMe').click(function(){
    $('.hiddenDiv1').hide();
    $('#nav2').show();
    $('#nav3').show();
    $('.name').show();
    $('.links').show();
    $('.footerTextDiv').show();
  });


  $('#nav2').hover(function(){
    $('.links').hide();
    $('.name').hide();
    $('#nav1').hide();
    $('#nav3').hide();
    $('.footerTextDiv').hide();
    $('.hiddenDiv2').fadeIn();
  });
  $('.button2').click(function(){
    $('.hiddenDiv2').hide();
    $('.name').show();
    $('.links').show();
    $('#nav1').show();
    $('#nav3').show();
    $('.footerTextDiv').show();
  });

  $('#nav3').hover(function(){
    $('.links').hide();
    $('.name').hide();
    $('#nav1').hide();
    $('#nav2').hide();
    $('.footerTextDiv').hide();
    $('.hiddenDiv3').fadeIn();
  });
  $('.button3').click(function(){
    $('.hiddenDiv3').hide();
    $('.name').show();
    $('.links').show();
    $('#nav1').show();
    $('#nav2').show();
    $('.footerTextDiv').show();
  });
  Article.all = [];

  Article.loadAll = function(rawData) {

    rawData.map(function(ele) {
      Article.all.push(new Article(ele));
    });
  };
  Article.fetchAll = function() {
    if (localStorage.rawData) {
      Article.loadAll(JSON.parse(localStorage.rawData));
      Article.all.map(function(a){
        $('article-projectLinksContainer.projects').append(a.toHtml());
      });
    } else {
      $.getJSON('projects.json', function(data) {
        Article.loadAll(data);

        localStorage.setItem('rawData', JSON.stringify(data));
        Article.all.map(function(a){
          $('article-projectLinksContainer.projects').append(a.toHtml());
        });
      });
    }
  };
  $('.template').hide();

//protects against clickjacking
  if (self == top) {
  // Everything checks out, show the page.
    document.documentElement.style.display = 'block';
  } else {
    // Break out of the frame.
    top.location = self.location;
  }
})(window);

window.Article.fetchAll = Article.fetchAll;
