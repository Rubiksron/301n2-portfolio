$('#nav1').hover(function(){
  $('.hiddenDiv1').fadeIn();
},function(){
  $('.hiddenDiv1').hide();
});

$('#nav3').hover(function(){
  $('.hiddenDiv3').fadeIn();
});
$('.button3').click(function(){
  $('.hiddenDiv3').hide();
});

$('#nav2').hover(function(){
  $('.hiddenDiv2').fadeIn();
},function(){
  $('.hiddenDiv2').hide();
});
