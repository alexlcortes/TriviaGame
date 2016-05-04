var trivGame = [
	{q1: 'Kittens grow up to be cats.', Options: ['true', ' false'], Answer: true},
	{q2: 'All bugs have 5 legs.', Options: ['true', 'false'] , Answer: false},
	{q3: '4 + 5 = 8', Options: ['true', 'false'] , Answer: false},
	{q4: 'Humans require water.', Options: ['true', 'false'] , Answer: true},
	{q5: 'Milk comes from cows.', Options: ['true', 'false'] , Answer: true},
	{q6: '9 - 3 = 6', Options: ['true', 'false'] , Answer: true},
	{q7: 'Rocks are soft objects.', Options: ['true', 'false'] , Answer: false},
	{q8: 'Italy is candy.', Options: ['true', 'false'] , Answer: false},
	{q9: '2 * 2 = 4', Options: ['true', 'false'] , Answer: true},
	{q10: 'Cars can talk.', Options: ['true', 'false'] , Answer: false}
];
// Page loads when refreshed
$(document).ready(function() {

var timer = 30;

$('.ans1').hide();
$('.ans2').hide();

$('.start').on('click', run);
	

	

	function run(){
    	counter = setInterval(increment, 1000);
    	$('.ans1').show();
    	$('.ans2').show();
    	$('.start').hide("slow");

    	$('.quest1').html(trivGame[0].q1);
    		$('.ans1').html(trivGame[0].Options[0]);
    		$('.ans2').html(trivGame[0].Options[1]);

    	$('.quest2').html(trivGame[1].q2);
    		$('.ans1').html(trivGame[1].Options[0]);
    		$('.ans2').html(trivGame[1].Options[1]);

    	$('.quest3').html(trivGame[2].q3);
    		$('.ans1').html(trivGame[2].Options[0]);
    		$('.ans2').html(trivGame[2].Options[1]);

    	$('.quest4').html(trivGame[3].q4);
    		$('.ans1').html(trivGame[3].Options[0]);
    		$('.ans2').html(trivGame[3].Options[1]);

    	$('.quest5').html(trivGame[4].q5);
    		$('.ans1').html(trivGame[4].Options[0]);
    		$('.ans2').html(trivGame[4].Options[1]);

    	$('.quest6').html(trivGame[5].q6);
    	    $('.ans1').html(trivGame[5].Options[0]);
    		$('.ans2').html(trivGame[5].Options[1]);

    	$('.quest7').html(trivGame[6].q7);
    	    $('.ans1').html(trivGame[6].Options[0]);
    		$('.ans2').html(trivGame[6].Options[1]);

    	$('.quest8').html(trivGame[7].q8);
    	    $('.ans1').html(trivGame[7].Options[0]);
    		$('.ans2').html(trivGame[7].Options[1]);

    	$('.quest9').html(trivGame[8].q9);
    	    $('.ans1').html(trivGame[8].Options[0]);
    		$('.ans2').html(trivGame[8].Options[1]);

    	$('.quest10').html(trivGame[9].q10);
    	    $('.ans1').html(trivGame[9].Options[0]);
    		$('.ans2').html(trivGame[9].Options[1]);

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
   


