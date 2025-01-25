export function removeDuplicates(nums: number[]): number {
    const values: Set<number> = new Set();
    for (const num of nums) {
        values.add(num);
    }

    let index = 0;
    for (const value of values) {
        nums[index] = value;
        index++;
    }
    return values.size;
};