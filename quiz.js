let totalScore = 0;
var userName
let incorrectQuestions = [];

function validateForm() {
        userName = document.getElementById("name").value;
		if (userName.trim() === "") 
		{
			alert("Please enter your name.");
			return;
		}
		
		document.querySelector(".Starter-Page").style.display = 'none';
		document.querySelector(".question-1").style.display = 'block';
}


function validateAnswer1() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
	
	//if (selectedOption.classList.contains("correct-1")) {
     //   totalScore += 1;
    //}
	//if (!selectedOption.classList.contains("correct-1")) {
    //    incorrectQuestions.push(document.querySelector(".q-1").textContent);
    //}

    //totalScore += selectedOption.classList.contains("correct-1") ? 1 : 0;
	    // Check if the selected option is correct
    if (!selectedOption.classList.contains("correct-1")) {
    // If incorrect, push an object containing detailed information to the incorrectQuestions array
		incorrectQuestions.push({
        question: document.querySelector(".q-1").textContent,
		userAnswer: selectedOption.nextSibling.textContent.trim(),
		correctAnswer: document.querySelector('.correct-1').nextSibling.textContent.trim(),
        isCorrect: false
		});
	} 
	else {
    // If correct, push an object containing detailed information to the incorrectQuestions array
		incorrectQuestions.push({
        question: document.querySelector(".q-1").textContent,
        userAnswer: selectedOption.nextSibling.textContent.trim(),
		correctAnswer: document.querySelector('.correct-1').nextSibling.textContent.trim(),
        isCorrect: true
		});

    // Increment totalScore since the answer is correct
		totalScore++;
	}

	
    // If an answer is selected, proceed to the next question
    document.querySelector(".question-1").style.display = 'none';
	document.querySelector(".question-2").style.display = 'block';
	selectedOption.checked = false;
}


function validateAnswer2() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
    
	//if (selectedOption.classList.contains("correct-2")) {
    //    totalScore += 1;
    //}
	
	/*if (!selectedOption.classList.contains("correct-2")) {
		incorrectQuestions.push(document.querySelector(".q-2").textContent);
    }

    totalScore += selectedOption.classList.contains("correct-2") ? 1 : 0;*/
	
	if (!selectedOption.classList.contains("correct-2")) {
    // If incorrect, push an object containing detailed information to the incorrectQuestions array
		incorrectQuestions.push({
        question: document.querySelector(".q-2").textContent,
		userAnswer: selectedOption.nextSibling.textContent.trim(),
		correctAnswer: document.querySelector('.correct-2').nextSibling.textContent.trim(),
        isCorrect: false
		});
	} 
	else {
    // If correct, push an object containing detailed information to the incorrectQuestions array
		incorrectQuestions.push({
        question: document.querySelector(".q-2").textContent,
        userAnswer: selectedOption.nextSibling.textContent.trim(),
		correctAnswer: document.querySelector('.correct-2').nextSibling.textContent.trim(),
        isCorrect: true
		});

    // Increment totalScore since the answer is correct
		totalScore++;
	}
	
    // If an answer is selected, proceed to the next question
	document.querySelector(".question-2").style.display = 'none';
	document.querySelector(".question-3").style.display = 'block';
	selectedOption.checked = false;
}


function validateAnswer3() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
    
	//if (selectedOption.classList.contains("correct-3")) {
    //    totalScore += 1;
    //}
	
	/*if (!selectedOption.classList.contains("correct-3")) {
		incorrectQuestions.push(document.querySelector(".q-3").textContent);
    }

    totalScore += selectedOption.classList.contains("correct-3") ? 1 : 0;*/
	if (!selectedOption.classList.contains("correct-3")) {
    // If incorrect, push an object containing detailed information to the incorrectQuestions array
		incorrectQuestions.push({
        question: document.querySelector(".q-3").textContent,
		userAnswer: selectedOption.nextSibling.textContent.trim(),
		correctAnswer: document.querySelector('.correct-3').nextSibling.textContent.trim(),
        isCorrect: false
		});
	} 
	else {
    // If correct, push an object containing detailed information to the incorrectQuestions array
		incorrectQuestions.push({
        question: document.querySelector(".q-3").textContent,
        userAnswer: selectedOption.nextSibling.textContent.trim(),
		correctAnswer: document.querySelector('.correct-3').nextSibling.textContent.trim(),
        isCorrect: true
		});

    // Increment totalScore since the answer is correct
		totalScore++;
	}
	
    // If an answer is selected, proceed to the next question
	document.querySelector(".question-3").style.display = 'none';
	document.querySelector(".question-4").style.display = 'block';
	selectedOption.checked = false;
}


