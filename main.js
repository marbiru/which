var scroll_counter = 0

$(function(){
  $( "#left_hand_side, #right_hand_side" ).text(print_options());
  $( "#answer" ).on( "dialogclose", function() {
    $( "#left_hand_side, #right_hand_side" ).text(print_options());    
  });
});

function print_options(){
  current_pair = ultimate_array[scroll_counter];
  left_array = current_pair[0];
  left_website = select_pseudo_random(left_array);
  left_hand_side.innerHTML = left_website[0];
  right_array = current_pair[1];
  right_website = select_pseudo_random(right_array);
  right_hand_side.innerHTML = right_website[0];
  scroll_counter = (scroll_counter + 1) % ultimate_array.length;
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

score = 0;
score_output.innerHTML = score;

function print_answer(){
	if (selected_website[1] < rejected_website[1]) {
		var correct_array = ["That's right!", "You're right!", "Spot on!", "You got it!"];
		var answer_eval_text = select_pseudo_random(correct_array);
    score += 1;
    score_output.innerHTML = score;
	} else {
		var wrong_array = ["Wrong!", "Not quite!", "'fraid not",];
		var answer_eval_text = select_pseudo_random(wrong_array);
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