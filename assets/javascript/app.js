//Make sure that nothing happens until page is comepletel loaded.
$(document).ready(function() {

  //Create question objects in an array
  //Each questions has an attribute of question, answer, choices
  var questions = [
    {
      question: "How much did it cost for WuTang to record their single 'Protect Ya Neck'?",
      answer: "$300",
      choices: ["$1,500", "$300", "$420", "$3,000"]
    },
    {
      question: "What does C.R.E.A.M. stand for?",
      answer: "Cash Rules Everything Around Me",
      choices: ["It was code for drug paraphernalia", "Curry Rice, Edibles, And Money", "Cash Rules Everything Around Me", "Cosmic Ray Energetics and Mass"]
    },
    {
      question: "The majority of WuTang members are from what New York City borough?",
      answer: "Staten Island",
      choices: ["Staten Island", "Queens", "Brooklyn", "the Bronx"]
    },
    {
      question: "Who is the first person to rhyme on WuTang's 1993 debut album?",
      answer: "Ghostface Killah",
      choices: ["RZA", "Method Man", "ODB", "Ghostface Killah"]
    }
  ]

  //Creat containers for right and wrong answer tallies
  var right = 0;
  var wrong = 0;

  //Create the timer number
  var number = 30;

  //Variable that will hold our interval ID when we execute the "run" function
  var intervalId;

  //Audio URL
  var audio = new Audio("http://a990.phobos.apple.com/us/r30/Music/60/bb/0d/mzm.sxzcaadl.aac.p.m4a");

  // Loops through questions and prints
  for (var i = 0; i < questions.length; i++) {
    
    // Creates question section
    var printQuestion = $("<div>");

    // Add bootstrap class for styles
    printQuestion.addClass("form-group");

    // Create area for question to be actually printed
    var question = $("<label>");

    // Give that section it's question
    //question.text(questions[i].question);
    question.html("<p class='labelTxt'>" + questions[i].question + "</p>");

    // Loop through possible choices for each question and print them out (using j because i is already being used)
    for (var j = 0; j < questions[i].choices.length; j++) {
      // Create div for each radio button
      var choice = $("<div>");
      // Add bootstrap class to it
      choice.addClass("form-check radio");

      // Create area for choice/possible answer
      var choiceText = $("<label>");
      // Give them styles
      choiceText.addClass("form-check-label");
      // Give it text
      //choiceText.text(questions[i].choices[j])
      choiceText.html("<p>" + questions[i].choices[j] + "</p>");

      // Create actual radio button
      var choiceInput = $("<input>");
      // Adds bootstrap class
      choiceInput.addClass("form-check-input"); 
      // Sets input type to radio (instead of text, number, etc)
      choiceInput.attr("type", "radio");
      // Give radio buttons for each question same name so they are related to one another (select one and the others deselect)
      choiceInput.attr("name", i);
      // Give it a data attribute to potentially check against for correct question
      choiceInput.attr("data-question", i);
      // Give it a data attribute to check against for correct answer
      choiceInput.attr("data-answer", j);

      // Place ChoiceText and ChoiceInput into Choice div
      choice.append(choiceInput).append(choiceText);

      // Append entire choice to question
      question.append(choice);

    }
    
    // Append entire question to div
    printQuestion.append(question)

    // Append entire div to form
    $(".form-element").append(printQuestion);

  }

  // Bind event handler for all elements with a radio type (see jQuery selectors)
  $("body").on("change", ":radio", function() {
    var userChoice = $(this).data("answer");
    console.log(userChoice)
    
  //if the userChoice equals the index of the "answer" in that questions' choices array
  //if (userChoice == indexOf() {
    //right++;
  //} else {
    //wrong++;
  //}
  //if the userChoice is not equal to the index of the "answer" in that questions' choices array 
    console.log(questions[0].answer);
    console.log(questions[1].answer);
    console.log(questions[2].answer);
    console.log(questions[3].answer);
  })


//The run function sets an interval that runs the decrement function once a second.
function run() {
    intervalId = setInterval(decrement, 1000);
}
  
  //The decrement function.
    function decrement() {
      //Decrease number by one.
      number--;
      //Show the number in the #timeLeft tag.
      $("#timeLeft").html("<h4>Time Remaining: " + number + " seconds</h4>");

      //  Once number hits zero...
      if (number === 0) {
        //  ...run the stop function.
        stop();
        $(".form-element").hide();
        audio.play();

        //  Alert the user that time is up and how many they got right/wrong.
        $("#results").html("<h2>Time's Up!</h2>" + "<br>" +
                         "<p class='labelTxt'>You got " + right + " answers right.</p>" +
                         "<p class='labelTxt'>You got " + wrong + " answers wrong.</p>" +
                         "<div style='text-align:left;'>" +
                         "<p>The WuTang Clan recorded their first single, Protect Ya Neck, for <b>$300</b>. <br> They allegedly paid for the session in quarters.</p>" +
                         "<p>C.R.E.A.M. stands for <b>Cash Rules Everything Around Me</b>.</p>" +
                         "<p>Six of the nine members of the WuTang Clan are from <b>Staten Island</b>. <br> The remaining three members are from Brooklyn.</p>" +
                         "<p><b>Ghostface Killah</b> is the first to rhyme on the group's 1993 debut album, <br> Enter the WuTang's first track, Bring Da Ruckus.</p>" +
                         "<img class='img-fluid' src='assets/images/group1.jpg'>" +
                         "</div>");
      }
    }
    //  The stop function
    function stop() {
      //  Clears our intervalId
      clearInterval(intervalId);
    }
//Execute the run function.
run();

}); //$(document).ready();