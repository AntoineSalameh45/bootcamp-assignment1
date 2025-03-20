/*
Challenge 2: Count Vowels
Write a function that counts the number of vowels (a, e, i, o, u) in a given string.
Example: countVowels("typescript"); // 3 
*/

function countVowels(str: string): number {
    const vowels = 'aAeEiIoOuU';
    let counter = 0;

    for (let character of str) {
        if (vowels.includes(character)) {
            counter +=1;
        }
    }

    return counter;
}
 //testing the code
console.log(countVowels('Antoine'))