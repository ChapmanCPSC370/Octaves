//= require jquery

$(function(){
	$(document).on("click", ".sign-up", function(){
		console.log("clicked");
		$("#sign-in-popup").show();
	});
});