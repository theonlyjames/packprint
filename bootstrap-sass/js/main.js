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
      $(hideContainers).addClass("hideen");
      $(showContainer).removeClass("hideen");
    });
  };

  // instances
  // home
  navigationControl( "#home", "#homeContainer", "#packagingContainer, #printingContainer, #displaysContainer, #warehousingContainer, #showcaseContainer, #testimonialsContainer, #designContainer, #equiptmentContainer" );
  // packaging
  navigationControl( "#packaging", "#packagingContainer", "#homeContainer, #printingContainer, #displaysContainer, #warehousingContainer, #showcaseContainer, #testimonialsContainer, #designContainer, #equiptmentContainer" );
  // printing
  navigationControl( "#printing", "#printingContainer", "#homeContainer, #packagingContainer, #displaysContainer, #warehousingContainer, #showcaseContainer, #testimonialsContainer, #designContainer, #equiptmentContainer" );
  // displays
  navigationControl( "#displays", "#displaysContainer", "#homeContainer, #packagingContainer, #printingContainer, #warehousingContainer, #showcaseContainer, #testimonialsContainer, #designContainer, #equiptmentContainer" );
  // warehosing
  navigationControl( "#warehousing", "#warehousingContainer", "#homeContainer, #packagingContainer, #printingContainer, #displaysContainer, #showcaseContainer, #testimonialsContainer, #designContainer, #equiptmentContainer" );
  // showcase
  navigationControl( "#showcase", "#showcaseContainer", "#homeContainer, #packagingContainer, #printingContainer, #displaysContainer, #warehousingContainer, #testimonialsContainer, #designContainer, #equiptmentContainer" );
  // testimonials
  navigationControl( "#testimonials", "#testimonialsContainer", "#homeContainer, #packagingContainer, #printingContainer, #displaysContainer, #warehousingContainer, #showcaseContainer, #designContainer, #equiptmentContainer" );
  // design
  navigationControl( "#design", "#designContainer", "#homeContainer, #packagingContainer, #printingContainer, #displaysContainer, #warehousingContainer, #showcaseContainer, #testimonialsContainer, #equiptmentContainer" );
  // equiptment
  navigationControl( "#equiptment", "#equiptmentContainer", "#homeContainer, #packagingContainer, #printingContainer, #displaysContainer, #warehousingContainer, #showcaseContainer, #testimonialsContainer, #designContainer" );

});

//$(".nav li a").click(function() {
//  var section = $(this).attr("href");
//  console.log(section);
//});

  //$(".sectionContainer").each(function() {
  //  $(this).addClass("hide");
  //});
