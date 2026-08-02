// Nr. 1: Create a variable called "Name", with the type of a string and the value "John".

let Name: string = "John"; // You can also say var or const instead of let

// Nr. 2: Create a variable called "age", with the type of a number and the value of twenty-seven.

let age: number = 27;

// Nr. 3: Create a variable called "testScores", with the type of an array of numbers, and the values 49, 65, 61, and 74.

let testScores: Array<number> = [49, 65, 61, 74]; // you can also say number[] instead of Array<number>

// Nr. 4: Create a variable called "x" with the type of any, then set it to "the number twelve", and later set it to 12.

let x: any = "the number twelve";
x = 12;

// Nr. 5: Create a variable called "user" with the type of an object, with the properties being all the above.

const user: {Name: string, age: number, testScores: number[], x: any} = {
    Name: "John",
    age: 27,
    testScores: [49, 65, 61, 74],
    x: 12
};
