$(document).ready(function(){
  $(".nav a").click(function() {
    $(".active").removeClass("active");
    $(this).addClass("active");
  });
});
