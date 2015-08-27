module.exports = {
	categories: [
		{name: "Funny", id: 1},
		{name: "Reaction", id: 2},
		{name: "Aww", id: 3},
		{name: "8-Bit", id: 4},
		{name: "Deal With It", id: 5},
		{name: "Sports", id: 6},
		{name: "90's", id: 7},
		{name: "Video Games", id: 8},
		{name: "Movies", id: 9},
		{name: "TV", id: 10},
		{name: "Ron Swanson", id: 11},
		{name: "Art + Design", id: 12},
		{name: "Nature", id: 13},
		{name: "Music", id: 14},
		{name: "Trippy", id: 15},
		{name: "Dancing", id: 16}
	],

	queryMaker: function(categoryId){
		switch(categoryId){
			case '1': return 'funny';
			case '2': return 'reaction';
			case '3': return 'cute+animals';
			case '4': return '8-bit';
			case '5': return 'deal+with+it';
			case '6': return 'sports';
			case '7': return '90s';
			case '8': return 'video+games';
			case '9': return 'movies';
			case '10': return 'tv';
			case '11': return 'ron+swanson';
			case '12': return 'design';
			case '13': return 'nature';
			case '14': return 'music';
			case '15': return 'trippy';
			case '16': return 'dancing';
			case '0': return 'trending';
		}
	}
}