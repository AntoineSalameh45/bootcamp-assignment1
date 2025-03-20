/* 
Challenge 1: Reverse a String
Write a function that takes a string and returns its reverse.
Example: reverseString("hello"); // "olleh" 
*/

function reverseString(str: string): string {
    let reversed = '';
    for (let i = str.length -1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
//or we can use another method with fewer lines
//return str.split('').reverse().join('');

//testing our code

console.log(reverseString('hello'))