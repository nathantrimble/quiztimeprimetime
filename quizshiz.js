$(document).ready(function(){

  for (let n = 1; n<= 5; n++){
  $("#c"+n).click(function(){
  $("#aN"+n).text("Correct Answer!!!")
  });

  $(".false"+n).click(function(){
  $("#aN"+n).text("Incorrect, try again!")
    alert("You will now pay for your transgression. ");
    alert("You will now pay for your transgression. ");
    alert("You will now pay for your transgression. ");
    alert("You will now pay for your transgression. ");
    alert("You will now pay for your transgression. ");

  });
  }
});
