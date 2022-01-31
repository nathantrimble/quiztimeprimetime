$(document).ready(function(){

  for (let n = 1; n<= 4; n++)
  $("#c"+n).click(function(){
  alert("Correct!");
  });

  for (let qn = 1; qn<= 4; qn++)
  $(".false"+qn).click(function(){
  alert("False!");
  });


});
