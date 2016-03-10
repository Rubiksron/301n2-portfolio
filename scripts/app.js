$('#nav1').hover(function(){
  $('.hiddenDiv1').fadeIn();
},function(){
  $('.hiddenDiv1').hide();
});

$('#nav2').hover(function(){
  $('.hiddenDiv2').fadeIn();
});
$('.button2').click(function(){
  $('.hiddenDiv2').hide();
});

$('#nav3').hover(function(){
  $('.hiddenDiv3').fadeIn();
},function(){
  $('.hiddenDiv3').hide();
});
