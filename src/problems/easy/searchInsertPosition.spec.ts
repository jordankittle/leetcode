import { searchInsert } from "./searchInsertPosition";

describe('searchInsert', () => {
    it('should return the index of the target if it is found', () => {
        const input = [1,3,5,6];
        const target = 3;
        expect(searchInsert(input, target)).toBe(1);
    });

    it('should return the index where the target should be inserted if it is not found', () => {
        const input = [1,3,5,6];
        const target1 = 2;
        const target2 = 7;
        const target3 = 0;
        expect(searchInsert(input, target1)).toBe(1);
        expect(searchInsert(input, target2)).toBe(4);
        expect(searchInsert(input, target3)).toBe(0);
    });
});