//= require jquery
//= require jquery-ui
$(function(){
	var major = ['w', 'w', 'h', 'w', 'w', 'w', 'h'];
	var minor = ['w', 'h', 'w', 'w', 'h', 'w', 'w'];
	$(document).on('click', '.play-scale', function(){
		var rootNote = $('.scale-choice').find(":selected").val();
		var endValue = rootNote.slice(-1);
		var endNote = rootNote.slice(0, - 1); 
		var temp = parseInt(endValue);
		temp += 1
		endNote = endNote + temp.toString();

		var mode = $(".mode");
		mode = "major";
		var delay = 0;
		var before = $( "[data-note='" + rootNote + "']" ).prev();
		var after = $("[data-note='" + endNote + "']").next()


		if(mode == "major"){
			$(before).nextUntil(after).each(function(index, div){
				if(index == 0){
					play(div, delay);
					delay += 1

				}
				else if(index == 2){
					play(div, delay);
					delay += 1
				}
				else if(index == 4){
					play(div, delay);
					delay += 1
				}
				else if(index == 5){
					play(div, delay);
					delay += 1
				}

				else if(index == 7){
					play(div, delay);
					delay += 1
				}
				else if(index == 9){
					play(div, delay);
					delay += 1
				}
				else if(index == 11){
					play(div, delay);
					delay += 1
				}
				else if(index == 12){
					play(div, delay);
					delay += 1
				}
			});
		}
		else if(mode == "minor"){
		}
	});

	function play(div, delay){
		$(div).delay(delay*700).animate({"background-color": "Red" }, 1000, function(){});
		if($(div).hasClass("white-key")){
			$(div).animate({"background-color": "#FFF" }, 200, function(){});
		}
		else{
			$(div).animate({"background-color": "#000" }, 200, function(){});
		}

	}
});