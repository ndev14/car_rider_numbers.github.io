$(function() {
    $('body').removeClass('fade-out');
});

var input = $( "input:reset" ).css({
});
$( "#formBox" ).submit(function( event ) {
  event.preventDefault();
});

 $(".leftButtons").click(function(e){
    var clickedButton = $(this);
    var data = clickedButton.data().display;
    console.log(typeof data);
    console.log(data);
   
   // RESET
    $("#leftDisplay").removeClass();
    $("#leftH2").text('');

   // SET TO INSTANCE
    $("#leftDisplay").addClass(data.background);
    $("#leftH2").text(data.text);
    $("#leftDisplay").fadeIn(500);
   
});

$(".leftClose").click(function(e){
   $("#leftDisplay").fadeOut(500);
});


 $(".midButtons").click(function(e){
    var clickedButton = $(this);
    var data = clickedButton.data().display;
    console.log(typeof data);
    console.log(data);
   
   // RESET
    $("#midDisplay").removeClass();
    $("#midH2").text('');

   // SET TO INSTANCE
    $("#midDisplay").addClass(data.background);
    $("#midH2").text(data.text);
    $("#midDisplay").fadeIn(500);
   
});

$(".midClose").click(function(e){
   $("#midDisplay").fadeOut(500);
});



 $(".rightButtons").click(function(e){
    var clickedButton = $(this);
    var data = clickedButton.data().display;
    console.log(typeof data);
    console.log(data);
   
   // RESET
    $("#rightDisplay").removeClass();
    $("#rightH2").text('');

   // SET TO INSTANCE
    $("#rightDisplay").addClass(data.background);
    $("#rightH2").text(data.text);
    $("#rightDisplay").fadeIn(500);
   
});

$(".rightClose").click(function(e){
   $("#rightDisplay").fadeOut(500);
});

