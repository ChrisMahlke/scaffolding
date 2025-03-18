import * as Utils from "./utils/utils";

console.log(Utils.hello());
console.log(Utils.hello("Chris"));
console.log(Utils.add(2, 4));

/*
// type annotation
// message is a string
let message: string = "Hello, TypeScript!";
let count: number = 10;
let isActive: boolean = true;
// numbes is an array of numbers
let numbers: number[] = [1, 2, 3];
let anything: any = "Could be anything";

interface Rectangle {
  height: number;
  width: number;
}

interface ColoredRectangle extends Rectangle {
  color: string;
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red",
};

console.log(coloredRectangle);
*/
/**
 * Finds the indices of two numbers in an array that add up to a given target.
 *
 * @param nums - An array of numbers.
 * @param target - The target sum to find.
 * @returns An array containing the two indices of the numbers that add up to the target,
 *          or an empty array if no valid pair exists.
 *
 * @example
 * twoSum([2, 7, 11, 15], 9); // Returns [0, 1] because 2 + 7 = 9
 * twoSum([3, 2, 4], 6);       // Returns [1, 2] because 2 + 4 = 6
 * twoSum([1, 5, 3], 10);      // Returns [] because no pair adds to 10
 */
/*
function twoSum(nums: number[], target: number): number[] {
  // Create a Map to store numbers and their corresponding indices
  const map: Map<number, number> = new Map();
  // Iterate through each number in the array
  for (let i = 0; i < nums.length; i++) {
    // Calculate the required complement to reach the target
    const complement = target - nums[i];
    // Check if the complement already exists in the map
    const index = map.get(complement);
    // If the complement is found, return the indices
    if (index !== undefined) {
      return [index, i]; // Return the indices of the complement and the current number
    }
    // Store the current number and its index in the map
    map.set(nums[i], i);
  }
  // Return an empty array if no valid pair is found
  return [];
}

//console.log(twoSum([3, 2, 4], 6));

//const numToArr: string[] = String(20003).split('');

//numToArr.forEach((i, j) => {
//  console.log(numToArr[numToArr.length - i]);
//  console.log(numToArr[numToArr.length - j]);
//});

//console.log(left);
*/
/**
 * Checks if a given string of brackets is valid.
 * A string is valid if:
 *  - Every open bracket has a corresponding closing bracket.
 *  - Brackets close in the correct order.
 *
 * @param s - The input string containing only '()', '{}', '[]'.
 * @returns True if the string is valid, false otherwise.
 */
/*
function isValid(s: string): boolean {
  // Create an empty stack to keep track of open brackets
  const stack: string[] = [];

  // A lookup table (object) that maps closing brackets to their corresponding opening brackets
  const bracketMap: { [key: string]: string } = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  // Loop through each character in the input string `s`
  for (const char of s) {
    // If the character is an opening bracket, push it onto the stack
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char); // Store the opening bracket for future matching
    } else {
      // If it's a closing bracket, check if it has a matching open bracket in the stack

      // Remove (pop) the last added opening bracket from the stack
      const lastOpen = stack.pop();

      // Check if the popped opening bracket matches the expected one
      if (lastOpen !== bracketMap[char]) {
        return false; // If they don't match, the string is invalid
      }
    }
  }

  // If the stack is empty at the end, all brackets were matched correctly
  return stack.length === 0;
}

// ✅ Example Test Cases
console.log(isValid("()")); // true  -> ( matches )
console.log(isValid("()[]{}")); // true  -> (), [], {} all match correctly
console.log(isValid("(]")); // false -> ( does not match ]
console.log(isValid("([])")); // true  -> ([]) is a valid nested structure
console.log(isValid("{[()]}")); // true  -> Nested brackets match correctly
console.log(isValid("{[(])}")); // false -> The order is incorrect
console.log(isValid("[")); // false -> An opening [ without closing ]
console.log(isValid("]")); // false -> A closing ] without an opening [

// Example test cases
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([])")); // true
console.log(isValid("{[()]}")); // true
console.log(isValid("{[(])}")); // false
console.log(isValid("[")); // false
console.log(isValid("]")); // false
*/
