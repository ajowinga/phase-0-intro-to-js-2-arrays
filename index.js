//Array 
// A list, with the items listed in a particular order, surrounded by square brackets ([]) and separated by commas:

["this", "is" , "an" ,  "array"]
["Hello, world!", 42, null, NaN]; is also an Array

// we can assign an Array to a variable

const winningNumbers = [32, 9, 14, 33, 48, 5];

function logWinningNumbers(numbers) {
  console.log("Winning numbers:", numbers);
}

logWinningNumbers(winningNumbers);
// LOG: Winning numbers: [32, 9, 14, 33, 48, 5]
// => undefined

const logWinningNumbers = [32,9,14,33,48,5]

function logwinningNumbers(numbers){
    console.log("winningNumbers" , numbers)
}
logwinningNumbers(winningNumbers)

// Using Bracket Notation
const winningNumbers = [32, 9, 14, 33, 48, 5];
// => undefined

winningNumbers[0];
// => 32

winningNumbers[3];
// => 33
const winningNumbers=[30,45.,45,67,]
console.log(winningNumbers[6])

const winningNumbers=[30,45,7,9,3,45,67,]
 console.log(winningNumbers[6])

 const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Juptier",
    "Saturn",
    "Uranus",
    "Neptune",
  ];
  planets[4]
  console.log(planets[6])

//   Nested Arrays

const egregiouslyNestedArray = [
    "How",
    ["deep", ["can", ["we", ["go", ["?"], "Pretty"], "dang"], "deep,"], "it"],
    "seems.",
  ];
  console.log(egregiouslyNestedArray[0])

//   we can access the inner array using egregiouslyNestedArray[1],
// to access an array inside of an array, we add another [] i.e. 
egregiouslyNestedArray[1][0];
//=> 'deep'

egregiouslyNestedArray[1][1];
//=> [ 'can', [ 'we', [ 'go', [Array], 'Pretty' ], 'dang' ], 'deep,' ]

egregiouslyNestedArray[1][2];
//=> 'it

// we add another set of brackets for each nested array, until we get to the innermost array

egregiouslyNestedArray[1][1][1][1][1];
//=> ['?']


