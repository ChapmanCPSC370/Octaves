//= require jquery
$(function(){
	$(document).on("click", ".sign-up", function(){
		$("#sign-in-popup").show();
	});
  $(document).on("click", ".log-in", function(){
    $("#log-in-popup").show();
  });
  
    $(document).on("click", ".close-popup", function(){
      $("#sign-in-popup").hide();
      $("#log-in-popup").hide();
    });
});