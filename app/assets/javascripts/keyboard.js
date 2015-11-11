//= require jquery
//= require jquery-ui
$(function(){
	var major = ['w', 'w', 'h', 'w', 'w', 'w', 'h'];
	var naturalMinor = ['w', 'h', 'w', 'w', 'h', 'w', 'w'];
	var harmonicMinor = ['w', 'h', 'w', 'w', 'h', 'w#', 'w'];
	var melodicMinor = ['w', 'h', 'w', 'w', 'w', 'w', 'h'];
	var pentatonicBlues = ['w#', 'w', 'h', 'h', 'w#', 'w']

	$(document).on('click', '.play-scale', function(){
		var rootNote = $('.scale-choice').find(":selected").val();
		var rootNumber = $("[data-note= '" + rootNote + "']").data("key-number");
		var mode = $('.mode-choice').find(":selected").val();
		var delay = 0;

		if(mode == "major"){
			playScale(major, rootNumber, delay);
		}
		else if(mode == "natural-minor"){
			playScale(naturalMinor, rootNumber, delay);

		}
		else if(mode == "harmonic-minor"){
			playScale(harmonicMinor, rootNumber, delay);
		}
		else if(mode == "melodic-minor"){
			playScale(melodicMinor, rootNumber, delay);

		}
		else if(mode == "pentatonic-blues"){
			playScale(pentatonicBlues, rootNumber, delay);
		}
	});

	function playScale(scale, root, delay){
		var number = root;
		for(var i = 0; i < scale.length; i++){
			if (number == root){
			  play($("[data-key-number= '" + root + "']"), delay);
				delay += 1;
			}

			if(scale[i] == "w"){
				number = number + 2;
			}
			else if(scale[i] == "h"){
				number += 1;
			}
			else{
				number += 3;
			}
			play($("[data-key-number= '" + number + "']"), delay);
			delay += 1;
		}
	}
	function play(div, delay){
    //$(".c-note")[0].currentTime = 0
    //$(".c-note")[0].load();
    //$(".c-note")[0].play();
    // var audio = document.createElement("audio");
    //audio.src = "/assets/c_note.wav"; 
		//audio.play();
			
		$(div).delay(delay*700).animate({"background-color": "Red" }, 600, function(){});
		if($(div).hasClass("white-key")){
			$(div).animate({"background-color": "#FFF" }, 200, function(){});
		}
		else{
			$(div).animate({"background-color": "#000" }, 200, function(){});
		}
		//$(".c-note")[0].pause();

	}
});