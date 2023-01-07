/*HI ALL.
LETS SEE IF YOU GUYS HAVE A CURIOUS MIND TO FIND OUT WHAT IS HAPPENING ROUND THE WORLD.*/

var readlineSync = require('readline-sync');
var userName = readlineSync.question("Hey! , What's your name ?\n");

var Score = 0;


console.log("Welcome " + userName + " to the WORLD-AFFAIRS QUIZ....  ");
function playQNA(question, answer) {
	var userAnswer = readlineSync.question(question);

	if (userAnswer.toUpperCase() === answer.toUpperCase()) {
		console.log("Correct answer");
		Score++;
	}
	else {
		console.log("Wrong Answer, Better luck next time");
	}
	console.log("The Score is = ", Score);
	console.log("---------------------- \n")

}

var questions = [{
	question: "\nHow many countries share land borders with our country India ? \n",
	answer: "7"
}, {
	question: "Apart from India, USA and Japan who is the 4th country in group of QUAD ?\n",
	answer: "Australia"
}, {
	question: " Which country out of these three are at the horn of Africa?\n a)Kenya \n b)Somalia\n c)Nigeria\n",
	answer: "b"
}, {
	question: "Where are the WHO headquaters located at?\n",
	answer: "Geneva"
}, {
	question: "Is there a national sport(s) of India?  Yes or No \n",
	answer: "No"
}]


for (var i = 0; i < questions.length; i++) {

	var currentQues = questions[i];
	playQNA(currentQues.question, currentQues.answer)
}

console.log("Alright !" + userName + " ,you are done and your final score is : " + Score)