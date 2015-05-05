// this is placeholder, will need to be properly determined

var left_website = websites_array[0];

var right_website = websites_array[1]; 

// You've GOT to learn how to do this in jQuery TK or do you? document.getElementById might just be the right way to do it TK UPDATE: have deleted getElementById, not even sure what's happening now.

left_hand_side.innerHTML = left_website[0];

right_hand_side.innerHTML = right_website[0];

// dummy for now

var user_chose_site = right_website;

var rejected_site = left_website;

// did the user get the answer right?

if (user_chose_site[1] < rejected_site[1]) {
	answer_evaluation.innerHTML = "That's right!"
} else {
	answer_evaluation.innerHTML = "Wrong!"
}

//names of websites in answer

left_website_name.innerHTML = left_website[0];

right_website_name.innerHTML = right_website[0];

//ranks of websites in answer

left_website_rank.innerHTML = left_website[1];

right_website_rank.innerHTML = right_website[1];

// Reload page on button click

$('#refresh_button').click(function() {
    location.reload();
});
