(function() {

	//
	// Variables
	// --------------------------------------------------

  // Notes variables
	var notes = {
    "1C": new Howl({
        urls: [ "assets/audios/261-C.mp3" ]
    }),
    "1Cs": new Howl({
        urls: [ "assets/audios/277-C-sharp.mp3" ]
    }),
    "1D": new Howl({
        urls: [ "assets/audios/293-D.mp3" ]
    }),
    "1Ds": new Howl({
        urls: [ "assets/audios/311-D-sharp.mp3" ]
    }),
    "1E": new Howl({
        urls: [ "assets/audios/329-E.mp3" ]
    }),
    "1F": new Howl({
        urls: [ "assets/audios/349-F.mp3" ]
    }),
    "1Fs": new Howl({
        urls: [ "assets/audios/369F-sharp.mp3" ]
    }),
    "1G": new Howl({
        urls: [ "assets/audios/391-G.mp3" ]
    }),
    "1Gs": new Howl({
        urls: [ "assets/audios/415-G-sharp.mp3" ]
    }),
    "2A": new Howl({
        urls: [ "assets/audios/440-A.mp3" ]
    }),
    "2As": new Howl({
        urls: [ "assets/audios/466-A-sharp.mp3" ]
    }),
    "2B": new Howl({
        urls: [ "assets/audios/495-B.mp3" ]
    }),
    "2C": new Howl({
        urls: [ "assets/audios/523-C.mp3" ]
    }),
    "2Cs": new Howl({
        urls: [ "assets/audios/545-C-sharp.mp3" ]
    }),
    "2D": new Howl({
        urls: [ "assets/audios/587-D.mp3" ]
    }),
    "2Ds": new Howl({
        urls: [ "assets/audios/622-D-sharp.mp3" ]
    }),
    "2E": new Howl({
        urls: [ "assets/audios/659-E.mp3" ]
    }),
    "2F": new Howl({
        urls: [ "assets/audios/698-F.mp3" ]
    }),
    "2Fs": new Howl({
        urls: [ "assets/audios/698-F-sharp.mp3" ]
    }),
    "2G": new Howl({
        urls: [ "assets/audios/783-G.mp3" ]
    }),
    "2Gs": new Howl({
        urls: [ "assets/audios/830-G-sharp.mp3" ]
    }),
    "3A": new Howl({
        urls: [ "assets/audios/880-A.mp3" ]
    }),
    "3As": new Howl({
        urls: [ "assets/audios/932-A-sharp.mp3" ]
    }),
    "3B": new Howl({
        urls: [ "assets/audios/987-B.mp3" ]
    })
	};

	// Lock event for play
	var lockEvent = {};

	//
	// Events
	// --------------------------------------------------

	// Disable Select
	// --------------------------------------------------
	$('.piano').bind('selectstart dragstart', function(ev) {
	  ev.preventDefault();
	  return false;
	});

	// Piano Play Keyboard
    // --------------------------------------------------
	$(window).bind('keydown keyup', function(ev) {
		var keyNo = ev.which;
        var $key = $('[data-key="'+keyNo+'"]');
        var note = $key.attr('data-note');
		if(note){
			if (ev.type == 'keydown') {
				if (!lockEvent[keyNo]) {
					notes[note].play();
					lockEvent[keyNo] = true;
					$key.addClass('active');
					$key.parent().addClass('active');
		 		}
			}
			else if (ev.type == 'keyup') {
				lockEvent[keyNo] = false;
				$key.removeClass('active');
				$key.parent().removeClass('active');
			}
		}
	});

	// Piano Play Click
  // --------------------------------------------------
	$('.key > span').mousedown(function(){
		// Save note
		var me = $(this);
		var noteClick = me.attr('data-note');
		// Play sound
		notes[noteClick].play();
	});


})();

