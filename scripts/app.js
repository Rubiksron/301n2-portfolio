$('#nav1').hover(function(){
  $('.links').hide();
  $('.name').hide();
  $('.hiddenDiv1').fadeIn();
},function(){
  $('.hiddenDiv1').hide();
  $('.name').show();
  $('.links').show();
});

$('#nav2').hover(function(){
  $('.links').hide();
  $('.name').hide();
  $('#nav1').hide();
  $('#nav3').hide();
  $('.hiddenDiv2').fadeIn();
});
$('.button2').click(function(){
  $('.hiddenDiv2').hide();
  $('.name').show();
  $('.links').show();
  $('#nav1').show();
  $('#nav3').show();
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
