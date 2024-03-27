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

function sum_missing_numbers(arr){
  let minVal = arr[0];
  let maxVal = arr[0];
  for(let i = 1 ; i <= arr.length ; i++){
    if(arr[i] < minVal){
      minVal = arr[i];
    }
    if(arr[i] > maxVal){
      maxVal = arr[i]
    }
  }

  let missingSum = 0;

  for(let j = minVal+1 ; j < maxVal ; j++){
    if(!arr.includes(j)){
      missingSum += j;
    }
  }
  return missingSum;
}
console.log(sum_missing_numbers([4, 3, 8, 1, 2]) , 18);

// # 5 + 6 + 7 = 18

console.log(sum_missing_numbers([17, 16, 15, 10, 11, 12]) , 27);
// # 13 + 14 = 27

console.log(sum_missing_numbers([1, 2, 3, 4, 5]) , 0);

// # No Missing Numbers (i.e. all numbers in [1, 5] are present in the list)
// Notes
// The numerical range to consider when searching for the missing numbers in the list is the sequence of consecutive numbers between the minimum and maximum of the numbers (inclusive).