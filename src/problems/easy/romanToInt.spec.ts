import { romanToInt } from "./romanToInt";

describe('romanToInt', () => {
    it('Should return 3 for III', () => {
        expect(romanToInt('III')).toBe(3);
    });
    it('Should return 58 for LVIII', () => {
        expect(romanToInt('LVIII')).toBe(58);
    });
    it('Should return 3 for MCMXCIV', () => {
        expect(romanToInt('MCMXCIV')).toBe(1994);
    });
    it('Should return 2999 for MMCMXCIX', () => {
        expect(romanToInt('MMCMXCIX')).toBe(2999);
    });
});