import { climbStairs } from "./climbingStairs";
import { climbStairs2 } from "./climbingStairs";

describe('climbStairs', () => {
    it('should return number of distinct ways to climb to the top using 1 or 2 steps each turn', () => {
        expect(climbStairs(2)).toBe(2);
        expect(climbStairs(3)).toBe(3);
        expect(climbStairs(4)).toBe(5);
        expect(climbStairs(5)).toBe(8);
    });
});

describe('climbStairs2', () => {
    it('should return number of distinct ways to climb to the top using 1 or 2 steps each turn', () => {
        expect(climbStairs2(2)).toBe(2);
        expect(climbStairs2(3)).toBe(3);
        expect(climbStairs2(4)).toBe(5);
        expect(climbStairs2(5)).toBe(8);
    });
});

// 0: = 0
// 1: [1]
// 2: [1, 1] [2] = 2
// 3: [1,1,1] [1,2] [,2,1] = 3
// 4: [1,1,1,1] [1,1,2] [ 1,2,1] [ 2,1,1] [ 2,2] = 5
// 5: [1,1,1,1,1] [1,1,1,2] [1,1,2,1] [1,2,1,1] [2,1,1,1] [2,2,1] [2,1,2] [1,2,2] = 8

// n(1) = 1
// n(2) = 2
// n(3) = n(n-1) + n(n-2) = 2 + 1 = 3;
// n(4) = n(n-1) + n(n-2) = 3 + 2 = 5;
// n(5) = n(n-1) + n(n-2) = 5 + 3 = 8;