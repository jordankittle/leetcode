import { removeElement } from "./removeElement";

describe('removeElement', () => {
    it('should return 2 given [3,2,2,3] and 3 as value to remove', () => {
        const input = [3,2,2,3];
        const elementToRemove = 3;
        expect(removeElement(input, elementToRemove)).toBe(2);
    });

    it('should manipulate [3,2,2,3] in place to be [2,2,X,X], where the value of X does not matter', () => {
        const input = [3,2,2,3];
        const elementToRemove = 3;
        removeElement(input, elementToRemove);
        const sortedK = input.slice(0,2).sort((a,b) => a-b);
        const sortedInput = sortedK;
        expect(sortedInput).toEqual([2,2]);
        expect(sortedInput).not.toContain(3);
    });

    

    it('should return 5 given [0,1,2,2,3,0,4,2] and 2 as value to remove', () => {
        const input = [0,1,2,2,3,0,4,2];
        const elementToRemove = 2;
        expect(removeElement(input, elementToRemove)).toBe(5);
    });

    it('should manipulate [0,1,2,2,3,0,4,2] in place to be [0,0,1,3,4,X,X,X], where the value of X does not matter', () => {
        const input = [0,1,2,2,3,0,4,2];
        const elementToRemove = 2;
        removeElement(input, elementToRemove);
        const sortedK = input.slice(0,5).sort((a,b) => a-b);
        const sortedInput = sortedK;
        expect(sortedInput).toEqual([0,0,1,3,4]);
        expect(sortedInput).not.toContain(2);
    });
});