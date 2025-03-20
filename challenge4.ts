/*
Challenge 4: Find the First Non-Repeating Character
Write a function that returns the first non-repeating character in a given string.
Example:
firstNonRepeatingChar("swiss"); // "w"
firstNonRepeatingChar("racecar"); // "e"
*/

function firstNonRepeatingChar(str: string): string | null {

    for (let i = 0; i < str.length; ++i) {
        let found = false;

        for (let j = 0; j < str.length; ++j) {
            if (i !== j && str[i] === str[j]) {
                found = true;
                break;
            }
        }
        if (found === false) {
            return str[i];
        }
    }
    return null;
}

//testing

console.log(firstNonRepeatingChar('swiss'));
console.log(firstNonRepeatingChar("racecar"));
console.log(firstNonRepeatingChar("aabbccdd"));