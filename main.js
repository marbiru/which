// You've GOT to learn how to do this in jQuery TK or do you? document.getElementById might just be the right way to do it TK UPDATE: have deleted getElementById, not even sure what's happening now.

left_hand_side.innerHTML = websites_array[0][0];

//document.getElementById("left_hand_side").innerHTML = websites_array[0][0];

right_hand_side.innerHTML = websites_array[1][0];

// Logic determining which website is actually bigger

// A "Right" or "Wrong" statement. var answer_evaluation with if-then logic 

//var answer_evaluation = "Right/Wrong!";

answer_evaluation.innerHTML = "Right/Wrong!";


// this is placeholder, will need to be properly randomised
var left_website = websites_array[0];

var right_website = websites_array[1]; 

//names of websites

left_website_name.innerHTML = left_website[0];

right_website_name.innerHTML = right_website[0];

//ranks of websites

left_website_rank.innerHTML = left_website[1];

right_website_rank.innerHTML = right_website[1];