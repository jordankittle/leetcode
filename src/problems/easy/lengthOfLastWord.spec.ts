import { lengthOfLastWord } from "./lengthOfLastWord";

describe('lengthOfLastWord', () => {
    it('should return the length of the last word in a sentence', () => {
        let input = "Hello World";
        expect(lengthOfLastWord(input)).toBe(5);

        input = "   fly me   to   the moon  ";
        expect(lengthOfLastWord(input)).toBe(4);

        input = "luffy is still joyboy";
        expect(lengthOfLastWord(input)).toBe(6);
    });
});