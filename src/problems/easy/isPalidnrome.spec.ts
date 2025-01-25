import { isPalindrome } from "./isPalindrome";

describe('isPalindromeNumber', () => {
    it('Should return true for 121', () => {
        expect(isPalindrome(121)).toBe(true);
    });
    it('Should return true for 12321', () => {
        expect(isPalindrome(12321)).toBe(true);
    });
    it('Should return false for 12312', () => {
        expect(isPalindrome(12312)).toBe(false);
    });
});