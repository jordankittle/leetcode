export function isValid(s: string): boolean {
    // If s.length is odd, return false
    if(s.length % 2 !== 0) return false;
    // Every time a closing bracket is encountered, check to see if the last opening bracket was of the same type
    const stack = [];
    let open = 0;
    const openingBrackets = ['(', '[', '{'];
    const closingBrackets = [')', ']', '}'];

    for(let i = 0; i < s.length; i++) {
        if (openingBrackets.includes(s[i])) {
            stack.push(s[i]);
            open++;
        } else {
            const bracketIndex = closingBrackets.indexOf(s[i]);
            const bracketToClose = openingBrackets[bracketIndex];
            if(bracketToClose !== stack.pop()) {
                return false;
            }
            open--;
        }
    }
    return open === 0 ? true : false
};
