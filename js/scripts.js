
$(document).ready(function(){
  var j = false;
  do {
    var input = prompt("Which Animal do you want to learn about? Turtles, Snakes, Insects");
    if (input === "turtles") {
      $("#turtles").show();
      j = true;
    }
    if (input === "snakes") {
      $("#snakes").show();
      j = true;
    }
    if (input === "insects") {
      $("#insects").show();
      j = true;
    }
  } while (j === false);

});
