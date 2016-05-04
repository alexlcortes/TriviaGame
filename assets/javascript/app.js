var trivGame = {
	q1: ['Kittens grow up to be cats.', true],
	q2: ['All bugs have 5 legs.', false],
	q3: ['4 + 5 = 8', false],
	q4: ['Humans need water to survive.', true],
	q5: ['Milk comes from cows.', true],
	q6: ['9 - 3 = 6', true],
	q7: ['Rocks are soft objects.', false],
	q8: ['Italy is candy.', false],
	q9: ['2 * 2 = 4', true],
	q10: ['Cars can talk.', false]
};
// Page loads when refreshed
$(document).ready(function() {

var timer = 30;

$('.start').on('click', run);
	

	function run(){
    	counter = setInterval(increment, 1000);
    	$('.start').hide("slow");
    	$('.quest1').html(trivGame.q1[0]);
    	$('.quest2').html(trivGame.q2[0]);
    	$('.quest3').html(trivGame.q3[0]);
    	$('.quest4').html(trivGame.q4[0]);
    	$('.quest5').html(trivGame.q5[0]);
    	$('.quest6').html(trivGame.q6[0]);
    	$('.quest7').html(trivGame.q7[0]);
    	$('.quest8').html(trivGame.q8[0]);
    	$('.quest9').html(trivGame.q9[0]);
    	$('.quest10').html(trivGame.q10[0]);
    }

    function increment(){
	    timer--;
		$('.show-counter').html('<h3>' + 'Time left: ' + timer + ' seconds' + '</h3>');
		if (timer === 0){
		stop();
	    alert("Time's Up!")
      	}
    }

    function stop(){
    	clearInterval(counter);
    }

});
   


