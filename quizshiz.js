$(document).ready(function(){

  for (let n = 1; n<= 5; n++){
  $("#c"+n).click(function(){
  alert("Correct!");
  $("#q"+n).text("Correct Answer!!!")
  $("")
  });

  $(".false"+n).click(function(){
  alert("False!");
  $("#q"+n).text("Incorrect, try again!")
  });
  }
  
  $()

});
