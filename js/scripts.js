$(document).ready(function(){
  $("#submitButton").click(function(event) {
    event.preventDefault();
    let foodValue = $("input#food").val();
    console.log(foodValue);
    alert(foodValue);
    console.log("hello");

  });
});
console.log("hello");
