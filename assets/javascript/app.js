var right = 0;
var wrong = 0;

var number = 30;

//  Variable that will hold our interval ID when we execute the "run" function
var intervalId;

//  The run function sets an interval that runs the decrement function once a second.
function run() {
    intervalId = setInterval(decrement, 1000);
}
	
	//  The decrement function.
    function decrement() {

    	//  Decrease number by one.
    	number--;

    	//  Show the number in the #timeLeft tag.
    	$("#timeLeft").html("<h4>Time Remaining: " + number + " seconds</h4>");

   
    	//  Once number hits zero...
    	if (number === 0) {

    		//  ...run the stop function.
    		stop();

    		//  Alert the user that time is up and how many they got right/wrong.
    		$("#results").html("<h3>Time's Up!</h3>" + "<br>" +
        			   	   	   "<p style='margn-top: 5px;''>You got " + right + " answers right.</p>" +
        			   	       "<p>You got " + wrong + " answers wrong.</p>");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      clearInterval(intervalId);
    }

//Execute the run function.
run();