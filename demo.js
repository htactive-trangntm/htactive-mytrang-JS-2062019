//example
const fs = require("fs")
let files = fs.readdirSync(".")
let fileNames = files.map(file => file.split(".")[0])
  .filter(fileName => fileName !== "")
console.log(fileNames);

let nine = Number(9)
let arr = [1, 2, 3, 4, 5]
arr.push(6)
console.log([1, 2, 3, 4, 5].pop());

//----------------string---------------------
//include
let str = "12321sdfsdf"
let chang = "i am a student";
let word = "student";
console.log(`từ "${word}" ${chang.includes(word) ? 'có' : 'ko có'} trong câu`);

//concat
let w1 = "I am a student";
let w2 = "My name is Trang";
console.log(w1.concat(' ', w2));

//split
let str1 = "I am a famous singer in the future";
let strww = str1.split(" ").join(", ");
console.log(strww);

let sentence = "My name is Trang, I want to be a model in the future";
let words = sentence.split(" ");
console.log(words[3]);
let chars = sentence.split("");
console.log(chars[12]);
let sentenceCpy = sentence.split();
console.log(sentenceCpy);
console.log(sentenceCpy[0]);


var tr = 'Chang Chang is a little girl in the world';
var tr1 = 'little1';
console.log(`The word "${tr1}" ${tr.includes(tr1) ? 'is' : 'is not'} in the sentence`);


//replace
var p = 'there is a dog in my house. But yesterday, he died';
var regex = "house";
console.log(p.replace(regex, 'nhà'));
console.log(p.replace('nhà', 'house'));

//search
var para = "xin chao tat ca moi nguoi toi ten là trang";
var search = "p";
var search1 = "n";
console.log(para.search(search1)); // tìm kiếm chỉ số gần nhất
console.log(para[para.search(search1)]); // từ tìm đc

//substr cắt theo vị trí
var substr = "hello mọi người, mình đang rất khỏe nhé";
console.log(substr.substr(2)); //cắt từ vị trí thứ 2 đến hết
console.log(substr.substr(1, 3)); //cắt 3 chữ lấy từ vị tri thứ 1


//slice

var strSlice = "i am a little girl";
console.log(strSlice.slice(1)); //cắt từ vị trí số 1 đến hết
console.log(strSlice.slice(3, 7));

//repeat

let strrepeat = " i am a beautiful girl";
console.log("beceause i am a little girl: " + strrepeat.repeat(4));
console.log(strrepeat.replace("beautiful", 'sexy').repeat(2));

// toUppercase: viết hoa nè

let hiChang = "mọi người ơi mình là chang nè";
console.log(hiChang.toUpperCase());

//trim()
let greeting = "            chaào mọi người chang nè                    ";
console.log(greeting);
console.log(greeting.trim())

//--------------------------array--------------------------------
var fruits = ['Apple', 'Banana'];

console.log(fruits.length);

//--------------------------array--------------------

//concat
var array1 = ['ahihi', 'cute', 'quá'];
var array2 = ['đi', 'chang', 'ơi'];
console.log(array1.concat(array2));

//filter //lọc
var words1 = ['hay', 'chứ', 'hề', 'ahihi', 'hiệntại', 'quákhu'];
const result1 = words1.filter(word => word.length > 6); //lấy ra những từ lớn hơn 6 kí tự
console.log(result1);

//find
var arrayn = [5, 10, 8, 14, 34];
var found = arrayn.find(function (element) {
  return element > 10;
});
console.log(found);


//findIndex lấy index của số gần nhát từ trái sang thõa mãn đk
var array3 = [5, 12, 8, 130, 44];
function isLargeNumber(element) {
  return element > 13;
}
console.log(array3.findIndex(isLargeNumber));

//foreach
var array4 = ['a', 'b', 'c'];
array4.forEach(function (element) {
  console.log(element);
});


//filter
var character = ["cute", "sexy", "beautifull", "pretty", "wonderdfull"];
var result2 = character.filter(word => word.length > 5);
console.log(result2);


//reduce

const arrNumber = [1, 2, 3, 4, 5];
const reducer = (a, c) => a + c;
// 1 + 2 + 3 + 4+5
console.log(arrNumber.reduce(reducer));
// 1+1 + 2 + 3 + 4+5
console.log(arrNumber.reduce(reducer, 1));


