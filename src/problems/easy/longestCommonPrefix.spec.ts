import { longestCommonPrefix } from "./longestCommonPrefix";

describe('longestCommonPrefix', () => {
    it('should return "fl" for ["flower","flow","flight"]', () => {
        const input = ["flower","flow","flight"];
        expect(longestCommonPrefix(input)).toBe('fl');
    });

    it('should return "" for ["dog","racecar","car"]', () => {
        const input = ["dog","racecar","car"];
        expect(longestCommonPrefix(input)).toBe('');
    });

    it('should return "test" for ["testing","tester","tested"]', () => {
        const input = ["test","tester","tested"];
        expect(longestCommonPrefix(input)).toBe('test');
    });
});