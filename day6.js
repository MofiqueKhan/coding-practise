// 51 ==> Check String for Spaces
//     Create a function that returns true if a string contains any spaces.

function hasSpaces(str) {
  return str === " " ? true : false;
}
// console.log(hasSpaces("hello"));
// console.log(hasSpaces("hello, world"));
// console.log(hasSpaces(" "));
// console.log(hasSpaces(""));
// console.log(hasSpaces(",./!@#"));

// 52 ==> Find the Bug: Returning the Container
//     The packaging system is running wild! The candy is lying loose all over in the warehouse, the cereal is missing, and bread is stuffed in a bottle. What is going on here? The candy should be in plastic and the bread should be in a bag. The packaging machine is running the getContainer() function to retrieve the container of a product. But something is not right...

function getContainer(str) {
  if (str === "Bread") {
    return "bag";
  } else if (str === "Beer") {
    return "bottle";
  } else if (str === "Candy") {
    return "plastic";
  } else {
    return null;
  }
}
// console.log(getContainer("Bread"), "bag");
// console.log(getContainer("Beer"), "bottle");
// console.log(getContainer("Candy"), "plastic");
// console.log(getContainer("Cheese"), null);

// 53 ==> Return the Total Number of Parameters
//     Create a function that returns the total number of parameters passed in.

function numberArgs() {
  return arguments.length;
}
// console.log(numberArgs("a", "b", "c"), 3);
// console.log(numberArgs(10, 20, 30, 40, 50), 5);
// console.log(numberArgs('x', 'y'), 2);
// console.log(numberArgs(), 0);

// 54 ==>  Extract City Facts
//     Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:
//         name
//         population
//         continent
//         The string should have the following format:
//     "X has a population of Y and is situated in Z"
//     (where X is the city name, Y is the population and Z is the continent the city is situated in).

function cityFacts(city) {
  let facts = `${city.name} has a population of ${city.population} `;

  if (city.continent) {
    facts += `and is is situated in ${city.continent}`;
  }

  return facts;
}
// console.log(
//   cityFacts({
//     name: "Paris",
//     population: "2,140,526",
//     continent: "Europe",
//   }),
//   "Paris has a population of 2,140,526 and is situated in Europe"
// );
// console.log(
//   cityFacts({
//     name: "Tokyo",
//     population: "13,929,286",
//     continent: "Asia",
//   }),
//   "Tokyo has a population of 13,929,286 and is situated in Asia"
// );
// console.log(
//   cityFacts({
//     name: "Tokyo",
//     population: "13,929,286",
//   }),
//   "Tokyo has a population of 13,929,286"
// );

// 55 ==> Volume of a Box
//     Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.
//     Volume is length * width * height.

function volumeOfBox(obj) {
  return obj.width * obj.length * obj.height;
}
// console.log(volumeOfBox({ width: 2, length: 5, height: 1 }), 10);
// console.log(volumeOfBox({ width: 4, length: 2, height: 2 }), 16);
// console.log(volumeOfBox({ width: 2, length: 3, height: 5 }), 30);

// 56 ==> Stuttering Function
//     Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.

function stutter(str) {
  const first2char = str.substring(0, 2);

  return `${first2char}... ${first2char}... ${str}?`;
}
// console.log(stutter("incredible"), "in... in... incredible?");
// console.log(stutter("enthusiastic"), "en... en... enthusiastic?");
// console.log(stutter("outstanding"), "ou... ou... outstanding?");

// 57 ==> Is the Word Singular or Plural?
// //     Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".
function isPlural(str) {
  return str.endsWith("s");
}
// console.log(isPlural("changes"), true);
// console.log(isPlural("change"), false);
// console.log(isPlural("dudes"), true);
// console.log(isPlural("magic"), false);
//         This is an oversimplification of the English language. We are ignoring edge cases like "goose" and "geese", "fungus" and "fungi", etc.

// 58 ==> Four Passengers and a Driver
//     A typical car can hold 4 passengers and 1 driver, overall allowing 5 people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.

const carsNeeded = (num) => Math.ceil(num / 5);

// console.log(carsNeeded(5), 1);
// console.log(carsNeeded(11), 3);
// console.log(carsNeeded(0), 0);

// 59 ==> ES6: Destructuring Arrays IV
//     There is an easy way to assign to array values to the nth index by using the Rest element.
//         var [head, tail] = [1, 2, 3, 4]
//         console.log(head) // outputs  1
//         console.log(tail) // outputs 2
//     But how could I make tail = [2, 3, 4] instead of tail = 2?

var [head, ...tail] = [1, 2, 3, 4];
// console.log(head);
// console.log(tail);

// 60 ==> ES6: Destructuring Arrays III
//     You can assign variables from arrays with destructuring like this:
//         const arr = ["eyes", "nose", "lips", "ears"]
//         let [eyes, nose, lips, ears] = arr
//     But you can also skip over items in the array being destructured. (takeout only lips)

const arr = ["eyes", "nose", "lips", "ears"];
let [eyes, nose, , ears] = arr;
// console.log(eyes);
// console.log(nose);
// console.log(ears);
// console.log(lips);//reference


//   80 ==> Summing the Squares
//   Create a function where given the number n, return the sum of all square numbers up to and including n.
//       squaresSum(3) ➞ 14
//       // 1² + 2² + 3² =
//       // 1 + 4 + 9 =
//       // 14
// console.log(squaresSum(3));  // 14
// console.log(squaresSum(12));  // 650
// console.log(squaresSum(13));  // 819

function squaresSum(n) {
  // let store = 0;
  // for (let i = 1; i <= n; i++) {
  //     store += i * i
  // }
  // return store
  return (n * (n + 1) * (2 * n + 1)) / 6;

  // 5 * (5 +1) * (2 * 5 +1) / 6
  // 5 * 6 *  11 / 6
  // 30 * 11 /6
  // 330 / 6
}
// console.log(squaresSum(4));  // 14
// console.log(squaresSum(5));  // 14
// console.log(squaresSum(12));  // 650
// console.log(squaresSum(13));  // 819
