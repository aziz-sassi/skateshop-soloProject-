var score = $('#score');
var lifess = 5;
$('.showwin').hide();
$('.showen').hide();
$('.showlose').hide();

$('#hider').on('click', function (){
	$('.hiden').hide(1000);
	$('.showen').show(1000);
	$('.inp').show(1100);


})
function insrt(num) {
	$('.display').val($('.display').val()+num);}
	function C() {
	$('.display').val('');
}
	

var playersGuess;
 var winningNumber;

function random(){
	lifess = lifess-1
	score.text(parseInt(score.text()) - 1)
    winningNumber = Math.floor(Math.random() * 10);
   
    playersGuess = parseInt($('#playersGuess').val());
    if (winningNumber===playersGuess) {
    	$('.main').hide();
    	$('.showwin').show(1000)
    }
   else if (lifess<=0) {
   	$('.main').hide();
   	$('.showlose').show(1000)

   }
}






    
   




