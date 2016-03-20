
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
  $('.iframe2').hide();
  $('#videoCloseButton').hide();
});
$('#videoButton2').click(function(){
  $('.hiddenDiv3').hide();
  $('.iframe2').show();
  $('#videoCloseButton').show();
  $('#nav3').hide();
});

$(document).ready(function(){
  $('.iframe3').hide();
  $('.scrollToTop').hide();
  $('#videoCloseButton').hide();
});
$('#cards').click(function(){
  $('.hiddenDiv3').hide();
  $('.iframe3').show();
  $('#videoCloseButton').show();
  $('.scrollToTop').show();
  $('#nav3').hide();
});

$(document).ready(function(){
  $('.iframe3').hide();
  $('.scrollToTop').hide();
  $('#videoCloseButton').hide();
});
$('#finale').click(function(){
  $('.hiddenDiv3').hide();
  $('.iframe3').show();
  $('#videoCloseButton').show();
  $('.scrollToTop').show();
  $('#nav3').hide();
});


$('#videoCloseButton').click(function(){
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
$('.scrollToTop').click(function(){
  $('.scrollToTop').fadeOut();
});

$(document).ready(function(){
  $(window).scroll(function(){
  	if ($(this).scrollTop() > 2000) {
  		$('.scrollToTop').fadeIn(500);
      // $('.scrollToTop').fadeOut();
  	}
  });
  $('.scrollToTop').click(function(){
	 $('html, body').animate({scrollTop : 0},800);
	 return false;
  });

});
