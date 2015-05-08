// new media

var buzzfeed_array = [
	"Buzzfeed",
	103,
];

var vice_array = [
	"Vice",
	214,
]

var huffington_post_array = [
	"Huffington Post",
	102,
];

var new_media_array = [
	buzzfeed_array,
	vice_array,
	huffington_post_array,
]

// old media

var new_york_times_array = [
	"New York Times",
	101,
];

var guardian_array = [
	"The Guardian",
	153,
];

var bbc_array = [
	"The BBC",
	70,
];

var old_media_array = [
	new_york_times_array,
	guardian_array,
	bbc_array,
];


// u.s. site

var linked_in_array = [
	"LinkedIn",
	"13",
];

var instagram_array = [
	"Instagram",
	"33",
];

// non-u.s. site

var vk_array = [
	"Vkontakte",
	"32",
];

var weibo_array = [
	"Weibo",
	"15",
];

// randomiser function

function select_random(array){
  return array[Math.floor(Math.random() * array.length)];
};