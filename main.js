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
		var answer_eval_text = "That's right!";
	} else {
		var answer_eval_text = "Wrong!";
	};
	answer_evaluation.innerHTML = answer_eval_text;
	left_website_name.innerHTML = left_website[0] + " is";
	right_website_name.innerHTML = right_website[0] + " is";
	left_website_rank.innerHTML = "the No. " + left_website[1] + " biggest website in the world.";
	right_website_rank.innerHTML = "the No. " + right_website[1] + " biggest website in the world.";
}

$('#right_hand_side').click(function() {
    var user_chose_site = right_website;
    var rejected_site = left_website;
});


// Reload page on button click

$('#refresh_button').click(function() {
    location.reload();
});
