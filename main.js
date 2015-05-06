// this is placeholder, will need to be properly determined

var left_website = websites_array[0];

var right_website = websites_array[1]; 

left_hand_side.innerHTML = left_website[0];

right_hand_side.innerHTML = right_website[0];

$('#left_hand_side').click(function(){
    window.selected_site = left_website;
    window.rejected_site = right_website;
    $("#answer_evaluation").text(print_answer());
});	

$('#right_hand_side').click(function(){
    window.selected_site = right_website;
    window.rejected_site = left_website;
    $("#answer_evaluation").text(print_answer());
});

function print_answer(){
	if (selected_site[1] < rejected_site[1]) {
		var correct_array = ["That's right!", "You're right!", "Spot on!", "You got it!"]
		var answer_eval_text = correct_array[Math.floor(Math.random()*correct_array.length)];
	} else {
		var wrong_array = ["Wrong!", "Not quite!", "'fraid not",]
		var answer_eval_text = wrong_array[Math.floor(Math.random()*wrong_array.length)];
	};
	answer_evaluation.innerHTML = answer_eval_text;
	left_website_name.innerHTML = left_website[0] + " is ranked";
	right_website_name.innerHTML = right_website[0] + " is ranked";
	left_website_rank.innerHTML = "No. " + left_website[1] + " in the world";
	right_website_rank.innerHTML = "No. " + right_website[1] + " biggest website in the world.";
}

// Reload page on button click

$('#refresh_button').click(function() {
    location.reload();
});