//fill 
var arrCharacter = ["xinh", "đẹp", "bad", "good", "gentle"];
console.log(arrCharacter.fill("đẹp", 1)); //thay thành chữ đẹp từ vị trí số 1

// var arrNumber1 =[1,2, ,3,4];
// arrNumber1.flat();



//sort
// The default sort order is built upon converting the elements into strings, 
//then comparing their sequences of UTF-16 code units values.

var months = ["Feb", "Jan", "July", "Dec", "Oct"];
months.sort();
console.log(months);

//map creates a new array with the results of calling a provided function on every element in the calling array.

var changchang = ["cute", "sexy", "pretty", "perfect"];
const map1 = changchang.map(chang => "chang " + chang);
console.log(map1);
console.log(map1.concat(map1, "quá đi"));

//reverse The first array element becomes the last, and the last array element becomes the first.
var arrReverse1 = ["cao", "lên", "nhẹ", "trời", "nay", "hôm"];
var arrReverse2 = ["tôi", "buồn", "không", "biết", "vì", "sao", "tôi", "buồn"];
// console.log(arrReverse1.reverse());
var arrReverse = arrReverse1.reverse();
// console.log(arrReverse.concat(arrReverse2));


// Number
// String
// Array
// Object

// filter
// map
// reduce
// foreach

//-------------------------------object--------------------------------
const students = [
  {
    id:1,
    name: "Trang",
    age: 20,
    math: 5,
    history:8,
    english:5
  },
  {
    id:2,
    name: "Thanh",
    age: 20,
    math: 8,
    history:8,
    english:4
  },
  {
    id:3,
    name: "Yen",
    age: 20,
    math: 10,
    history:8,
    english:9
  },  {
    id:4,
    name: "Ly",
    age: 20,
    math: 5,
    history:8,
    english:7
  },
  {
    id:5,
    name: "Huong",
    age: 20,
    math: 9,
    history:8,
    english:6
  }
] 

// query
const passedStudents = students.filter(student => student.grade > 5).map(passedStudent => passedStudent.name)
//const totalStudents = students.filter(student => student.grade > 5).reduce((sum, curr) => sum + curr.grade, 0)
//const totalStudents = students.filter(student => student.grade > 5).map(passedStudent => passedStudent.grade).reduce((sum, current) => sum + current ,0)
//console.log(passedStudents);
const studentsId = [1,3,5]

const mappedStudentById = studentsId.map(id => {
  let student = students.find(student => student.id==id)
  return student
});

console.log(mappedStudentById);

//display list student by ID
const studentID=[2,4,5];

const listStudentByID = studentID.map(id=>{
  let student1=students.find(student=>student.id==id)
  return student1
})
console.log(listStudentByID);

//Display list student by name
const studentName=["Yen","Thanh","Ly"];
const listStudentByName= studentName.map(name=>{
  let student2 = students.find(student=>student.name==name)
  return student2;
})
console.log(listStudentByName);

//average score all student

const scoreStudent = students.map(passedStudent => passedStudent.math);
console.log(scoreStudent);


//------------------practice---------------
var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"],
	counter;
//using for
for(counter = 0; counter < names.length; counter++) {
		console.log(names[counter]);
}
//using for each
names.forEach(name => {
  console.log(name);
});


function myMap(coll, callback){
  let returnMap = []
  for(let i =0; i < coll.length; i++){
    returnMap.push(callback(coll[i]))
  } 

  return returnMap
}

let demo = myMap(students, (item) => item.name)
console.log(demo);

function myFilter(coll1,callback){
  let returnFilter=[];
  for(let i=0;i<coll1.length;i++){
    if(coll1[i].math>5)
    returnFilter.push((coll1[i]));
  }
  return returnFilter;
}

let demo2 = myFilter(students);
console.log(demo2)

function myFilter1(coll,callback){
  let returnFilter1=[];
  coll.forEach(item=>{
    if(callback(item)){
      returnFilter1.push(item);
    }  
  });
  return returnFilter1;
}

let demo3 = myFilter1(students,(item)=>item.english>5);
console.log(demo3)

