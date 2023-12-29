// 61 ==> ES6: Destructuring Objects III
//         const obj =  { two : 2 }
//         var { one, two } = obj
//         console.log(one) // outputs undefined
//     Sometimes an object will be missing properties we are expecting. We can avoid undefined errors by using default values. Use ES6 object destructuring to add a default value of 1 to the one variable. Ignore the .toString() function (used for validation).

const obj = { two: 2 };
var { one = 1, two } = obj;
// console.log(one);

// 62 ==> Default Mood
//     Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".

function moodToday(mood) {
  if (mood) {
    return `Today, I am feeling ${mood}`;
  } else {
    ("Today, I am feeling neutral");
  }
}

// console.log(moodToday("happy"), "Today, I am feeling happy");
// console.log(moodToday("sad"), "Today, I am feeling sad");
// console.log(moodToday(), "Today, I am feeling neutral");

// 63) ==> Similar Bread
//     Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.
//     The lists will always be three elements long. The first piece of bread on one sandwich must be the same as the first piece of bread on the other sandwich. The same goes for the last piece of bread.

function hasSameBread(sandwich1, sandwich2) {
  const a = sandwich1[0] === sandwich2[0];
  const b = sandwich1[2] === sandwich2[2];
  return a && b;
}
// console.log(
//   hasSameBread(
//     ["white bread", "lettuce", "white bread"],
//     ["white bread", "tomato", "white bread"]
//   ),
//   true
// );
// console.log(
//   hasSameBread(
//     ["brown bread", "chicken", "brown bread"],
//     ["white bread", "chicken", "white bread"]
//   ),
//   false
// );
// console.log(
//   hasSameBread(
//     ["toast", "cheese", "toast"],
//     ["brown bread", "cheese", "toast"]
//   ),
//   false
// );

// 64 ==> Shapes With N Sides
//     Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.
//         Inputs   Outputs
//         1        "circle"
//         2        "semi-circle"
//         3        "triangle"
//         4        "square"
//         5        "pentagon"
//         6        "hexagon"
//         7        "heptagon"
//         8        "octagon"
//         9        "nonagon"
//         10       "decagon"
//         nSidedShape(3) ➞ "triangle"
//         nSidedShape(1) ➞ "circle"
//         nSidedShape(9) ➞ "nonagon"
//     There won't be any tests with a number below 1 or greater than 10.
//     Return the output in lowercase.
//     The challenge is intended to be completed without conditionals (it would take too long)!

const nSidedShape = (n) => {
  const shapes = [
    "circle",
    "semi-circle",
    "triangle",
    "square",
    "pentagon",
    "hexagon",
    "heptagon",
    "octagon",
    "nonagon",
    "decagon",
  ];

  return shapes[n - 1];
};
// console.log(nSidedShape(3), "triangle");
// console.log(nSidedShape(1), "circle");
// console.log(nSidedShape(9), "nonagon");

// 65 ==> Multiply Every Array Item by Two
//     Create a function that takes an array with numbers and return an array with the elements multiplied by two.
function getMultipliedArr(arr) {
  return arr.map((elem) => elem * 2);
}

// console.log(getMultipliedArr([2, 5, 3]), [4, 10, 6]);
// console.log(getMultipliedArr([1, 86, -5]), [2, 172, -10]);
// console.log(getMultipliedArr([5, 382, 0]), [10, 764, 0]);

// 66 ==> Burrrrrrrp
//     Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.

function longBurp(num) {
  // return "Bu" + "r".repeat(num) + "p";

  let result = "Bur";

  for (let i = 0; i < num; i++) {
    result += "r";
  }

  result += "p";

  return result;
}
// console.log(longBurp(3), "Burrrp");
// console.log(longBurp(5), "Burrrrrp");
// console.log(longBurp(9), "Burrrrrrrrrp");

// 67 ==> ES6: Destructuring Objects
//     Using basic object destructuring you can assign variables name and email:
//         let { name, email  } = { name: "John", email: "john@example.com" }
//         console.log(name)  // "John"
//         console.log(email)  // "john@example.com"
//     What if there were more properties but you didn't want to write variables for all of them and just wanted to stick them into another object and do something like this:
//         let { name, email, rest} = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA"}
//         rest ===  { city: "Phoenix", state: "AZ", country: "USA"} // true
let { name, email, ...rest } = {
  name: "John",
  email: "john@example.com",
  city: "Phoenix",
  state: "AZ",
  country: "USA",
};
// console.log(name); // "John"
// console.log(email); // "john@example.com"
// console.log(rest);

// 68 ==> Char-to-ASCII
//     Create a function that returns the ASCII value of the passed in character.

function ctoa(str) {
  return str.charCodeAt();
}
console.log(ctoa("A"), 65);
console.log(ctoa("m"), 109);
console.log(ctoa("["), 91);
// console.log(ctoa("\"), 92);

// 69 ==> Free Coffee Cups
//     For each of the 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups. Create a function that takes n cups bought and return as an integer the total number of cups I would get.
function totalCups(n) {
  return parseInt(n / 6 + n);
}
// console.log(totalCups(6), 7);
// console.log(totalCups(12), 14);
// console.log(totalCups(213), 248);

// 70 ==> Array of Word Lengths
//     Create a function that takes an array of words and transforms it into an array of each word's length.

function wordLengths(arr) {
  // return arr.map(elem => elem.length);
  return arr.reduce((acc, cElem) => {
    acc.push(cElem.length);
    return acc;
  }, []);
}
// console.log(wordLengths(["hello", "world"]), [5, 5]);
// console.log(
//   wordLengths(["Halloween", "Thanksgiving", "Christmas"]),
//   [9, 12, 9]
// );
// console.log(
//   wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]),
//   [3, 5, 9, 4, 2, 3, 8]
// );

// 71 ==> Get the File Name
//     Create a function that returns the selected filename from a path. Include the extension in your answer.

function getFilename(path){
  return path.split("/").pop();
}
// console.log(
//   getFilename("C:/Projects/pil_tests/ascii/edabit.txt"),
//   "edabit.txt"
// );
// console.log(
//   getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3"),
//   "Beethoven_5.mp3"
// );
// console.log(getFilename("ffprobe.exe"), "ffprobe.exe");
