/**
 * @param {string} s - Roman numeral
 * @return {number}
 */

export function romanToInt(s: string): number {
    s = s.toUpperCase();
    const values: {[key: string]: number} = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    }
    const subtractionCases = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM'];
    const parts = [];
    for (let i = 0; i < s.length; i++) {
        if (subtractionCases.includes(s[i] + s[i+1])) {
            parts.push(s[i] + s[i+1]);
            i++;
        } else {
            parts.push(s[i]);
        }
    }

    return parts.reduce((acc, part) => acc + values[part], 0 );
}