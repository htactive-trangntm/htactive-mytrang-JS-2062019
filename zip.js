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

var videos = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
    }
];
bookmarks = [
    {id: 470, time: 23432},
    {id: 453, time: 234324},
    {id: 445, time: 987834}
];

//Combine videos and bookmarks by index

    let counter,
	videoIdAndBookmarkIdPairs = [];
    for(counter = 0; counter < Math.min(videos.length, bookmarks.length); counter++) {
        videoIdAndBookmarkIdPairs.push({videoId: videos[counter].id, bookmarkId: bookmarks[counter].id });
    }

    console.log(videoIdAndBookmarkIdPairs);

//Implement zip

Array.zip = function(left, right, combinerFunction) {
	var counter,
		results = [];
	for(counter = 0; counter < Math.min(left.length, right.length); counter++) {
        results.push(combinerFunction(left[counter],right[counter]));
    }
	return results;
};


// Combine videos and bookmarks by index
 let demoZip= Array.zip(videos, bookmarks, (video,bookmark)=>{
   return ({videoId: video.id, bookmarkId: bookmark.id });
 });

 console.log(demoZip);

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
                "interestingMoments": [
                    { type: "End", time:213432 },
                    { type: "Start", time: 64534 },
                    { type: "Middle", time: 323133}
                ]
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
                "interestingMoments": [
                    { type: "End", time:54654754 },
                    { type: "Start", time: 43524243 },
                    { type: "Middle", time: 6575665}
                ]
            }
        ]
    },
    {
        name: "Instant Queue",
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
                "interestingMoments": [
                    { type: "End", time:132423 },
                    { type: "Start", time: 54637425 },
                    { type: "Middle", time: 3452343}
                ]
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
                "interestingMoments": [
                    { type: "End", time:45632456 },
                    { type: "Start", time: 234534 },
                    { type: "Middle", time: 3453434}
                ]
            }
        ]
    }
];

// let demoZip1= movieLists.concatMap(movieList=>movieList.videos)
//                         .concatMap(videos=>videos.boxarts
//                         .Array.zip(boxarts.reduce((smallestBox, currentBox)=>{
//                             if(smallestBox.width * smallestBox.height < currentBox.width * currentBox.height)
//                                 return smallestBox;
//                             else 
//                                 return currentBox;
//                         }),
//                         interestingMoments.filter(typeIn=>typeIn.type=="Middle"),
//                         (boxarts,interestingMoment)=>{
//                             return ({id: video.id, title: video.title, time: interestingMoment.time, url: boxarts.url})
//                         }));

let demoZip1= movieLists.concatMap(function(movieList) {
    return movieList.videos.concatMap(function(video) {
        return Array.zip(
            video.boxarts.reduce(function(acc,curr) {
                if (acc.width * acc.height < curr.width * curr.height) {
                        return acc;
                }
                else {
                      return curr;
                }
              }),
            video.interestingMoments.filter(function(interestingMoment) {
                return interestingMoment.type === "Middle";
            }),
              function(boxart, interestingMoment) {
                return {id: video.id, title: video.title, time: interestingMoment.time, url: boxart.url};
              });
    });
});


console.log(demoZip1);

var lists = [
    {
        "id": 5434364,
        "name": "New Releases"
    },
    {
        "id": 65456475,
        "name": "Thrillers"
    }
],
videos = [
    {
        "listId": 5434364,
        "id": 65432445,
        "title": "The Chamber"
    },
    {
        "listId": 5434364,
        "id": 675465,
        "title": "Fracture"
    },
    {
        "listId": 65456475,
        "id": 70111470,
        "title": "Die Hard"
    },
    {
        "listId": 65456475,
        "id": 654356453,
        "title": "Bad Boys"
    }
];



let demo= lists.map(list=>({name: list.name,
    videos: videos.filter(video=>video.listId===list.id)
        .map(video=>({id: video.id, title: video.title}))}));

console.log(demo);
    
// return lists.map(function(list) {
//     return {
//         name: list.name,
//         videos:
//             videos.
//                 filter(function(video) {
//                     return video.listId === list.id;
//                 }).
//                 concatMap(function(video) {
//                     return Array.zip(
//                         bookmarks.filter(function(bookmark) {
//                             return bookmark.videoId === video.id;
//                         }),
//                         boxarts.filter(function(boxart) {
//                             return boxart.videoId === video.id;
//                         }).
//                         reduce(function(acc,curr) {
//                             return acc.width * acc.height < curr.width * curr.height ? acc : curr;
//                         }),
//                         function(bookmark, boxart) {
//                             return { id: video.id, title: video.title, time: bookmark.time, boxart: boxart.url };
//                         });
//             })
//     };
// });

return lists.map(list=>({name: list.name,
    videos: videos.filter(video=>video.listId==list.id)
    .concatMap(video=video.Array.zip(
        bookmarks.filter(bookmark=>bookmark.videoId==video.id),
        boxarts.filter(boxart=>boxart.videoId==video.id),
        reduce((acc,curr)=>{
            acc.width * acc.height < curr.width * curr.height ? acc : curr;
        }),
        (bookmark,boxart)=>({id: video.id, title: video.title, time: bookmark.time, boxart: boxart.url
        })))));
