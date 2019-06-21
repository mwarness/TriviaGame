var panel = $("#play-area");

// button functions

$(document).on("click", "#start", function(event){
  game.start();
});

$(document).on("click", "#done", function(event){
  game.done();
});

// question and answers
var questions = [{
	question: "What is the most populated city in the world?",
	choices: ["Shanghai", "Moscow", "NYC"],
	correctAnswer: "Shanghai"

}, 
{	

    question: "Who coined the phrase, \"Shake it like a polaroid picture\" ? ",
	choices: ["Kanye West", "Andre 3000", "Katy Perry"],
	correctAnswer: "Andre 3000"

}, 
{

	question: "What is the most effective way to garner \"clout\" ?",
    choices: ["Build a strong social network", "Make that cash money", "Sell your soul to the devil"],
	correctAnswer: "Build a strong social network"

}, 
{

    question: "What was Gator's profession in The Other Guys?",
	choices: ["Forensic accountant", "P.I.M.P.", "Police officer"],
	correctAnswer: "P.I.M.P."

},
{

    question: "Who invented the hot dog?",
	choices: ["Nathan Handwerker", "Charles Feltman", "Oscar Mayer"],
	correctAnswer: "Charles Feltman"

}, 
{

	question: "Back to clout... who would \"do anything for clout?\"",
	choices: ["Tekashi 69", "Offset", "Donald Trump"],
	correctAnswer: "Offset"

},
{

	question: "Why does Johnny Depp wear so many bracelets??",
	choices: ["He is a warlock", "He's Johnny freakin Depp", "Having a mid-life crisis"],
	correctAnswer: "Having a mid-life crisis"

}];
// timer

var game = {
	correct: 0,
	incorrect: 0,
	counter: 60,

  countdown: function() {
  	game.counter--;
  	$("#counter-number").html(game.counter);

  	if (game.counter === 0) {
  		alert("TIME'S UP");
  		game.done();

  	}
  },
// zeeeeeee game

  start: function() {
  	timer = setInterval(game.countdown, 1000);
  	$('#subcontainer').prepend('<h2>Time Remaining: <span id="counter-number">60</span> Seconds</h2>');
  	$("#start").remove();

  	for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].choices.length; j++){
        panel.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].choices[j] + '">' + questions[i].choices[j]);
        }
  		}
  		panel.append("<button id='done'>Finished!</button>");
      
  	},

  	done: function() {

  		$.each($("input[name='question-0']:checked"), function() {
  			if ($(this).val() == questions[0].correctAnswer) {
  				console.log(this);
  				  game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-1']:checked"), function() {
  			if ($(this).val() == questions[1].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-2']:checked"), function() {
  			if ($(this).val() == questions[2].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-3']:checked"), function() {
  			if ($(this).val() == questions[3].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-4']:checked"), function() {
  			if ($(this).val() == questions[4].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});

  		this.results();
  	},


  	  results:function() {
  	  	clearInterval(timer);

  	  	$("#subcontainer h2").remove();
  	   panel.html("<h2>Finished!</h2>");
  	   panel.append("<h3>You got this many right because you're super random or a google ninja: " + this.correct + "</h3>");
  	   panel.append("<h3>You got this many wrong because you're most likely normal: " + this.incorrect + "</h3>");
  	   panel.append("<h3>You didn't answer this many because you're busy looking up how to garner clout: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  	  
  	  }

  };