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

// console.log(lst_ele_sum([1, 2, 3, 2, 1]), [8, 7, 6, 7, 8]);
// console.log(lst_ele_sum([1, 2]), [2, 1]);
// console.log(lst_ele_sum([1, 2, 3]), [5, 4, 3]);
// console.log(lst_ele_sum([1, 2, 3, 4, 5]), [14, 13, 12, 11, 10]);
// console.log(
//   lst_ele_sum([10, 20, 30, 40, 50, 60]),
//   [200, 190, 180, 170, 160, 150]
// );

// 15 => Missing Letters
// Given a string containing unique letters, return a sorted string with the letters that don't appear in the string.

// Examples

function get_missing_letters(str){
  let missingStr = "";
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  for(let i = 0 ; i < alphabet.length ; i++){
    if(!str.includes(alphabet[i])){
      missingStr += alphabet[i];
    }
  }
  return missingStr;
}
// console.log(get_missing_letters("abcdefgpqrstuvwxyz") , "hijklmno");

// console.log(get_missing_letters("zyxwvutsrq") , "abcdefghijklmnop");

// console.log(get_missing_letters("abc") , "defghijklmnopqrstuvwxyz");

// console.log(get_missing_letters("abcdefghijklmnopqrstuvwxyz") , "");

// Notes
// The combination of both strings should be 26 elements long, including all the letters in the alphabet.
// Letters will all be in lowercase.

// 16 => Censor Words Longer Than Four Characters
// Create a function that takes a string and censors words over four characters with *.

// Examples


function censor(str){
  let words = str.split(" ");
  let finalStr = "";

  for(let i = 0 ; i < words.length ; i++){
    if(words[i].length > 4){
      let censorWord = "";
      for(let j = 0 ; j < words[i].length; j++){
        censorWord += "*";
      }
      finalStr += censorWord + " "
    }
    else{
      finalStr += words[i] + " "
    }
  }
  return finalStr;
}
// console.log(censor("The code is fourty") , "The code is ******");

// console.log(censor("Two plus three is five") , "Two plus ***** is five");

// console.log(censor("aaaa aaaaa 1234 12345") , "aaaa ***** 1234 *****");

// Notes
// Don't censor words with exactly four characters.
// If all words have four characters or less, return the original string.
// The amount of * is the same as the length of the word.


// 17 => Accumulating List
// Create a function that takes in a list and returns a list of the accumulating sum.

// Examples
// accumulating_list([1, 2, 3, 4]) , [1, 3, 6, 10]
// # [1, 3, 6, 10] can be written as  [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4]

function accumulating_list(arr){ 
  let finalArr = [];
  let sum = 0;
  for(let i = 0 ; i < arr.length ; i++){
    sum += arr[i]
    finalArr.push(sum);
  }
  return finalArr;
}
// console.log(accumulating_list([1, 5, 7]) , [1, 6, 13]);

// console.log(accumulating_list([1, 0, 1, 0, 1]) , [1, 1, 2, 2, 3]);

// console.log(accumulating_list([]) , []);

// Notes
// An empty list input [] should return an empty list [].  

// 18 => Find The Largest Even Number
// Write a function that finds the largest even number in a list. Return -1 if not found. The use of built-in functions max() and sorted() are prohibited.

// Examples
function largest_even(arr) {
  let ans = -1;
  for(let i = 0 ; i < arr.length; i++){
    if(arr[i] % 2 === 0 && arr[i] > ans){
      ans  =  arr[i]
    }
  }
  return ans ;
}

// console.log(largest_even([3, 7, 2, 1, 7, 9, 10, 13]) , 10);

// console.log(largest_even([1, 3, 5, 7]) , -1);

