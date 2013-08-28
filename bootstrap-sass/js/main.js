$(document).ready(function(){
  $(".nav li").click(function() {
    $(".active").removeClass("active");
    $(this).addClass("active");
  });

  // ============================== 
  // changing pages shows divs
  // ============================== 
  var navigationControl = function( clickedEl, showContainer, hideContainers ) {
    $(clickedEl).click(function(e){
      e.preventDefault();
      $(hideContainers).addClass("hide");
      $(showContainer).removeClass("hide");
    });
  };

  // instances
  // home
  navigationControl( "#home", "#homeContainer", "#packagingContainer, #printingContainer, #displaysContainer, #warehousingContainer, #showcaseContainer, #testimonialsContainer" );
  // packaging
  navigationControl( "#packaging", "#packagingContainer", "#homeContainer, #printingContainer, #displaysContainer, #warehousingContainer, #showcaseContainer, #testimonialsContainer" );
  // printing
  navigationControl( "#printing", "#printingContainer", "#homeContainer, #packagingContainer, #displaysContainer, #warehousingContainer, #showcaseContainer, #testimonialsContainer" );
  // displays
  navigationControl( "#displays", "#displaysContainer", "#homeContainer, #packagingContainer, #printingContainer, #warehousingContainer, #showcaseContainer, #testimonialsContainer" );
  // warehosing
  navigationControl( "#warehousing", "#warehousingContainer", "#homeContainer, #packagingContainer, #printingContainer, #displaysContainer, #showcaseContainer, #testimonialsContainer" );
  // showcase
  navigationControl( "#showcase", "#showcaseContainer", "#homeContainer, #packagingContainer, #printingContainer, #displaysContainer, #warehousingContainer, #testimonialsContainer" );
  // testimonials
  navigationControl( "#testimonials", "#testimonialsContainer", "#homeContainer, #packagingContainer, #printingContainer, #displaysContainer, #warehousingContainer, #showcaseContainer" );

});
