$('.showen').hide()
$('#hider').on('click', function (){
	$('.hiden').hide(1000);
	$('.showen').show(1000);
	$('.inp').show(1100);


})
function insrt(num) {
	$('.display').val($('.display').val()+num);}

