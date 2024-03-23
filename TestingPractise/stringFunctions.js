// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
    const reversedStr = reverseString(str);
    return str === reversedStr;
}

// Function to change a string to uppercase
function toUpperCase(str) {
    return str.toUpperCase();
}

// Function to change a string to lowercase
function toLowerCase(str) {
    return str.toLowerCase();
}

// Example usage:
let testString = "Neeraj";
console.log(`Original string: ${testString}`);

// Reverse the string
const reversedStr = reverseString(testString);
console.log(`Reversed string: ${reversedStr}`);

// Check if the string is a palindrome
testString = "madam";
const palindromeCheck = isPalindrome(testString);
console.log(`Is palindrome: ${palindromeCheck}`);

// Convert the string to uppercase
testString = "Neeraj Pratap Singh";
const upperStr = toUpperCase(testString);
console.log(`Uppercase string: ${upperStr}`);

// Convert the string to lowercase
testString = "NEERAJ PRATAP SINGH";
const lowerStr = toLowerCase(testString);
console.log(`LowerStr string: ${lowerStr}`);


module.exports ={reverseString, isPalindrome, toLowerCase, toUpperCase}