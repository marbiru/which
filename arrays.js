// new media

var buzzfeed_array = [
	"Buzzfeed",
	103,
];

var vice_array = [
	"Vice",
	215,
]

var huffington_post_array = [
	"Huffington Post",
	102,
];

var diply_array = [
	"Diply",
	62,
];

var new_media_array = [
	buzzfeed_array,
	vice_array,
	huffington_post_array,
	diply_array,
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

var fox_news_array = [
	"Fox News",
	214,
]

var old_media_array = [
	new_york_times_array,
	guardian_array,
	bbc_array,
	fox_news_array,
];


// u.s. site

var linked_in_array = [
	"LinkedIn",
	13,
];

var instagram_array = [
	"Instagram",
	33,
];

var ebay_array = [
	"Ebay",
	18,
];

var yahoo_array = [
	"Yahoo",
	4,
];

var us_sites_array = [
	linked_in_array,
	instagram_array,
	ebay_array,
	yahoo_array,
];

// non-u.s. site

var vk_array = [
	"Vkontakte",
	32,
];

var weibo_array = [
	"Weibo",
	15,
];

var taobao_array = [
	"Taobao",
	8,
];

var baidu_array = [
	"Baidu",
	5,
];

var non_us_sites_array = [
	vk_array,
	weibo_array,
	taobao_array,
	baidu_array,
];

// googles

var google_india = [
	"Google India",
	11,
];

var google_japan = [
	"Google Japan",
	19,
];

var google_germany = [
	"Google Germany",
	21,
];

var google_uk = [
	"Google UK",
	26,
];

var google_france = [
	"Google France",
	34,
];

var google_poland = [
	"Google Poland",
	82,
];

var google_turkey = [
	"Google Turkey",
	71,
];

var google_brazil = [
	"Google Brazil",
	31,
];

// this could be done better, so that on every turn the programme picks two completely random google_countries to match against each other.

var europe_googles_array = [
	google_germany,
	google_uk,
	google_france,
	google_poland,
];

var non_europe_googles_array = [
	google_india,
	google_japan,
	google_brazil,
	google_turkey,
];

// All the arrays together, in matched pairs

var ultimate_array = [
	[new_media_array, old_media_array],
	[us_sites_array, non_us_sites_array],
	[europe_googles_array, non_europe_googles_array],
];

// pick a random element from array

function select_random(array){
  return array[Math.floor(Math.random() * array.length)];
};


// pick a pseudorandom element from 
function select_pseudo_random(array){
	random_index = Math.floor(Math.random() * (array.length - 1));
 	selected_element = array[random_index];
 	array.splice(random_index, 1);
 	array.push(selected_element);
 	return selected_element;
};

// technically this pseudorandom generator has a problem in our ussage because on-page-load the last item in each array is never selected. This doesn't seem important, though. 