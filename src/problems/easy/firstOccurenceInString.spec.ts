import { strStr } from "./firstOccurencInString";

describe('strStr', () => {
    it('should return -1 if there is no occurence of needle in the haystck', () => {
        const needle = 'leeto';
        const haystack = 'leetcode';
        expect(strStr(haystack, needle)).toBe(-1);
    });

    it('should return the first position of the needle in the haystack', () => {
        let needle = 'sad';
        let haystack = 'sadbutsad';
        expect(strStr(haystack, needle)).toBe(0);
        needle = 'test';
        haystack = 'thetest';
        expect(strStr(haystack, needle)).toBe(3);
    });
});