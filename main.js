$(function(){
  $( "#left_hand_side" ).text(print_left_hand_side());
  $( "#right_hand_side" ).text(print_right_hand_side());
  $( "#answer" ).on( "dialogclose", function() {
    $( "#left_hand_side" ).text(print_left_hand_side());
    $( "#right_hand_side" ).text(print_right_hand_side());      
  });
});

function print_left_hand_side(){
  var new_media = select_random(new_media_array);
  left_website = new_media;
  left_hand_side.innerHTML = left_website[0];
};

function print_right_hand_side(){
  var old_media = select_random(old_media_array);
  right_website = old_media;
  right_hand_side.innerHTML = right_website[0];
};

$('#left_hand_side').click(function(){
    window.selected_website = left_website;
    window.rejected_website = right_website;
    $("#answer_evaluation").text(print_answer());
});	

$('#right_hand_side').click(function(){
    window.selected_website = right_website;
    window.rejected_website = left_website;
    $("#answer_evaluation").text(print_answer());
});

function print_answer(){
	if (selected_website[1] < rejected_website[1]) {
		var correct_array = ["That's right!", "You're right!", "Spot on!", "You got it!"]
    // replace with select_random
		var answer_eval_text = correct_array[Math.floor(Math.random()*correct_array.length)];
	} else {
		var wrong_array = ["Wrong!", "Not quite!", "'fraid not",]
    // replace with select_random
		var answer_eval_text = wrong_array[Math.floor(Math.random()*wrong_array.length)];
	};

	answer_output.innerHTML = 
  answer_eval_text + 
  "<br /> <br />" +
  "<i>" + selected_website[0] + "</i> ranks <br />" +
  "<u> No. " + selected_website[1] + "</u> <br />" +
  "in the world." +
  "<br /> <br />" +
  "<i>" + rejected_website[0] + "</i> ranks <br />" +
	"<u> No. " + rejected_website[1] + "</u> <br />" +
  "in the world.";
}

$(function() {
    $( "#answer" ).dialog({
      autoOpen: false,
      show: {
        effect: "puff",
        duration: 500
      },
      hide: {
        effect: "scale",
        duration: 500
      }
    });
 
    $( "#left_hand_side, #right_hand_side" ).click(function() {
      $( "#answer" ).dialog( "open" );
    });
});