Array.prototype.myFilter = function(predicateFunction) {
  var results = [];
  this.forEach(itemInArray => {
    if (predicateFunction(itemInArray)) {
    console.log(itemInArray);
    results.push(itemInArray);
    }
  });
  return results;
};

[1,5,3,4,-2,-3].myFilter(item=>item>0);


Array.prototype.myReduce= function(callback,initialValue){
  var accumulator = (initialValue === undefined) ? 0 : initialValue;
  this.forEach(itemInArray => {
    accumulator= callback(accumulator, itemInArray);
  });
  return accumulator;
};
[1,5,3,4,-2,-3].myReduce((sum,curr)=>sum+curr);




var newReleases = [
  {
    "id": 70111470,
    "title": "Die Hard",
    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [4.0],
    "bookmark": []
  },
  {
    "id": 654356453,
    "title": "Bad Boys",
    "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [5.0],
    "bookmark": [{ id: 432534, time: 65876586 }]
  },
  {
    "id": 65432445,
    "title": "The Chamber",
    "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [4.0],
    "bookmark": []
  },
  {
    "id": 675465,
    "title": "Fracture",
    "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [5.0],
    "bookmark": [{ id: 432534, time: 65876586 }]
  }
];

//1.project array

videoAndTitlePairs = [];
newReleases.forEach(video=>{
videoAndTitlePairs.push({id:video.id,title:video.title})
});
console.log(videoAndTitlePairs);

//1* Use map() to project an array of videos into an array of {id,title} pairs

newReleases.map(video=>({id: video.id,title: video.title}));

// Use forEach() to collect only those videos with a rating of 5.0
videos=[];
newReleases.forEach(video=>{
  if(video.rating ==5){
    videos.push(video);
  }
});
console.log(videos);

//Chain filter and map to collect the ids of videos that have a rating of 5.0

Array.prototype.filter = function(predicateFunction) {
	var results = [];
	this.forEach(function(itemInArray) {
		// ------------ INSERT CODE HERE! ----------------------------
		// Apply the predicateFunction to each item in the array.
		// If the result is truthy, add the item to the results array.
		// Note: remember you can add items to the array using the array's
		// push() method.
		// ------------ INSERT CODE HERE! ----------------------------
    //thêm hàm filter vào array
    if(predicateFunction(itemInArray)){
    	results.push(itemInArray);   
    }
    
	});

	return results;
};


newReleases.filter(release=>release.rating==5).map(heighRating=>heighRating.id);
console.log(newReleases.filter(release=>release.rating==5).map(heighRating=>heighRating.id));


var movieLists = [
  {
    name: "New Releases",
    videos: [
      {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
      },
      {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
      }
    ]
  },
  {
    name: "Dramas",
    videos: [
      {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
      },
      {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
      }
    ]
  }
];

//Use two nested forEach loops to flatten the movieLists into a list of video ids.
allVideoIdsInMovieLists=[];
movieLists.forEach(movie=>{
  movie.videos.forEach(video=>{
    allVideoIdsInMovieLists.push(video.id);
  });
});

Array.prototype.concatAll = function() {
	var results = [];
	this.forEach(function(subArray) {
		// ------------ INSERT CODE HERE! ----------------------------
		// Add all the items in each subArray to the results array.
		// ------------ INSERT CODE HERE! ----------------------------
    subArray.forEach(function(subArray1){
       results.push(subArray1);
    });
   
	});

	return results;
};
//Use map() and concatAll() to project and flatten the movieLists into an array of video ids

// movieLists.map(movieList=>movieList.videos).concatAll().map(movieID=>movieID.id);
// console.log(movieLists.map(movieList=>movieList.videos).concatAll().map(movieID=>movieID.id));


//Retrieve id, title, and a 150x200 box art url for every video

// var movieList=movieLists.map(movies=>movies.videos).concatAll()
//     .map(videos=>videos.boxarts.
//     filter(boxart=>boxart.width==150 && boxart.height==200)
//     .map(boxart=>({id: videos.id, title: videos.title, boxart: boxart.url}))).concatAll(); 
// console.log(movieList);

return movieLists.concatMap(function(movieList) {
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

