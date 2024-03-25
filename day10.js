// 94 ==>   Where is Bob!?!
//  Write a function that searches an array of names (unsorted) for the name "Bob" and returns the location in the array. If Bob is not in the array, return -1.
//      findBob(["Jimmy", "Layla", "Bob"]) ➞ 2
//      findBob(["Bob", "Layla", "Kaitlyn", "Patricia"]) ➞ 0
//      findBob(["Jimmy", "Layla", "James"]) ➞ -1
// 95 ==>   Negate the Array of Numbers
//  Given an array of numbers, negate all elements contained within.
//      Negating a positive value -+n will return -n, because all +'s are removed.
//      Negating a negative value --n will return n, because the first - turns the second minus into a +.
//      negate([1, 2, 3, 4]) ➞ [-1, -2, -3, -4]
//      negate([-1, 2, -3, 4]) ➞ [1, -2, 3, -4]
//      negate([]) ➞ []
// 96 ==>   Convert Number to String of Dashes
//  Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.
//      Go(1) ➞ "-"
//      Go(5) ➞ "-----"
//      Go(3) ➞ "---"
// 97 ==>   Word Endings
//  Create a function that adds a string ending to each member in an array.
//      addEnding(["clever", "meek", "hurried", "nice"], "ly") ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
//      addEnding(["new", "pander", "scoop"], "er") ➞ ["newer", "panderer", "scooper"]
//      addEnding(["bend", "sharpen", "mean"], "ing") ➞ ["bending", "sharpening", "meaning"]
// 98 ==>   Flip the Boolean
//  Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.
//      reverse(true) ➞ false
//      reverse(false) ➞ true
//      reverse(0) ➞ "boolean expected"
//      reverse(null) ➞ "boolean expected"
// 99 ==>   Return the Four Letter Strings
//  Create a function that takes an array of strings and returns the words that are exactly four letters.
//      isFourLetters(["Tomato", "Potato", "Pair"]) ➞ ["Pair"]
//      isFourLetters(["Kangaroo", "Bear", "Fox"]) ➞ ["Bear"]
//      isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]) ➞ ["Ryan", "Matt"]
// 100 ==>  Shuffle the Name
//  Create a function that accepts a string (of a person's first and last name) and returns a string with the first and last name swapped.
//      nameShuffle("Donald Trump") ➞ "Trump Donald"
//      nameShuffle("Rosie O'Donnell") ➞ "O'Donnell Rosie"
//      nameShuffle("Seymour Butts") ➞ "Butts Seymour"
// 101 ==>  Video Streaming Plans
//  Given a class for a BasicPlan, write the classes for StandardPlan and PremiumPlan which have class properties of the following:
//      BasicPlan   StandardPlan    PremiumPlan
//      ✓           ✓               ✓               canStream
//      ✓           ✓               ✓               canDownload
//      ✓           ✓               ✓               hasSD
//                  ✓               ✓               hasHD
//                                  ✓               hasUHD
//      1           2               4               numOfDevices
//      $8.99       $12.99          $15.99          price
//      BasicPlan.hasSD ➞ true 
//      PremiumPlan.hasSD ➞ true
//      BasicPlan.hasUHD ➞ false
//      BasicPlan.price ➞ '$8.99'
//      PremiumPlan.numOfDevices ➞ 4
// 102 ==>  Missing Third Angle
//  You are given 2 out of 3 angles in a triangle, in degrees.
//  Write a function that classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.
//      An acute angle is less than 90 degrees.
//      A right angle is exactly 90 degrees.
//      An obtuse angle is greater than 90 degrees (but less than 180 degrees).
//  For example: missingAngle(11, 20) should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.
//      missingAngle(27, 59) ➞ "obtuse"
//      missingAngle(135, 11) ➞ "acute"
//      missingAngle(45, 45) ➞ "right"
// 103 ==>  Semantic Versioning
//  In semantic versioning a piece of software can be represented in a format like this example: 6.1.9.
//      The first number is the major version.
//      The second number is the minor version.
//      The third number is the patch (bug fixes).
//  Write three separate functions, one to retrieve each element in the semantic versioning specification.
//      // 6.1.9
//      retrieveMajor("6.1.9") ➞ "6"
//      retrieveMinor("6.1.9") ➞ "1"
//      retrievePatch("6.1.9") ➞ "9"
//      // 2.1.0
//      retrieveMajor("2.1.0") ➞ "2"
//      retrieveMinor("2.1.0") ➞ "1"
//      retrievePatch("2.1.0") ➞ "0"
// 104 ==>  Alphabet Soup
//  Create a function that takes a string and returns a string with its letters in alphabetical order.
//      AlphabetSoup("hello") ➞ "ehllo"
//      AlphabetSoup("edabit") ➞ "abdeit"
//      AlphabetSoup("hacker") ➞ "acehkr"
//      AlphabetSoup("geek") ➞ "eegk"
//      AlphabetSoup("javascript") ➞ "aacijprstv"
