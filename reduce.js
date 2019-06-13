//Implement concatAll()

Array.prototype.concatAll = function() {
	var results = [];
	this.forEach(function(subArray) {
        subArray.forEach(function(subArray1){
            results.push(subArray1);
         });
	});
	return results;
};


//Implement concatMap()

Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
	return this.
		map(function(item) {
            return projectionFunctionThatReturnsArray(item);
		}).concatAll();
};


//implement reduce

Array.prototype.reduce = function(combiner, initialValue) {
	var counter,
		accumulatedValue;

	// If the array is empty, do nothing
	if (this.length === 0) {
		return this;
	}
	else {
        if (arguments.length === 1) {
            counter = 1;
            accumulatedValue = this[0];
        }
        else if (arguments.length >= 2) {
            counter = 0;
            accumulatedValue = initialValue;
        }
    else {
        throw "Invalid arguments.";
    }
    while(counter < this.length) {
        accumulatedValue = combiner(accumulatedValue, this[counter])
        counter++;
    }
    return [accumulatedValue];
	}
};

var ratings = [2,3,1,4,5];

	let rate = ratings.
    reduce((largest, currentValue)=>{
      if(largest>currentValue)
      return largest;
      else
      return  currentValue;
    });
    console.log(rate);

var videos = [
    {
        "id": 65432445,
        "title": "The Chamber"
    },
    {
        "id": 675465,
        "title": "Fracture"
    },
    {
        "id": 70111470,
        "title": "Die Hard"
    },
    {
        "id": 654356453,
        "title": "Bad Boys"
    }
];

let demoReduce2 = videos.
		reduce(function(accumulatedMap, video) {
		var obj = {};
        obj[video.id]=video.title; // gán giá trị video title cho id 
		return Object.assign(accumulatedMap, obj);
		},
        {}); //Use an empty map as the initial value instead of the first item in the list.
        
console.log(demoReduce2);

var boxarts = [
    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
    { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
    { width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
];

//Retrieve url of the largest boxart

let demoReduce = boxarts.reduce((largestBox,currentBox)=>{
    if(largestBox.width * largestBox.height > currentBox.width * currentBox.height)
        return largestBox;
    else 
        return currentBox;
    }).map(boxart=>boxart.url);

console.log(demoReduce);



var movieLists = [
    {
        name: "New Releases",
        videos: [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxarts": [
                    { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                    { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxarts": [
                    { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                    { width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }

                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id:432534, time:65876586 }]
            }
        ]
    },
    {
        name: "Thrillers",
        videos: [
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxarts": [
                    { width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
                    { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxarts": [
                    { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                    { width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
                    { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id:432534, time:65876586 }]
            }
        ]
    }
];


//Retrieve the id, title, and smallest box art url for every video.

let demoReduce1= movieLists.concatMap(movieList=>movieList.videos)
    .concatMap(videos=>videos.boxarts
    .reduce((smallestBox,currentBox)=>{
        if(smallestBox.width * smallestBox.height < currentBox.width * currentBox.height)
            return smallestBox;
        else
            return currentBox;
    }).map(boxarts=>({id: videos.id, title: videos.title, boxart: boxarts.url})));

console.log(demoReduce1);