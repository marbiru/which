// new media

var buzzfeed_array = [
	"Buzzfeed",
	103,
];

var vice_array = [
	"Vice",
	214,
]

var new_media_array = [
	buzzfeed_array,
	vice_array,
]

// maybe define a "random element" function to save time

var new_media = new_media_array[Math.floor(Math.random() * new_media_array.length)];

// old media

var new_york_times_array = [
	"New York Times",
	102,
];

var guardian_array = [
	"The Guardian",
	153,
];

var old_media_array = [
	new_york_times_array,
	guardian_array,
]

var old_media = old_media_array[Math.floor(Math.random() * old_media_array.length)];

var websites_array = [
	new_media,
	old_media,
];