// console.log(largest_even([0, 19, 18973623]) , 0);

  // 19 => Basic Statistics: Median
  // The median of a group of numbers is the middle number when the group is sorted. If the size of the group is even, the median is the average of the middle two numbers. Given a sorted list of numbers, return the median (rounded to one decimal place if the median isn't an integer).

  // Examples
  function median(arr){
    let median = 0;
    let midIndex = Math.floor(arr.length / 2 );
    
      if(arr.length % 2 === 0){
       return median = (arr[midIndex - 1] + arr[midIndex]) / 2;
      }
      else{
        return median = arr[midIndex];
      }
    }
  
  
  // console.log(median([1, 2, 4, 5, 6, 8, 8, 8, 10]) , 6);
  // console.log(median([2, 2, 6, 8, 8, 10, 10]) , 8);
  // console.log(median([1, 2, 2, 4, 7, 8, 9, 10]) , 5.5);

//   20 => Return Duplicate Numbers
// Given a list nums where each integer is between 1 and 100, return a sorted list containing only duplicate numbers from the given nums list.

// Examples
function duplicate_nums(arr){
  let finalArr = [];
  let visited = {};

  for(let i = 0 ; i < arr.length ; i++){
    if(visited[arr[i]]){
      if(visited[arr[i]]=== 1){
        finalArr.push(arr[i])
      }
      visited[arr[i]] += 1;
    }
    else{
      visited[arr[i]] = 1;
    }
  }
  return finalArr.length > 0 ? finalArr.sort((a,b) => a - b):"None";
}
// console.log(duplicate_nums([1, 2, 3, 4, 3, 5, 6]) , [3]);
// console.log(duplicate_nums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54]) , [72, 81, 99]);
// console.log(duplicate_nums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) , "None");

// Notes
// The given list won't contain the same number three times.
// If there are no duplicate numbers, return None.

// 21. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Only one valid answer exists.

function twoSum(nums, target) {
  // Create a map to store the indices of numbers
  const numIndices = new Map();
  
  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      // Calculate the complement needed to reach the target
      const complement = target - num;
      
      // Check if the complement is already in the map
      if (numIndices.has(complement)) {
          // If found, return the indices of the current number and its complement
          return [numIndices.get(complement), i];
      }
      
      // Add the current number and its index to the map
      numIndices.set(num, i);
  }
  
  // If no solution is found, return an empty array
  return [];
}

// Example usage:
const nums1 = [2, 7, 11, 15];
const target1 = 9;
// console.log(twoSum(nums1, target1));  // Output: [0, 1]


// The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.


// function fiftyThirtyTwenty(ati){
//   let strategy = {};
//   strategy.Needs = 50/100 * ati;
//   strategy.Wants = 30/100 * ati;
//   strategy.Savings = 20/100 * ati;
//   return strategy;
// }

// console.log(fiftyThirtyTwenty(10000) , { "Needs": 5000, "Wants": 3000, "Savings": 2000 });
// console.log(fiftyThirtyTwenty(50000) , { "Needs": 25000, "Wants": 15000, "Savings": 10000 });
// console.log(fiftyThirtyTwenty(13450) , { "Needs": 6725, "Wants": 4035, "Savings": 2690 });


function fiftyThirtyTwenty(ati) {
  const needs = ati * 0.5;
  const wants = ati * 0.3;
  const savings = ati * 0.2;

  return {
      "Needs": needs,
      "Wants": wants,
      "Savings": savings
  };
}

// console.log(fiftyThirtyTwenty(10000), { "Needs": 5000, "Wants": 3000, "Savings": 2000 });
// console.log(fiftyThirtyTwenty(50000), { "Needs": 25000, "Wants": 15000, "Savings": 10000 });
// console.log(fiftyThirtyTwenty(13450), { "Needs": 6725, "Wants": 4035, "Savings": 2690 });

// Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.

// Examples

function hasSameBread(arr1 , arr2){
  if(arr1.length < 2 || arr2.length < 2){
    return false; 
  }
  
    return arr1[0] === arr2[0] && arr1[arr1.length-1] === arr2[arr2.length-1];

}

console.log(hasSameBread(
  ["white bread", "lettuce", "white bread"],
  ["white bread", "tomato", "white bread"]
) , true);

console.log(hasSameBread(
  ["brown bread", "chicken", "brown bread"],
  ["white bread", "chicken", "white bread"]
) , false);

console.log(hasSameBread(
  ["toast", "cheese", "toast"],
  ["brown bread", "cheese", "toast"]
) , false);