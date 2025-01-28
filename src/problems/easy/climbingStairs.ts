const memo: {[key: number]: number} = {};
export function climbStairs(n: number): number {
    if(memo[n]) return memo[n];
    if(n === 1) return 1;
    if(n === 2) return 2;
    memo[n] = climbStairs(n-1) + climbStairs(n-2);
    return memo[n];
};

export function climbStairs2(n: number): number {
    if(n === 1) return 1;
    let a = 1;
    let b = 1;
    let answer = a + b;
    for(let i = 3; i <= n; i++) {
        a = b;
        b = answer;
        answer = a + b;
    }
    return answer;
};