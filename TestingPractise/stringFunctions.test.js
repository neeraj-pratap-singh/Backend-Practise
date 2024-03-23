// Assuming the functions are exported from a module, for example, stringFunctions.js
const { reverseString, isPalindrome, toUpperCase, toLowerCase } = require('./stringFunctions');

describe('String Functions', () => {
    describe('reverseString', () => {
        it('should reverse a given string', () => {
            expect(reverseString('hello')).toBe('olleh');
            expect(reverseString('Neeraj')).toBe('jareeN');
        });
    });

    describe('isPalindrome', () => {
        it('should return true if the string is a palindrome', () => {
            expect(isPalindrome('madam')).toBe(true);
            expect(isPalindrome('racecar')).toBe(true);
        });

        it('should return false if the string is not a palindrome', () => {
            expect(isPalindrome('hello')).toBe(false);
            expect(isPalindrome('world')).toBe(false);
        });
    });

    describe('toUpperCase', () => {
        it('should convert a string to uppercase', () => {
            expect(toUpperCase('neeraj')).toBe('NEERAJ');
            expect(toUpperCase('test string')).toBe('TEST STRING');
        });
    });

    describe('toLowerCase', () => {
        it('should convert a string to lowercase', () => {
            expect(toLowerCase('NEERAJ')).toBe('neeraj');
            expect(toLowerCase('TEST STRING')).toBe('test string');
        });
    });
});
