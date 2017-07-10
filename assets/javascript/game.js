var compChoice = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var guessNumber = 10;
var hatQuestion = ['_', '_', '_', ' ','_', '_', '_', '_', '_',];
var cupQuestion = ['_', '_', '_', '_', '_', '_', '_', ' ', '_', '_', '_',];
var goalQuestion = ['_', '_', '_', '_', ' ', '_', '_', '_', '_',];
var roughQuestion = ['_', '_', '_', '_', '_', '_', '_', '_',];
var fiveQuestion = ['_', '_', '_', '_', ' ','_', '_', '_', '_',];
var guessList = [];
var confirm = 0;

//sets up initial layout and question
var question = [hatQuestion, cupQuestion, goalQuestion, roughQuestion, fiveQuestion];
var nextQuestion = question[Math.floor(Math.random() * question.length)];
var targetDiv = document.getElementById("currentword");
targetDiv.innerHTML = nextQuestion.join("");

document.getElementById("wins").innerHTML = wins;
document.getElementById("guessnumber").innerHTML = guessNumber;

document.onkeyup = function(event) {
	var userGuess = event.key;

	// function for hat trick question
	function hattrick() {
		if (confirm == 7) {
			confirm = 0;
			wins+=1;
			guessNumber = 10;
			hatQuestion = ['_', '_', '_', ' ','_', '_', '_', '_', '_',];
			document.getElementById("guessnumber").innerHTML = guessNumber;
			document.getElementById("wins").innerHTML = wins;
			nextQuestion = question[Math.floor(Math.random() * question.length)];
			targetDiv.innerHTML = nextQuestion.join("");
			guessList = [];
			document.getElementById("guesses").innerHTML = guessList;
			document.getElementById("leftimage").src='assets/images/hattrick.jpg';
			return;
		}

		if (guessNumber == 0) {
			confirm = 0;
			guessNumber = 10;
			hatQuestion = ['_', '_', '_', ' ','_', '_', '_', '_', '_',];
			document.getElementById("guessnumber").innerHTML = guessNumber;
			nextQuestion = question[Math.floor(Math.random() * question.length)];
			targetDiv.innerHTML = nextQuestion.join("");
			guessList = [];
			document.getElementById("guesses").innerHTML = guessList;
			return;
		}

		if (nextQuestion.includes(userGuess)) {}
		else {
			if (userGuess == 'h') {
				nextQuestion[0] = 'H';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'a') {
				nextQuestion[1] = 'A';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 't') {
				nextQuestion[2] = 'T';
				nextQuestion[4] = 'T';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'r') {
				nextQuestion[5] = 'R';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'i') {
				nextQuestion[6] = 'I';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'c') {
				nextQuestion[7] = 'C';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'k') {
				nextQuestion[8] = 'K';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm++;
				return confirm;
			}

			else {
				if (guessList.includes(userGuess)) {}
				else {
					guessNumber--;
					document.getElementById("guessnumber").innerHTML = guessNumber;
					guessList.push(userGuess);
					document.getElementById("guesses").innerHTML = guessList;
					return guessNumber;
				}
			}
		}
	}

	// function for stanley cup question
	function stanley() {
		if (confirm == 7) {
			confirm = 0;
			wins+=1;
			guessNumber = 10;
			cupQuestion = ['_', '_', '_', '_', '_', '_', '_', ' ', '_', '_', '_',];
			document.getElementById("guessnumber").innerHTML = guessNumber;
			document.getElementById("wins").innerHTML = wins;
			nextQuestion = question[Math.floor(Math.random() * question.length)];
			targetDiv.innerHTML = nextQuestion.join("");
			guessList = [];
			document.getElementById("guesses").innerHTML = guessList;
			document.getElementById("leftimage").src='assets/images/stanleycup.jpg';
			return;
		}

		if (guessNumber == 0) {
			confirm = 0;
			guessNumber = 10;
			cupQuestion = ['_', '_', '_', '_', '_', '_', '_', ' ', '_', '_', '_',];
			document.getElementById("guessnumber").innerHTML = guessNumber;
			nextQuestion = question[Math.floor(Math.random() * question.length)];
			targetDiv.innerHTML = nextQuestion.join("");
			guessList = [];
			document.getElementById("guesses").innerHTML = guessList;
			return;
		}

		if (nextQuestion.includes(userGuess)) {}
		else {
			if (userGuess == 's') {
				nextQuestion[0] = 'S';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 't') {
				nextQuestion[1] = 'T';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'a') {
				nextQuestion[2] = 'A';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'n') {
				nextQuestion[3] = 'N';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'l') {
				nextQuestion[4] = 'L';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'e') {
				nextQuestion[5] = 'E';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'y') {
				nextQuestion[6] = 'Y';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'c') {
				nextQuestion[8] = 'C';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'u') {
				nextQuestion[9] = 'U';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'p') {
				nextQuestion[10] = 'P';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else {
				if (guessList.includes(userGuess)) {}
				else {
					guessNumber--;
					document.getElementById("guessnumber").innerHTML = guessNumber;
					guessList.push(userGuess);
					document.getElementById("guesses").innerHTML = guessList;
					return guessNumber;
				}
			}
		}
	}

	// function for goal horn question
	function goalhorn() {
		if (confirm == 7) {
			confirm = 0;
			wins+=1;
			guessNumber = 10;
			goalQuestion = ['_', '_', '_', '_', ' ', '_', '_', '_', '_',];
			document.getElementById("guessnumber").innerHTML = guessNumber;
			document.getElementById("wins").innerHTML = wins;
			nextQuestion = question[Math.floor(Math.random() * question.length)];
			targetDiv.innerHTML = nextQuestion.join("");
			guessList = [];
			document.getElementById("guesses").innerHTML = guessList;
			document.getElementById("leftimage").src='assets/images/goalhorn.png';
			return;
		}

		if (guessNumber == 0) {
			confirm = 0;
			guessNumber = 10;
			goalQuestion = ['_', '_', '_', '_', ' ', '_', '_', '_', '_',];
			document.getElementById("guessnumber").innerHTML = guessNumber;
			nextQuestion = question[Math.floor(Math.random() * question.length)];
			targetDiv.innerHTML = nextQuestion.join("");
			guessList = [];
			document.getElementById("guesses").innerHTML = guessList;
			return;
		}

		if (nextQuestion.includes(userGuess)) {}
		else {
			if (userGuess == 'g') {
				nextQuestion[0] = 'G';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'o') {
				nextQuestion[1] = 'O';
				nextQuestion[6] = 'O';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'a') {
				nextQuestion[2] = 'A';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'l') {
				nextQuestion[3] = 'L';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'h') {
				nextQuestion[5] = 'H';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'r') {
				nextQuestion[7] = 'R';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'n') {
				nextQuestion[8] = 'N';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else {
				if (guessList.includes(userGuess)) {}
				else {
					guessNumber--;
					document.getElementById("guessnumber").innerHTML = guessNumber;
					guessList.push(userGuess);
					document.getElementById("guesses").innerHTML = guessList;
					return guessNumber;
				}
			}
		}
	}

	// function for roughing question
	function rough() {
		if (confirm == 7) {
			confirm = 0;
			wins+=1;
			guessNumber = 10;
			roughQuestion = ['_', '_', '_', '_', '_', '_', '_', '_',];
			document.getElementById("guessnumber").innerHTML = guessNumber;
			document.getElementById("wins").innerHTML = wins;
			nextQuestion = question[Math.floor(Math.random() * question.length)];
			targetDiv.innerHTML = nextQuestion.join("");
			guessList = [];
			document.getElementById("guesses").innerHTML = guessList;
			document.getElementById("leftimage").src='assets/images/roughing.jpg';
			return;
		}

		if (guessNumber == 0) {
			confirm = 0;
			guessNumber = 10;
			roughQuestion = ['_', '_', '_', '_', '_', '_', '_', '_',];
			document.getElementById("guessnumber").innerHTML = guessNumber;
			nextQuestion = question[Math.floor(Math.random() * question.length)];
			targetDiv.innerHTML = nextQuestion.join("");
			guessList = [];
			document.getElementById("guesses").innerHTML = guessList;
			return;
		}

		if (nextQuestion.includes(userGuess)) {}
		else {
			if (userGuess == 'r') {
				nextQuestion[0] = 'R';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'o') {
				nextQuestion[1] = 'O';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'u') {
				nextQuestion[2] = 'U';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'g') {
				nextQuestion[3] = 'G';
				nextQuestion[7] = 'G';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'h') {
				nextQuestion[4] = 'H';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'i') {
				nextQuestion[5] = 'I';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'n') {
				nextQuestion[6] = 'N';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else {
				if (guessList.includes(userGuess)) {}
				else {
					guessNumber--;
					document.getElementById("guessnumber").innerHTML = guessNumber;
					guessList.push(userGuess);
					document.getElementById("guesses").innerHTML = guessList;
					return guessNumber;
				}
			}
		}
	}

	// function for five hole question
	function fivehole() {
		if (confirm == 7) {
			confirm = 0;
			wins+=1;
			guessNumber = 10;
			fiveQuestion = ['_', '_', '_', '_', ' ','_', '_', '_', '_',];
			document.getElementById("guessnumber").innerHTML = guessNumber;
			document.getElementById("wins").innerHTML = wins;
			nextQuestion = question[Math.floor(Math.random() * question.length)];
			targetDiv.innerHTML = nextQuestion.join("");
			guessList = [];
			document.getElementById("guesses").innerHTML = guessList;
			document.getElementById("leftimage").src='assets/images/fivehole.png';
			return;
		}

		if (guessNumber == 0) {
			confirm = 0;
			guessNumber = 10;
			fiveQuestion = ['_', '_', '_', '_', ' ','_', '_', '_', '_',];
			document.getElementById("guessnumber").innerHTML = guessNumber;
			nextQuestion = question[Math.floor(Math.random() * question.length)];
			targetDiv.innerHTML = nextQuestion.join("");
			guessList = [];
			document.getElementById("guesses").innerHTML = guessList;
			return;
		}

		if (nextQuestion.includes(userGuess)) {}
		else {
			if (userGuess == 'f') {
				nextQuestion[0] = 'F';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'i') {
				nextQuestion[1] = 'I';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'v') {
				nextQuestion[2] = 'V';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'e') {
				nextQuestion[3] = 'E';
				nextQuestion[8] = 'E';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'h') {
				nextQuestion[5] = 'H';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'o') {
				nextQuestion[6] = 'O';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else if (userGuess == 'l') {
				nextQuestion[7] = 'L';
				targetDiv.innerHTML = nextQuestion.join("");
				confirm+=1;
				return confirm;
			}

			else {
				if (guessList.includes(userGuess)) {}
				else {
					guessNumber--;
					document.getElementById("guessnumber").innerHTML = guessNumber;
					guessList.push(userGuess);
					document.getElementById("guesses").innerHTML = guessList;
					return guessNumber;
				}
			}
		}
	}



	// restricts key strokes to only letter keys and initializes question
	if (compChoice.includes(userGuess)) {
		if (nextQuestion == hatQuestion) {
			hattrick();
		}
	
		else if (nextQuestion == cupQuestion) {
			stanley();
		}
	
		else if (nextQuestion == goalQuestion) {
			goalhorn();
		}
	
		else if (nextQuestion == roughQuestion) {
			rough();
		}
	
		else if (nextQuestion == fiveQuestion) {
			fivehole();
		}
	}
}
