export function plusOne(digits: number[]): number[] {
    let position = digits.length - 1;
    addOneToCurrentPosition();

    function addOneToCurrentPosition() {
        digits[position] = (digits[position] + 1) % 10;
        if (digits[position] === 0) {
            if (position === 0) {
                digits.unshift(1);
            } else {
                position--;
                addOneToCurrentPosition();
            }
        }
    }
   

    return digits;
};