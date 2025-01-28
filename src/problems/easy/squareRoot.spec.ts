import { mySqrt } from "./squareRoot";

describe('mySqrt', () => {
    it('should return the square root of X, rounded down to the nearest integer', () => {
        expect(mySqrt(0)).toBe(0);
        expect(mySqrt(1)).toBe(1);
        expect(mySqrt(4)).toBe(2);
        expect(mySqrt(8)).toBe(2);
        expect(mySqrt(16)).toBe(4);
        expect(mySqrt(20)).toBe(4);
        expect(mySqrt(36)).toBe(6);
        expect(mySqrt(49)).toBe(7);
    });
});