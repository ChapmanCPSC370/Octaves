//= require jquery
//= require jquery-ui
$(function(){
	var major = ['w', 'w', 'h', 'w', 'w', 'w', 'h'];
	var naturalMinor = ['w', 'h', 'w', 'w', 'h', 'w', 'w'];
	var harmonicMinor = ['w', 'h', 'w', 'w', 'h', 'w#', 'w'];
	var melodicMinor = ['w', 'h', 'w', 'w', 'w', 'w', 'h'];

	$(document).on('click', '.play-scale', function(){
		var rootNote = $('.scale-choice').find(":selected").val();
		var rootNumber = $("[data-note= '" + rootNote + "']").data("key-number");
		var mode = $('.mode-choice').find(":selected").val();
		var delay = 0;
		var number = rootNumber;

		if(mode == "major"){
			for(var i = 0; i < major.length; i++){
				if (number == rootNumber){
				  play($("[data-key-number= '" + rootNumber + "']"), delay);
					delay += 1;
				}

				if(major[i] == "w"){
					number = number + 2;
				}
				else{
					number += 1;
				}
				play($("[data-key-number= '" + number + "']"), delay);
				delay += 1;
			}
		}
		else if(mode == "natural-minor"){
			for(var i = 0; i < naturalMinor.length; i++){
				if (number == rootNumber){
				  play($("[data-key-number= '" + rootNumber + "']"), delay);
					delay += 1;
				}
				if(naturalMinor[i] == "w"){
					number = number + 2;
				}
				else{
					number += 1;
				}
				play($("[data-key-number= '" + number + "']"), delay);
				delay += 1;
			}
		}
		else if(mode == "harmonic-minor"){
			for(var i = 0; i < harmonicMinor.length; i++){
				if (number == rootNumber){
				  play($("[data-key-number= '" + rootNumber + "']"), delay);
					delay += 1;
				}

				if(harmonicMinor[i] == "w"){
					number = number + 2;
				}
				else if(harmonicMinor[i] == "h"){
					number += 1;
				}
				else{
					number += 3;
				}
				play($("[data-key-number= '" + number + "']"), delay);
				delay += 1;
			}
		}
		else if(mode == "melodic-minor"){
			for(var i = 0; i < melodicMinor.length; i++){
				if (number == rootNumber){
				  play($("[data-key-number= '" + rootNumber + "']"), delay);
					delay += 1;
				}

				if(melodicMinor[i] == "w"){
					number = number + 2;
				}
				else if(melodicMinor[i] == "h"){
					number += 1;
				}
				play($("[data-key-number= '" + number + "']"), delay);
				delay += 1;
			}
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