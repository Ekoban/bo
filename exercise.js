// //Bo's exercises
// # love me - not love me game
// Given a flower with N petals, print the love me and not love me by petals

flowerLove = () => {
  let petals = prompt("How many petals are there on your flower?");
  for (i=petals; i>=0; i--) {
   switch (i%2 ===0) {
   	case (true):
   		console.log(i + ' - Love me');
   		break;
   	case (false):
   		console.log(i + ' - Not love me');
   		break;
   	}
  };
}
// Issue here: whatever the number of petals, the issue doesn't change (a happy ending).
console.log(flowerLove());



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


// Create a matrix array with x rows and y columns.
superArray = (rows, columns) => {
  var arr = [];
  for (var i=0;i<rows;i++) {
     	// The first loop creates the "rows" (empty arrays).
      arr[i] = [];
      // The second loop fills them with the correct values given the
      // numbers of rows and columns.
     	for (var j=0; j<columns; j++){
  			arr[i][j] = ((i+1)*(j+1));
  		};
  };
  return arr;
}

//Turn a given array into a JSON.
bosMatrix = (array) => {
  let json = { ...array};
  return json;
}

// Re-create the example 10x10 matrix and turn it into a JSON, 
// then log it.
const exampleMatrix = superArray(10,10);
console.log(bosMatrix(exampleMatrix));
// ## Student Score

// The professor records the scores of every student in each test.
// All these scores are stored in an array, for example:
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

//Calculates the average of a given array of numbers (simple - doesn't handle errors etc)
findAverage = (array) => {
	let total = 0;
	array.forEach(x => total += x);
	return total/(array.length);
} 

//Fills an array with scores of a selected object - implies there is a "score" property
fillScoresArray = (array) => {
	let filledArray = [];
	for (i=0; i<array.length; i++) {
		filledArray[i] = array[i].score;
	}
	return filledArray;
}
//Calculate the overall average score (LOGGED BELOW, LAST FUNCTION!)
avgScore = (array) => {
  let scoresArray = findAverage(fillScoresArray(array))
  return scoresArray;
};
const exampleAvgScore = avgScore(exampleScores);
// ### Question 2

// Calculate the overall average score for all male student

// Create a function to take into account any gender input, 
// implying their is a 'gender' property in the passed objects
avgGenderScores = (array, genderinput) => {
  let genderScoresArray = fillScoresArray(
    array.filter(student => student.gender == genderinput));
  let avgGenderScore = findAverage(genderScoresArray);
  return avgGenderScore;
}



// ### Question 3

// Calculate the average score for each test

//Create a function to pass the test ID as a parameter
avgTestidScores = (array, testid) => {
  // create an array filled with the corresponding test id's objects scores
  let idScoresArray = fillScoresArray(
    array.filter(student => student.test == testid)
    );
  // calculate the average and return it. 
  let avgTestScore = findAverage(idScoresArray);
  return avgTestScore;
}

//Show scores after asking for user input:
callScores = (array) => {  
  console.log(`The average score is ${avgScore(array)}.`);

  let testId = prompt("Which test ids do you want to check?");
  console.log(`The average score for the test id ${testId} is ${avgTestidScores(array, testId)}`);

  let gender = prompt("Which student gender would you like to check? //hint: male");
  console.log(`The average score of male students is ${avgGenderScores(array, gender)}.`);
};
// Call the scores for exampleScores:
console.log(callScores(exampleScores));
