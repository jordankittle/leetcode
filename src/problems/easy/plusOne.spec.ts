import { plusOne } from "./plusOne";

describe('plusOne', () => {
    it('should add one to the end of the integer array', () => {
        let input: number[] = [1,2,3];
        expect(plusOne(input)).toEqual([1,2,4]);
        
        input = [4,3,2,1];
        expect(plusOne(input)).toEqual([4,3,2,2]);

        input = [9];
        expect(plusOne(input)).toEqual([1,0]);

        input = [9,9,8,9,9];
        expect(plusOne(input)).toEqual([9,9,9,0,0]);
    });
});