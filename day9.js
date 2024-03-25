// // 83 ==>   Sum of the Odd Numbers
// //  Create a function which returns the total of all odd numbers up to and including n. n will be given as an odd number.
// //      addOddToN(5) ➞ 9
// //      // 1 + 3 + 5 = 9

// function addOddToN(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i += 2) {
//     sum += i;
//   }
//   return sum;
// }
// // console.log(addOddToN(13), 49);
// // console.log(addOddToN(47), 576);

// // 84 ==>   Halloween Day
// //  Create a function that takes date in the format yyyy/mm/dd as an input and returns "Bonfire toffee" if the date is October 31, else return "toffee".

// function halloween(date) {
//   if (date === "2013/10/31") {
//     return "Bonfire toffee";
//   } else {
//     return "toffee";
//   }
// }
// // console.log(halloween("2013/10/31"), "Bonfire toffee");
// // console.log(halloween("2012/07/31"), "toffee");
// // console.log(halloween("2011/10/12"), "toffee");

// // 85 ==>   Simple OOP Calculator
// //  Create functions for the Calculator class that can do the following:
// //      Add two numbers.
// //      Subtract two numbers.
// //      Multiply two numbers.
// //      Divide two numbers.

// class Calculator {
//   add(a, b) {
//     return a + b;
//   }
//   subtract(a, b) {
//     return a - b;
//   }
//   multiply(a, b) {
//     return a * b;
//   }
//   divide(a, b) {
//     return a / b;
//   }
// }

// var calculator = new Calculator();
// // console.log(calculator.add(10, 5), 15);
// // console.log(calculator.subtract(10, 5), 5);
// // console.log(calculator.multiply(10, 5), 50);
// // console.log(calculator.divide(10, 5), 2);

// // 86 ==>   Limit a Number's Value
// //  Create a function that takes three number arguments — one number as an input and two additional numbers representing the endpoints of a closed range — and return the number limited to this range.
// //      If the number falls within the range, the number should be returned.
// //      If the number is less than the lower limit of the range, the lower limit should be returned.
// //      If the number is greater than the upper limit of the range, the upper limit should be returned.

// function limitNumber(n, min, max) {
//   //   if (n < min) {
//   //     return min;
//   //   } else if (n > max) {
//   //     return max;
//   //   } else {
//   //     return n;
//   //   }

//   return n < min ? min : n > max ? max : n;
// }
// console.log(limitNumber(5, 1, 10), 5);
// console.log(limitNumber(-3, 1, 10), 1);
// console.log(limitNumber(14, 1, 10), 10);
// console.log(limitNumber(4.6, 1, 10), 4.6);

// // 87 ==>   Skip the Drinks with Too Much Sugar
// //  The function skipTooMuchSugarDrinks() takes in an array of drinks. Make sure the function only returns an array of drinks with no sugar in it or a little bit of sugar.
// //  Drinks that contain too much sugar (in this challenge) are:
// //      Cola
// //      Fanta

// function skipTooMuchSugarDrinks(arr) {
//   let skipSugar = [];

//   for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] !== "cola" && arr[i] !== "fanta"){
//       skipSugar.push(arr[i]);
//     }
//   }
//   return skipSugar;
// }
// // console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"]), ["water"]);
// // console.log(skipTooMuchSugarDrinks(["fanta", "cola"]), []);
// // console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"]), [
// //   "lemonade",
// //   "beer",
// //   "water",
// // ]);
// z

// // 88 ==>   Add a Consecutive List of Numbers
// //  Write a function that takes the last number of a consecutive list of numbers and returns the total of all numbers up to and including it.
// //      addUpTo(3) ➞ 6
// //      // 1 + 2 + 3 = 6
// //      addUpTo(10) ➞ 55
// //      // 1 + 2 + 3 + ... + 10 = 55
// //      addUpTo(7) ➞ 28
// //      // 1 + 2 + 3 + ... + 7 = 28


// // 89 ==>   Check if String Ending Matches Second String
// //  Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.
// //      checkEnding("abc", "bc") ➞ true
// //      checkEnding("abc", "d") ➞ false
// //      checkEnding("samurai", "zi") ➞ false
// //      checkEnding("feminine", "nine") ➞ true
// //      checkEnding("convention", "tio") ➞ false
// // 90 ==> Find the Bug: Checking Even Numbers
// //  Create a function that takes in an array and returns true if all its values are even, and false otherwise.
// //  Not a big deal, your friend says. He writes the following code:
// //      function checkAllEven(arr) {
// //          return arr.every(x % 2 === 0)
// //      }
// //  The code above leads to a Reference Error, with x being undefined. Fix the code above so that all tests pass:
// //      checkAllEven([1, 2, 3, 4]) ➞ false
// //      checkAllEven([2, 4, 6]) ➞ true
// //      checkAllEven([5, 6, 8, 10]) ➞ false
// //      checkAllEven([-2, 2, -2, 2]) ➞ true
// // 91 ==>   Remove Null from an Array
// //  Create a function to remove all null values from an array.
// //      removeNull(["a", null, "b", null]) ➞ ["a", "b"]
// //      removeNull([null, null, null, null, null]) ➞ []
// //      removeNull([7, 8, null, 9]) ➞ [7, 8, 9]
// // 92 ==>   True Ones, False Zeros
// //  Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.
// //      integerBoolean("100101") ➞ [true, false, false, true, false, true]
// //      integerBoolean("10") ➞ [true, false]
// //      integerBoolean("001") ➞ [false, false, true]
// // 93 ==>   Modifying the Last Character
// //  Create a function which makes the last character of a string repeat n number of times.
// //      modifyLast("Hello", 3) ➞ "Hellooo"
// //      modifyLast("hey", 6) ➞ "heyyyyyy"
// //      modifyLast("excuse me what?", 5) ➞ "excuse me what?????"

// 7. List of Multiples
// Create a function that takes two numbers as arguments (num, length) and returns a list of multiples of num until the list length reaches length.

// Examples
// list_of_multiples(7, 5) ➞ [7, 14, 21, 28, 35]
// list_of_multiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// list_of_multiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

// Notes
// Notice that num is also included in the returned list.

function list_of_multiples (num , length){
    let arrFinal = [];
    for (let i = 1; i <= length; i++) {
        const arr = num * i;
        arrFinal.push(arr);
    }
    return arrFinal;
    
}
console.log(list_of_multiples(7, 5) , [7, 14, 21, 28, 35]);
console.log(list_of_multiples(12, 10) , [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]);
console.log(list_of_multiples(17, 6) , [17, 34, 51, 68, 85, 102]);