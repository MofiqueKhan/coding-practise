// 11 => Designing Rugs
// Write a function that accepts the height and width (m, n) and an optional proc s and generates a list with m elements. Each element is a string consisting of either:

// The default character (hash #) repeating n times (if no proc is given).
// The character passed in through the proc repeating n times.
// Examples

// function make_rug(height, width, proc = "#") {
//   const finalArr = [];
//   for (let i = 0; i < height; i++) {
//     let row = "";
//     for (let j = 0; j < width; j++) {
//       row += proc;
//     }
//     finalArr.push(row); // Add the row to finalArr
//   }

//   return finalArr;
// }

// console.log(make_rug(3, 5, "#"), ["#####", "#####", "#####"]);

// console.log(make_rug(3, 5, "$"), ["$$$$$", "$$$$$", "$$$$$"]);

// console.log(make_rug(2, 2, "A"), ["AA", "AA"]);
// Notes
// You can set a value for the parameter when creating the function e.g. def func(x = 3)

// 13 => Sum of Missing Numbers
// Create a function that returns the sum of missing numbers from the given list.

// Examples

// function sum_missing_numbers(arr){
//   let minVal = arr[0];
//   let maxVal = arr[0];
//   for(let i = 1 ; i <= arr.length ; i++){
//     if(arr[i] < minVal){
//       minVal = arr[i];
//     }
//     if(arr[i] > maxVal){
//       maxVal = arr[i]
//     }
//   }

//   let missingSum = 0;

//   for(let j = minVal+1 ; j < maxVal ; j++){
//     if(!arr.includes(j)){
//       missingSum += j;
//     }
//   }
//   return missingSum;
// }
// console.log(sum_missing_numbers([4, 3, 8, 1, 2]) , 18);

// // # 5 + 6 + 7 = 18

// console.log(sum_missing_numbers([17, 16, 15, 10, 11, 12]) , 27);
// // # 13 + 14 = 27

// console.log(sum_missing_numbers([1, 2, 3, 4, 5]) , 0);

// # No Missing Numbers (i.e. all numbers in [1, 5] are present in the list)
// Notes
// The numerical range to consider when searching for the missing numbers in the list is the sequence of consecutive numbers between the minimum and maximum of the numbers (inclusive).

function recursiveFibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
}

// console.log(recursiveFibonacci(6), 8);
// console.log(recursiveFibonacci(2), 1);
// console.log(recursiveFibonacci(10), 55);
// console.log(recursiveFibonacci(20), 6765);

// Initially, the function recursiveFibonacci(6) is called.

// Inside the function, the first condition checks if n is equal to 0. Since 6 is not equal to 0, this condition is false.

// Then, the second condition checks if n is equal to 1. Again, 6 is not equal to 1, so this condition is also false.

// Now, the function reaches the return statement:

// recursiveFibonacci(6 - 2) + recursiveFibonacci(6 - 1)

// This simplifies to recursiveFibonacci(4) + recursiveFibonacci(5)

// The function starts evaluating recursiveFibonacci(4). It follows the same steps:

// The first two conditions are false for 4 as well, so it moves to the return statement:
// recursiveFibonacci(4 - 2) + recursiveFibonacci(4 - 1)

// which simplifies to recursiveFibonacci(2) + recursiveFibonacci(3)

// Evaluating recursiveFibonacci(2):

// Again, it checks the conditions (both false), and then evaluates the return statement:
// recursiveFibonacci(2 - 2) + recursiveFibonacci(2 - 1)

// which simplifies to recursiveFibonacci(0) + recursiveFibonacci(1)

// recursiveFibonacci(0) and recursiveFibonacci(1) both return their base cases directly: 0 and 1, respectively.

// So, recursiveFibonacci(2) resolves to 0 + 1 = 1.

// Going back to recursiveFibonacci(3), it evaluates similarly:

// recursiveFibonacci(3 - 2) + recursiveFibonacci(3 - 1)

// Simplifies to recursiveFibonacci(1) + recursiveFibonacci(2)

// recursiveFibonacci(1) returns 1 directly, and recursiveFibonacci(2) returns 1 (as calculated earlier), so recursiveFibonacci(3) resolves to 1 + 1 = 2.

// Now, going back to recursiveFibonacci(4), it evaluates similarly:
// recursiveFibonacci(4 - 2) + recursiveFibonacci(4 - 1)

// Simplifies to recursiveFibonacci(2) + recursiveFibonacci(3)

// Which we already know is 1 + 2 = 3.

// Finally, going back to recursiveFibonacci(6), it resolves as:
// recursiveFibonacci(4) + recursiveFibonacci(5)

// Which we know is 3 + 5 = 8.
// So, the output of recursiveFibonacci(6) is indeed 8, as expected.

// 14 => Sum of List Elements Except Itself
// A list is given. Return a new list having the sum of all its elements except itself. For more clarity, check the examples below.

// Clarification
// [1, 2, 3, 4] = for first element => sum will be 2+3+4 = [9]
// [1, 2, 3, 4] = for second element => sum will be 1+3+4 = [9, 8]
// [1, 2, 3, 4] = for third element => sum will be 1+2+4 = [9, 8, 7]
// [1, 2, 3, 4] = for fourth element => sum will be 1+2+3 = [9, 8, 7, 6]

// Examples

function lst_ele_sum(arr) {
  let finalArr = [];
  let sum;
  for (let i = 0; i < arr.length; i++) {
    sum = 0;

    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        sum += arr[j];
      }
    }
    finalArr.push(sum);
  }
  return finalArr;
}

console.log(lst_ele_sum([1, 2, 3, 2, 1]), [8, 7, 6, 7, 8]);
console.log(lst_ele_sum([1, 2]), [2, 1]);
console.log(lst_ele_sum([1, 2, 3]), [5, 4, 3]);
console.log(lst_ele_sum([1, 2, 3, 4, 5]), [14, 13, 12, 11, 10]);
console.log(
  lst_ele_sum([10, 20, 30, 40, 50, 60]),
  [200, 190, 180, 170, 160, 150]
);
