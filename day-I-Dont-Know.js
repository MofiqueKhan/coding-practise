// 11 => Designing Rugs
// Write a function that accepts the height and width (m, n) and an optional proc s and generates a list with m elements. Each element is a string consisting of either:

// The default character (hash #) repeating n times (if no proc is given).
// The character passed in through the proc repeating n times.
// Examples

function make_rug(height, width, proc = "#") {
  const finalArr = [];
  for (let i = 0; i < height; i++) {
    let row = "";
    for (let j = 0; j < width; j++) {
      row += proc;
    }
    finalArr.push(row); // Add the row to finalArr
  }

  return finalArr;
}

console.log(make_rug(3, 5, "#"), ["#####", "#####", "#####"]);

console.log(make_rug(3, 5, "$"), ["$$$$$", "$$$$$", "$$$$$"]);

console.log(make_rug(2, 2, "A"), ["AA", "AA"]);
// Notes
// You can set a value for the parameter when creating the function e.g. def func(x = 3)
