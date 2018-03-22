// //Bo's exercises
// # love me - not love me game
// Given a flower with N petals, print the love me and not love me by petals
// Example, a flower have 5 petals, output:

// ```
// Love me
// Not love me
// Love me
// Not love me
// Love me
// ```

var petals = prompt("How many petals are there on your flower?");
for (i=petals; i>=0; i--) {
 switch (i%2 ===0) {
 	case (true):
 		console.log(i + ' - Love me');
 		break;
 	case (false):
 		console.log(i + ' - Not love me');
 		break;d
 	}
};


// ## Build a 2d array

// Generate a 2-dimension array with the following shape:

// ```json
// [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
//   [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ],
//   [ 3, 6, 9, 12, 15, 18, 21, 24, 27, 30 ],
//   [ 4, 8, 12, 16, 20, 24, 28, 32, 36, 40 ],
//   [ 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 ],
//   [ 6, 12, 18, 24, 30, 36, 42, 48, 54, 60 ],
//   [ 7, 14, 21, 28, 35, 42, 49, 56, 63, 70 ],
//   [ 8, 16, 24, 32, 40, 48, 56, 64, 72, 80 ],
//   [ 9, 18, 27, 36, 45, 54, 63, 72, 81, 90 ],
//   [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ] ]
// ```



superArray = (rows, columns) => {
  var arr = [];
  for (var i=0;i<rows;i++) {
     	arr[i] = [];
     	for (var j=0; j<columns; j++){
  			arr[i][j] = ((i+1)*(j+1));
  		};
  };
  return arr;
}

let userRows = prompt("How many rows?"); //10 in the example
let userColumns = prompt("How many columns?"); //10 in the example
var json = { ...superArray(userRows, userColumns)};

// ## Student Score

// The professor records the scores of every student in each test. The record has following format:

// ```javascript
// { 
//     test: 1, // the test id
//     name: 'John', 
//     age: 27, 
//     gender: 'male', 
//     score: 90 
// }
// ```

// All these scores are stored in an array:

// For example:

// ```javascript


var exampleScores = [
    { test: 1, name: 'John', age: 27, gender: 'male', score: 90 },
    { test: 1, name: 'Oliver', age: 27, gender: 'male', score: 75 },
    { test: 1, name: 'Harry', age: 27, gender: 'male', score: 85 },
    { test: 2, name: 'John', age: 27, gender: 'male', score: 98 },
    { test: 2, name: 'Oliver', age: 27, gender: 'male', score: 100 },
    { test: 2, name: 'Harry', age: 27, gender: 'male', score: 87 },
];
// ```

// ### Question 1

// Calculate the overall average score

findAverage = (array) => {
	let total = 0;
	array.forEach(x => total += x);
	return total/(array.length);
} 

fillArray = (array) => {
	let filledArray = [];
	for (i=0; i<exampleScores.length; i++) {
		filledArray[i] = array[i].score;
	}
	return filledArray;
}

var scoresArray = fillArray(exampleScores);
findAverage(scoresArray); //89.1666666...




// ### Question 2

// Calculate the overall average score for all male student

var maleScoresArray = 
	fillArray(exampleScores
		.filter(student => student.gender = 'male')
	);
findAverage(maleScoresArray);
// ### Question 3

// Calculate the average score for each test