function validateAnswer4() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
    
	//if (selectedOption.classList.contains("correct-4")) {
    //    totalScore += 1;
    //}

	/*if (!selectedOption.classList.contains("correct-4")) {
		incorrectQuestions.push(document.querySelector(".q-4").textContent);
    }

    totalScore += selectedOption.classList.contains("correct-4") ? 1 : 0;*/
	if (!selectedOption.classList.contains("correct-4")) {
    // If incorrect, push an object containing detailed information to the incorrectQuestions array
		incorrectQuestions.push({
        question: document.querySelector(".q-4").textContent,
		userAnswer: selectedOption.nextSibling.textContent.trim(),
		correctAnswer: document.querySelector('.correct-4').nextSibling.textContent.trim(),
        isCorrect: false
		});
	} 
	else {
    // If correct, push an object containing detailed information to the incorrectQuestions array
		incorrectQuestions.push({
        question: document.querySelector(".q-4").textContent,
        userAnswer: selectedOption.nextSibling.textContent.trim(),
		correctAnswer: document.querySelector('.correct-4').nextSibling.textContent.trim(),
        isCorrect: true
		});

    // Increment totalScore since the answer is correct
		totalScore++;
	}
	
    // If an answer is selected, proceed to the next question
	document.querySelector(".question-4").style.display = 'none';
	document.querySelector(".question-5").style.display = 'block';
	selectedOption.checked = false;
}


function validateAnswer5() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
	
	//if (selectedOption.classList.contains("correct-5")) {
    //    totalScore += 1;
    //}
    
	/*if (!selectedOption.classList.contains("correct-5")) {
		incorrectQuestions.push(document.querySelector(".q-5").textContent);
    }

    totalScore += selectedOption.classList.contains("correct-5") ? 1 : 0;*/
	if (!selectedOption.classList.contains("correct-5")) {
    // If incorrect, push an object containing detailed information to the incorrectQuestions array
		incorrectQuestions.push({
        question: document.querySelector(".q-5").textContent,
		userAnswer: selectedOption.nextSibling.textContent.trim(),
		correctAnswer: document.querySelector('.correct-5').nextSibling.textContent.trim(),
        isCorrect: false
		});
	} 
	else {
    // If correct, push an object containing detailed information to the incorrectQuestions array
		incorrectQuestions.push({
        question: document.querySelector(".q-5").textContent,
        userAnswer: selectedOption.nextSibling.textContent.trim(),
		correctAnswer: document.querySelector('.correct-5').nextSibling.textContent.trim(),
        isCorrect: true
		});

    // Increment totalScore since the answer is correct
		totalScore++;
	}
	
	
    // If an answer is selected, proceed to the next question
	document.querySelector(".question-5").style.display = 'none';
	document.querySelector(".question-6").style.display = 'block';
	selectedOption.checked = false;
}


function validateAnswer6() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
    
	//if (selectedOption.classList.contains("correct-6")) {
    //    totalScore += 1;
    //}
	
	/*if (!selectedOption.classList.contains("correct-6")) {
		incorrectQuestions.push(document.querySelector(".q-6").textContent);
    }

    totalScore += selectedOption.classList.contains("correct-6") ? 1 : 0;*/
	if (!selectedOption.classList.contains("correct-6")) {
    // If incorrect, push an object containing detailed information to the incorrectQuestions array
		incorrectQuestions.push({
        question: document.querySelector(".q-6").textContent,
		userAnswer: selectedOption.nextSibling.textContent.trim(),
		correctAnswer: document.querySelector('.correct-6').nextSibling.textContent.trim(),
        isCorrect: false
		});
	} 
	else {
    // If correct, push an object containing detailed information to the incorrectQuestions array
		incorrectQuestions.push({
        question: document.querySelector(".q-6").textContent,
        userAnswer: selectedOption.nextSibling.textContent.trim(),
		correctAnswer: document.querySelector('.correct-6').nextSibling.textContent.trim(),
        isCorrect: true
		});

    // Increment totalScore since the answer is correct
		totalScore++;
	}
	
	
    // If an answer is selected, proceed to the next question
	document.querySelector(".question-6").style.display = 'none';
	document.querySelector(".question-7").style.display = 'block';
	selectedOption.checked = false;
}


