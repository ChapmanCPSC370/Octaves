//= require jquery
$(function(){
	$(document).on("click", ".sign-up", function(){
		console.log("clicked");
		$("#sign-in-popup").show();
	});
  
    $(document).on("click", ".close-popup", function(){
      $("#sign-in-popup").hide();
    });
});