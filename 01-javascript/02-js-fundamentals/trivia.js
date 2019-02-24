$(document).ready(function(){
  $.get("https://opentdb.com/api.php?amount=5&type=multiple", displayTrivia)
  function displayTrivia(data) {
    const trivia = [].concat(data.results);
    for(let index=0; index < trivia.length; index++){
      let question_num = index + 1;
      let category_id = "Category" + question_num;
      let question_id = "Question" + question_num;
      let answer_id0 = "Answer" + question_num + '_' + '0';
      let answer_id1 = "Answer" + question_num + '_' + '1';
      let answer_id2 = "Answer" + question_num + '_' + '2';
      let answer_id3 = "Answer" + question_num + '_' + '3';
      document.getElementById(category_id).innerHTML = trivia[index].category;
      document.getElementById(question_id).innerHTML = trivia[index].question;
      document.getElementById(answer_id0).innerHTML = trivia[index].correct_answer;
      document.getElementById(answer_id1).innerHTML = trivia[index].incorrect_answers[0];
      document.getElementById(answer_id2).innerHTML = trivia[index].incorrect_answers[1];
      document.getElementById(answer_id3).innerHTML = trivia[index].incorrect_answers[2];
    }
  } 
})