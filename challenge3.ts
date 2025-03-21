/*
Challenge 3: Find the Missing Number
Given an array of numbers from 1 to N with one missing number, find the missing number.
Example: findMissingNumber([1, 2, 4, 5, 6]); // 3
*/

function findMissingNumber(arr: number[]): number {
    for (let i = 1; i <= arr.length; i ++) {
        if (!arr.includes(i)) {
            let missingNumber = i;
            return missingNumber;
        }
    }
    return 0; // means that there are no missing numbers
}

//testing
console.log(findMissingNumber([2, 3, 4, 5]))
console.log(findMissingNumber([1, 2, 3, 4, 5]))
console.log(findMissingNumber([1, 2, 5]))

/* 
after testing i figured some things: 

1.If there are more than one missing number it'll consider only the first one
    and return it.
2.Instead of returning 0 we could throw new error but i'm not sure which one 
    is best practice.
3.This is all based on it being ordered. i wasn't sure whether i should check
    that the numbers are from small to big or if it is already in order, nothing
    was mentioned in the given challenge about it being unordered.
*/
