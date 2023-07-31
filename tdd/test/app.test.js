import chai from 'chai'
// for assertion syntax: 
// e.g. expect(actural).to.equal(expected)
const expect = chai.expect


// import local file(s) to test
import {addTwoNumbers, ageGreaterThan18} from "../app.js";


// create a test suite (a collection of individual tests)
describe("addTwoNumbers", () => {
    it("should return the correct sum", () => {
        // ASSEMBLE
        const inputOne = 5;
        const inputTwo = 10;

        const expectedOutput = 15;

        // ACTION
        const result = addTwoNumbers(inputOne, inputTwo);

        // ASSERT
        expect(result).to.equal(expectedOutput);
    })
    // enable the test to return a helpful error message if one of the inputs is a string:
    it("should return false if both inputs are not numbers", () => {
        // ASSEMBLE
        const inputOne = '5';
        const inputTwo = 10;

        const expectedOutput = false;

        // ACTION
        const result = addTwoNumbers(inputOne, inputTwo);

        // ASSERT - to.equal does object identity - checks if it's the same instance of an object.
        expect(result).to.equal(expectedOutput);
    })
})

describe("ageGreaterThan18", () => {
// take an array of objects with name and age properties. Return the ones that pass a certain test.
    it("should return objects with age values greater than 18", () => {
        // ASSEMBLE
        const input = [
            {age: 4, name: 'rufio'},
            {age: 1, name: 'mushu'},
            {age: 20, name: 'diva'},
            {age: 101, name: 'gloria'}
        ]

        const expectedOutput = [
            {age: 20, name: 'diva'},
            {age: 101, name: 'gloria'}
        ]

        // ACTION
        let result = ageGreaterThan18(input)
        console.log(result, ' this is the way')

        // ASSERT -- when comparing arrays, need to be deep Equal, which looks to see if the arrays have the same content & it's ok if they are different object.
        expect(result).to.deep.equal(expectedOutput);
    })
    it("should throw an error if age is undefined", () => {
        // ASSEMBLE
        const input = [
            {age: 4, name: 'rufio'},
            {age: 1, name: 'mushu'},
            {age: 20, name: 'diva'},
            {name: 'gloria'}
        ]

        // by wrapping in an anonymous function, it will run during the expect statement:
        const testFunction = () => {
            ageGreaterThan18(input)
        }  
        
        expect(testFunction).to.throw("age is not provided")
    })
})


