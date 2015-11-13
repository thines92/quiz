/**
 * Created by tyler on 10/28/15.
 */

var allQuestions = [
  {question: "What is 1 + 1?", choices: [ 1, 2, 3, 4 ], correctAnswer: [2]},
  {question: "What is 2 + 2?", choices: [6, 2, 3, 4,], correctAnswer: [4]},
  {question: "What is 3 + 3?", choices: [3, 6, 9, 12], correctAnswer: [6]}
];

var newArray = shuffleArray(allQuestions);

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
  if (newArray == "undefined" || newArray == "null" || newArray.length == 0) {
    document.getElementById("questionForm").innerHTML = "Complete!";
  } else {
      for (i = 0; i < 4; i++) {
        $("#questionForm").append("<input name='question' type='radio' value='" +
         JSON.stringify(newArray[0].choices[i]) + "'>" + JSON.stringify(newArray[0].choices[i]) )
       }
     }
}

$(function () {
  $("#questionList").empty();
  appendQuestions();
})
alert(newArray[0].correctAnswer);

function isCorrectAnswer() {
  checkedVal = $("input[name=question]:checked").val();
  if (checkedVal == newArray[0].correctAnswer) {
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
}

$("#submitButton").click(function() {
  isCorrectAnswer();
  $("#questionForm").empty();
  newArray.shift();
  appendQuestions();
})
