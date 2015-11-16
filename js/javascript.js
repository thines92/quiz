/**
 * Created by tyler on 10/28/15.
 */

var allQuestions = [
  {question: "What is 1 + 1?", choices: [ 1, 2, 3, 4 ], correctAnswer: [2]},
  {question: "What is 2 + 2?", choices: [6, 2, 3, 4,], correctAnswer: [4]},
  {question: "What is 3 + 3?", choices: [3, 6, 9, 12], correctAnswer: [6]}
];

var newArray = shuffleArray(allQuestions);

var correctAnswer = 0;

var appendQuestionsCount = 0;

//Shuffles the original allQuestions array to put the questions in random order
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function appendQuestions(number) {
  //Append 4 radio buttons with the corresponding answers
  if (appendQuestionsCount == newArray.length) {
    $("#questionLabel").empty();
    document.getElementById("questionForm").innerHTML = "Complete!";
    quizScoreTotal();
  } else {
      //Show question label
      document.getElementById("questionLabel").innerHTML =
        newArray[appendQuestionsCount].question;

      for (i = 0; i < 4; i++) {
        $("#questionForm").append("<input name='question' type='radio' value='" +
         JSON.stringify(newArray[appendQuestionsCount].choices[i]) + "'>"
          + JSON.stringify(newArray[appendQuestionsCount].choices[i]) )
       }
     }
}

function isCorrectAnswer() {

  checkedVal = $("input[name=question]:checked").val();
  if (checkedVal == newArray[appendQuestionsCount].correctAnswer) {
    correctAnswer++
  }
  appendQuestionsCount++;
}

function quizScoreTotal() {
  quizScore = correctAnswer / allQuestions.length * 100;
  return quizScore;
}

$(function () {
  $("#questionForm").empty();
  appendQuestions();
})

$("#submitButton").click(function() {
  isCorrectAnswer();
  $("#questionForm").empty();
  appendQuestions();
})