function validateAnswer7() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
	
	//if (selectedOption.classList.contains("correct-7")) {
    //    totalScore += 1;
    //}
    
	/*if (!selectedOption.classList.contains("correct-7")) {
		incorrectQuestions.push(document.querySelector(".q-7").textContent);
    }

    totalScore += selectedOption.classList.contains("correct-7") ? 1 : 0;*/
	if (!selectedOption.classList.contains("correct-7")) {
    // If incorrect, push an object containing detailed information to the incorrectQuestions array
		incorrectQuestions.push({
        question: document.querySelector(".q-7").textContent,
		userAnswer: selectedOption.nextSibling.textContent.trim(),
		correctAnswer: document.querySelector('.correct-7').nextSibling.textContent.trim(),
        isCorrect: false
		});
	} 
	else {
    // If correct, push an object containing detailed information to the incorrectQuestions array
		incorrectQuestions.push({
        question: document.querySelector(".q-7").textContent,
        userAnswer: selectedOption.nextSibling.textContent.trim(),
		correctAnswer: document.querySelector('.correct-7').nextSibling.textContent.trim(),
        isCorrect: true
		});

    // Increment totalScore since the answer is correct
		totalScore++;
	}
	
	
    // If an answer is selected, proceed to the next question
	document.querySelector(".question-7").style.display = 'none';
	document.querySelector(".question-8").style.display = 'block';
	selectedOption.checked = false;
}


function validateAnswer8() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
	
	//if (selectedOption.classList.contains("correct-8")) {
    //   totalScore += 1;
    //}
	
	/*if (!selectedOption.classList.contains("correct-8")) {
		incorrectQuestions.push(document.querySelector(".q-8").textContent);
    }

    totalScore += selectedOption.classList.contains("correct-8") ? 1 : 0;*/
	if (!selectedOption.classList.contains("correct-8")) {
    // If incorrect, push an object containing detailed information to the incorrectQuestions array
		incorrectQuestions.push({
        question: document.querySelector(".q-8").textContent,
		userAnswer: selectedOption.nextSibling.textContent.trim(),
		correctAnswer: document.querySelector('.correct-8').nextSibling.textContent.trim(),
        isCorrect: false
		});
	} 
	else {
    // If correct, push an object containing detailed information to the incorrectQuestions array
		incorrectQuestions.push({
        question: document.querySelector(".q-8").textContent,
        userAnswer: selectedOption.nextSibling.textContent.trim(),
		correctAnswer: document.querySelector('.correct-8').nextSibling.textContent.trim(),
        isCorrect: true
		});

    // Increment totalScore since the answer is correct
		totalScore++;
	}
	
    
    // If an answer is selected, proceed to the next question
	document.querySelector(".question-8").style.display = 'none';
	document.querySelector(".question-9").style.display = 'block';
	selectedOption.checked = false;
}


function validateAnswer9() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
	
	//if (selectedOption.classList.contains("correct-9")) {
    //    totalScore += 1;
    //}
	
	/*if (!selectedOption.classList.contains("correct-9")) {
		incorrectQuestions.push(document.querySelector(".q-9").textContent);
    }

    totalScore += selectedOption.classList.contains("correct-9") ? 1 : 0;*/
	if (!selectedOption.classList.contains("correct-9")) {
    // If incorrect, push an object containing detailed information to the incorrectQuestions array
		incorrectQuestions.push({
        question: document.querySelector(".q-9").textContent,
		userAnswer: selectedOption.nextSibling.textContent.trim(),
		correctAnswer: document.querySelector('.correct-9').nextSibling.textContent.trim(),
        isCorrect: false
		});
	} 
	else {
    // If correct, push an object containing detailed information to the incorrectQuestions array
		incorrectQuestions.push({
        question: document.querySelector(".q-9").textContent,
        userAnswer: selectedOption.nextSibling.textContent.trim(),
		correctAnswer: document.querySelector('.correct-9').nextSibling.textContent.trim(),
        isCorrect: true
		});

    // Increment totalScore since the answer is correct
		totalScore++;
	}
	
    
    // If an answer is selected, proceed to the next question
	document.querySelector(".question-9").style.display = 'none';
	document.querySelector(".question-10").style.display = 'block';
	selectedOption.checked = false;
}


