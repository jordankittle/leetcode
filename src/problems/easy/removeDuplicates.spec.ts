import { removeDuplicates } from "./removeDuplicates";

describe('removeDuplicates', () => {
    it('should return 2 given [1,1,2]', () => {
        const input = [1,1,2];
        expect(removeDuplicates(input)).toBe(2);
        expect(input.slice(0,2)).toEqual([1,2]);
    });

    it('should return 5 given [0,0,1,1,1,2,2,3,3,4]', () => {
        const input = [0,0,1,1,1,2,2,3,3,4];
        expect(removeDuplicates(input)).toBe(5);
        expect(input.slice(0,5)).toEqual([0,1,2,3,4]);
    });
});