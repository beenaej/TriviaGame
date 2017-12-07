// 1. create an object that holds the question answer key value pairs
// 2. create an array of answers
// 3. create a variable to hold correct answer count
// 4. create a variable to hold wrong answer count

// 5. create a counter variable to keep track of elapsed time 

// 5a. give player 120 seconds to begin


// 6. countdown starts when player clicks on start button

// 7. player choice compared to correct answer

// 8. if player answer correct, increment correct answer counter

// 9. If player answer wrong, increment wrong answer counter

// 10. game ends when either of two happens:
//   10a. player clicks done
// 	 10b. time runs out

//create an object to hold the quiz questions

var questions = [
    {
        question: "What city is the only one located on two continents?",
        answers: {
            a: 'Tanjer',
            b: 'Istanbul',
            c: 'Athens',
            d: 'Kadis'
        },
        correctAnswer: 'b'
    },
    {
        question: "In the devilish year of 1666, a great fire occured in this European Capital city. Half of it burned down",
        answers: {
            a: 'Vienna',
            b: 'Paris',
            c: 'London',
            d: 'Rome'
        },
        correctAnswer: 'c'
    },
    {
        question: "This city situated south of China is made up of 230 islands, Lantau Island being the largest.",
        answers: {
            a: 'Taipei',
            b: 'Shanghai',
            c: 'Hong Kong',
            d: 'Peking'
        },
        correctAnswer: 'c'
    },
    {
        question: "Which busy megapolis in the US has 70,000 miles of rivers and streams?",
        answers: {
            a: 'New York',
            b: 'Houston',
            c: 'Chicago',
            d: 'San Francisco'
        },
        correctAnswer: 'a'
    },
    {
        question: "What is the citadel of Moscow called?",
        answers: {
            a: 'Tiananmen Square',
            b: 'Kremlin',
            c: 'Ginza',
            d: 'Tahrir Square'
        },
        correctAnswer: 'b'
    },
    {
        question: "Which Indian city is famed for its clock tower?",
        answers: {
            a: 'Delhi',
            b: 'Kolkata',
            c: 'Pune',
            d: 'Mumbai'
        },
        correctAnswer: 'd'
    },
    {
        question: "Which city does not have an obelisk?",
        answers: {
            a: 'London',
            b: 'Cairo',
            c: 'Rome',
            d: 'Ulaanbataar'
        },
        correctAnswer: 'd'
    },
    {
        question: "In what city was the first skyscraper built?",
        answers: {
            a: 'Hong Kong',
            b: 'Durban',
            c: 'London',
            d: 'Chicago'
        },
        correctAnswer: 'd'
    },
    {
        question: "What city is the only major world capital named after a religion?",
        answers: {
            a: 'Islamabad',
            b: 'Christiansed',
            c: 'Christianburg',
            d: 'Seoul'
        },
        correctAnswer: 'a'
    },
    {
        question: "Which French city is known famously as the City of Lights?",
        answers: {
            a: 'Nice',
            b: 'Lyon',
            c: 'Paris',
            d: 'Versailles'
        },
        correctAnswer: 'c'
    }

  ];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');


var myTimerObj = (function(document){
   
   var myTimer;

   function start() {
     myTimer = setInterval(myClock, 1000);
     var c = 100;

     function myClock() {
       document.getElementById("timer").innerHTML = --c;
       if (c == 0) {
         clearInterval(myTimer);
         alert("Your time is up!");
       }
     }
   }
   
   function end() {
       clearInterval(myTimer)
   }

   return {start:start, end:end};
 })(document);




generateQuiz(questions, quizContainer, resultsContainer, submitButton);



console.log('I am working');

  function generateQuiz(questions, quizContainer, resultsContainer,submitButton){
  		function showQuestions(questions, quizContainer){
  			//we'll need a place to store the output and the answer choices
  			var output = [];

  			var answers;

  			//for each question..
  			for(var i=0; i<questions.length; i++){
  				//first reset the list of answers
  				answers = [];
  				console.log('What questions: ' +questions[i]);
  				//for each available answer to this question
  				for(letter in questions[i].answers){
  					//add an HTML radio button
  					answers.push(
  						'<label>'
  						+'<input type="radio" name="question'+i+'" value="'+letter+'">'
  						+ letter + ': '
  						+questions[i].answers[letter]
  						+'</label>'
  					);
  					console.log(questions);
  				}
  			
  		// add this question and its answers to the output
  		output.push(
  			'<div class="question">' + questions[i].question + '</div>'
  			+ '<div class="answers">' + answers.join('') + '</div>'
  			);
  	}

  	 //finally combine out output list into one string of HTML and push it on the page
      quizContainer.innerHTML = output.join('');
 }


 function showResults(questions, quizContainer, resultsContainer){
 		//gather answer containers for our quiz
 		var answerContainers = quizContainer.querySelectorAll('.answers');

 		//keep track of user's answers
 		var userAnswer = '';
 		var numCorrect = 0;

 		//for each question..
 		for(var i=0; i<questions.length; i++){

 			//find selected answer
 			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

 			//if answer is correct
 			if(userAnswer===questions[i].correctAnswer){
 				//add to the number of correct answers
 				numCorrect++;

 				//color the answers green
 				answerContainers[i].style.color = 'lightgreen';
 			}
 			//if answer is wrong or blank
 			else{
 				//color the answers red
 				answerContainers[i].style.color = 'red';
 			}
 		}

 		//show number of correct answers out of total
 		resultsContainer.innerHTML = 'You got ' + numCorrect + ' out of ' + questions.length + ' questions right!';
 } 

showQuestions(questions, quizContainer);

submitButton.onclick = function(){
	showResults(questions, quizContainer, resultsContainer);
	}
}







 



