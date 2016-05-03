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
	    }

	    function increment(){
		    timer--;
			$('.show-counter').html('<h2>' + timer + '</h2>');
			if (timer === 0){
			stop();
		    alert("Time's Up!")
	      	}
	    }

	    function stop(){
	    	clearInterval(counter);
	    }

	});
   


