/** 
 * @param {number} num - The number to check
 * @return {boolean} True if the number is a palindrome. False otherwise
 */
export function isPalindrome(num: number): boolean {
    if (num < 0) return false;
    if (num % 10 == 0 && num !== 0) return false;
    let reversed = 0;
    while (num > reversed) {
        reversed = reversed * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return num === reversed || num === Math.floor(reversed / 10);
}

