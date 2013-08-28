$(document).ready(function(){
  $(".nav a").click(function() {
    $(".active").removeClass("active");
    $(this).addClass("active");
  });

  // ============================== 
  // changing pages shows divs
  // ============================== 
  $("#home").click(function(){
    $("#homeContainer").toggle("fast");
  });
});