function validateAnswer10(nameInput) {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
	
	//if (selectedOption.classList.contains("correct-10")) {
    //    totalScore += 1;
    //}
	
	/*if (!selectedOption.classList.contains("correct-10")) {
		incorrectQuestions.push(document.querySelector(".q-10").textContent);
    }

    totalScore += selectedOption.classList.contains("correct-10") ? 1 : 0;*/
	if (!selectedOption.classList.contains("correct-10")) {
    // If incorrect, push an object containing detailed information to the incorrectQuestions array
		incorrectQuestions.push({
        question: document.querySelector(".q-10").textContent,
		userAnswer: selectedOption.nextSibling.textContent.trim(),
		correctAnswer: document.querySelector('.correct-10').nextSibling.textContent.trim(),
        isCorrect: false
		});
	} 
	else {
    // If correct, push an object containing detailed information to the incorrectQuestions array
		incorrectQuestions.push({
        question: document.querySelector(".q-10").textContent,
        userAnswer: selectedOption.nextSibling.textContent.trim(),
		correctAnswer: document.querySelector('.correct-10').nextSibling.textContent.trim(),
        isCorrect: true
		});

    // Increment totalScore since the answer is correct
		totalScore++;
	}
	
    
    // If an answer is selected, proceed to the next question
	document.querySelector(".question-10").style.display = 'none';
	document.querySelector(".summary").style.display = 'block';
	
	/*document.getElementById('final-results').textContent = nameInput.value + " you got " + totalScore + " correct!";*/
	var finalResults = document.getElementById('final-results');
	finalResults.textContent = userName + "- your final score is: " + totalScore + " / 10";
	displayIncorrectQuestions();
}

function displayIncorrectQuestions() {
    const summary = document.querySelector(".summary");
    const incorrectQuestionsDiv = document.createElement('div');
    incorrectQuestionsDiv.innerHTML = "<h2>Quiz Responses</h2>";
	incorrectQuestionsDiv.classList.add('title');

    incorrectQuestions.forEach((questionData, index) => {
        const questionDiv = document.createElement('div');
		questionDiv.classList.add('Responses');
		
		
		// Display correctness status
        const correctness = document.createElement('p');
        correctness.textContent = questionData.isCorrect;
		if (questionData.isCorrect) {
			questionDiv.classList.add('correct');
			
			const questionText = document.createElement('p');
			questionDiv.classList.add('question-title');
			questionText.textContent = questionData.question;
			questionDiv.appendChild(questionText);
			
			// Display correct answer
			const correctAnswer = document.createElement('p');
			questionDiv.classList.add('correct-answer');
			correctAnswer.innerHTML = "<strong>Your Answer is Correct: </strong> " + questionData.correctAnswer;
			questionDiv.appendChild(correctAnswer);
		}
		else {
			questionDiv.classList.add('incorrect');
			
			const questionText = document.createElement('p');
			questionDiv.classList.add('question-title');
			questionText.textContent = questionData.question;
			questionDiv.appendChild(questionText);
			 // Display user's answer
			const userAnswer = document.createElement('p');
			questionDiv.classList.add('your-answer');
			userAnswer.innerHTML = "<strong>Your Answer:</strong> " + questionData.userAnswer;
			questionDiv.appendChild(userAnswer);
			
			// Display correct answer
			const correctAnswer = document.createElement('p');
			questionDiv.classList.add('correct-answer');
			correctAnswer.innerHTML = "<strong>Correct Answer:</strong> " + questionData.correctAnswer;
			questionDiv.appendChild(correctAnswer);
		}

        incorrectQuestionsDiv.appendChild(questionDiv);
    });

    summary.appendChild(incorrectQuestionsDiv);
	
    // Create the header for the text file
    let fileContent = "Quiz Responses:\n\n";

    incorrectQuestions.forEach((questionData, index) => {
        // Add each question and its details to the file content
        fileContent += `Question: ${questionData.question}\n`;
        fileContent += `Your Answer: ${questionData.userAnswer}\n`;
        fileContent += `Correct Answer: ${questionData.correctAnswer}\n`;
        fileContent += `Status: ${questionData.isCorrect ? "Answer is correct" : "Answer is incorrect"}\n\n`;
    });

    // Create a Blob with the content
    const blob = new Blob([fileContent], { type: 'text/plain' });

    // Create a download link
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'quiz_responses.txt';
    downloadLink.textContent = 'Download Quiz Responses';

    // Append the download link to the summary
    summary.appendChild(downloadLink);
}






/************************************	Other Javascript	************************************/
 
 window.addEventListener('beforeunload', function(event) {
    if (document.querySelector(".summary").style.display !== 'block') {
        event.preventDefault();
        event.returnValue = '';
        var confirmationMessage = 'Are you sure you want to leave this page?';
        (event || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
    }
});
