import { isValid } from "./validParenthesis";

describe('isValid', () => {
    it('should return true for "()"', () => {
        const input = "()";
        expect(isValid(input)).toBe(true);
    });

    it('should return true for "()[]{}"', () => {
        const input = "()[]{}";
        expect(isValid(input)).toBe(true);
    });

    it('should return false for "(]"', () => {
        const input = "(]";
        expect(isValid(input)).toBe(false);
    });

    it('should return true for "([])"', () => {
        const  input = "([])";
        expect(isValid(input)).toBe(true);
    });

    it('should return false for "([]))"', () => {
        const  input = "([]))";
        expect(isValid(input)).toBe(false);
    });

    it('should return false for "["', () => {
        const input = "[";
        expect(isValid(input)).toBe(false);
    });

    it('should return false for "(("', () => {
        const input = "((";
        expect(isValid(input)).toBe(false);
    });

});