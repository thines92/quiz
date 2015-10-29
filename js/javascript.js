/**
 * Created by tyler on 10/28/15.
 */

var allQuestions = [{question1: "What is 1 + 1?", choices:["1", "2", "3", "4"]}];

//alert(JSON.stringify(allQuestions[0].choices[0]));
$("#submitButton").click(function() {
    $("#question1").val(1);
    $("#question1").text("Hello There");
})
