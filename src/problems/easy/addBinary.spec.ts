import { addBinary } from "./addBinary";

describe('addBinary', () => {
    it('should add two binary strings', () => {
        let a = "11"; 
        let b = "1";
        expect(addBinary(a,b)).toBe('100');

        a = "1010";
        b = "1011";
        expect(addBinary(a,b)).toBe('10101');
    });
});