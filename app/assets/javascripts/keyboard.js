//= require jquery
//= require jquery-ui
$(function(){
	var major = ['w', 'w', 'h', 'w', 'w', 'w', 'h'];
	var minor = ['w', 'h', 'w', 'w', 'h', 'w', 'w'];
	$(document).on('click', '.play-scale', function(){
		var rootNote = $('.scale-choice').find(":selected").val();
		console.log(rootNote);
		var mode = $(".mode");
		mode = "major";
		var delay = 0;
		if(mode == "major"){
			$(".keyboard-background").children("div").each(function(index, div){
				if(index == 0){
					delay += 1
					play(div, delay);
				}
				else if(index == 2){
					delay += 1

					play(div, delay);
				}
				else if(index == 4){
					delay += 1
					play(div, delay);
				}
				else if(index == 5){
					delay += 1
					play(div, delay);
				}

				else if(index == 7){
					delay += 1
					play(div, delay);
				}
				else if(index == 9){
					delay += 1
					play(div, delay);
				}
				else if(index == 11){
					delay += 1
					play(div, delay);
				}
				else if(index == 12){
					delay += 1
					play(div, delay);
				}
			});
		}
		else if(mode == "minor"){
		}
	});
	
	function play(div, delay){
		$(div).delay(delay*700).animate({"background-color": "Red" }, 1000, function(){});
		$(div).animate({"background-color": "#FFF" }, 200, function(){});

	}
});