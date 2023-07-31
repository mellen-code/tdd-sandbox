import { expect } from "chai";

export function addTwoNumbers(inputOne, inputTwo) {
    if ((typeof inputOne !== 'number') || (typeof inputTwo !== 'number')) {
        return false;
    }
    let expectedOutput = inputOne + inputTwo;
    return expectedOutput
}

export function ageGreaterThan18(arr) {
    return arr.filter(el => {
        if (!el.age) {
            throw new Error('age is not provided')
        }
        return el.age > 18
    })
   
}