/**
 * Created by tyler on 10/28/15.
 */

var allQuestions = [{question1: "What is 1 + 1?", choices: [ "1", "2", "3", "4" ]},
  {question2: "What is 2 + 2?", choices: ["6", "2", "3", "4",]},
  {question3: "What is 3 + 3?", choices: ["3", "6", "9", "12"]}];

 function getRandomNumber() {
   randomNumber = Math.floor(Math.random() * 2) + 1;

   return randomNumber;
 }

 function isNumberDuplicate(randomNumber, tempNumber) {
   if (randomNumber == tempNumber) {
     getRandomNumber();
   }
 }

 function appendQuestions(randomNumber) {
   $("#questionList").append("<input id='question1' type='radio'>" +
    JSON.stringify(allQuestions[tempNumber - 1].choices[0]) + "</input>")
   $("#questionList").append("<input id='question2' type='radio'>" +
    JSON.stringify(allQuestions[tempNumber - 1].choices[1]) + "</input>")
   $("#questionList").append("<input id='question3' type='radio'>" +
    JSON.stringify(allQuestions[tempNumber - 1].choices[2]) + "</input>")
   $("#questionList").append("<input id='question4' type='radio'>" +
    JSON.stringify(allQuestions[tempNumber - 1].choices[3]) + "</input>")
 }

$("#submitButton").click(function () {
  $("#questionList").empty();
  tempNumber = getRandomNumber();
  isNumberDuplicate();
  appendQuestions();
})
