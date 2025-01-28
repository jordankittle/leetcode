export function mySqrt(x: number): number {
    if(x === 0) return 0;

    let start = 0;
    let end = Math.floor(x/2 ) + 1;

    while(start <= end) {
        const middle =  Math.floor((start + end) / 2);
        const square = middle * middle;

        if (square <= x) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return end;
}