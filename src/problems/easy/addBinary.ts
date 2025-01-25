export function addBinary(a: string, b: string): string {
    // Start at the end of a and b and add bit by bit until at the beginning, keeping track of carries
    let carry:boolean = false;
    const answer:string[] = [];

    let aEnd = a.length - 1;
    let bEnd = b.length - 1;
    
    while(aEnd >= 0 || bEnd >= 0) {
        const bit1 = a[aEnd] || '0';
        const bit2 = b[bEnd] || '0';
        answer.push(xOrWithCarry(bit1, bit2));
        aEnd--;
        bEnd--;
    }
    
    function xOrWithCarry(bit1: string, bit2: string): string {
        if(bit1 === '0' && bit2 === '0') {
            if(carry) {
                carry = false;
                return '1';
            }
            return '0';
        }
        else if(+bit1 + +bit2 === 1) {
            if(carry) {
                return '0';
            }
            carry = false;
            return '1';
        }
        else {
            if(carry) {
                return '1';
            }
            carry = true;
            return '0';
        }
    }

    if(carry) {
        answer.push('1');
    }
    return answer.reverse().join('');
};