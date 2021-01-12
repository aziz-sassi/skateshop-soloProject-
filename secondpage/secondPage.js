let count = 0;
$('.si').hide();
//if add to cart btn clicked
$('#cart_btn1').on('click', function (){
 count = count + 1;
$('.item-num').text(count);
$('#skate1').toggle(1000)
});
$('#cart_btn2').on('click', function (){
 count = count + 1;
$('.item-num').text(count);
$('#skate2').toggle(1000)
});
$('#cart_btn3').on('click', function (){
 count = count + 1;
$('.item-num').text(count);
$('#skate3').toggle(1000)
});
$('#cart_btn4').on('click', function (){
 count = count + 1;
$('.item-num').text(count);
$('#skate4').toggle(1000)
});
$('.cart-nav').on('click', function (){
  count = 0;
  $('.item-num').text(count);
  $('#skate1').show(1000);
  $('#skate2').show(1000);
  $('#skate3').show(1000);
  $('#skate4').show(1000);

})
$('.buy').on('click', function (){
$('.si').show(1000);

});
$('#winbtnn').on('click', function (){
	alert('enjoy your product!')})