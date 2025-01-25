export function longestCommonPrefix(strs: string[]): string {
    let answer = "";
    let charIndex = 0;
    while (true) {
        const currentLetter = strs[0][charIndex];
        // If the first word doesn't have a letter at this position, we are done
        if (!currentLetter) break;

        for (let i = 0; i < strs.length; i++) {
            // If any word doesn't have the current letter at charIndex return the current answer
            if (strs[i][charIndex] !== currentLetter) {
                return answer;
            }
        }
        // If all words have the current letter at charIndex, add the currentLetter to the answer
        answer += currentLetter;
        charIndex++;
    }
    return answer;
};