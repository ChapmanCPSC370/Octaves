//= require jquery
//= require jquery-ui
$(function(){
	var major = ['w', 'w', 'h', 'w', 'w', 'w', 'h'];
	var naturalMinor = ['w', 'h', 'w', 'w', 'h', 'w', 'w'];
	var harmonicMinor = ['w', 'h', 'w', 'w', 'h', 'w#', 'h'];
	var melodicMinor = ['w', 'h', 'w', 'w', 'w', 'w', 'h'];
	var minorPentatonicBlues = ['w#', 'w', 'h', 'h', 'w#', 'w'];
	var majorPentatonicBlues = ['w', 'h', 'h', 'w#', 'w', 'w#'];
	var majorPentatonic = ['w','w','w#','w','w#'];
	var minorPentatonic = ['w#','w','w','w#','w'];

	$(document).on('click', '.play-scale', function(){
		var rootNote = $('.scale-choice').find(":selected").val();
		var rootNumber = $("[data-note= '" + rootNote + "']").data("key-number");
		var mode = $('.mode-choice').find(":selected").val();
		var delay = 0;

		switch(mode){
			case "major": 
				playScale(major, rootNumber, delay);
				break;
			
			case "natural-minor":
				playScale(naturalMinor, rootNumber, delay);
				break;
			case "harmonic-minor":
				playScale(harmonicMinor, rootNumber, delay);
				break;
			case "melodic-minor":
				playScale(melodicMinor, rootNumber, delay);
				break;
			case "natural-minor":
				playScale(naturalMinor, rootNumber, delay);
				break;
			case "minor-pentatonic-blues":
				playScale(minorPentatonicBlues, rootNumber, delay);
				break;
			case "major-pentatonic-blues":
				playScale(majorPentatonicBlues, rootNumber, delay);
				break;
			case "major-pentatonic":
				playScale(majorPentatonic, rootNumber, delay);
				break;
			case "minor-pentatonic":
				playScale(minorPentatonic, rootNumber, delay);
				break;
		}

	//	if(mode == "major"){
	//	}
		/*if(mode == "natural-minor"){

		}
		else if(mode == "harmonic-minor"){
			playScale(harmonicMinor, rootNumber, delay);
		}
		else if(mode == "melodic-minor"){
			playScale(melodicMinor, rootNumber, delay);

		}
		else if(mode == "minor-pentatonic-blues"){
			playScale(minorPentatonicBlues, rootNumber, delay);
		}
		else if(mode == "major-pentatonic-blues"){
			playScale(majorPentatonicBlues, rootNumber, delay); 
		}*/
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