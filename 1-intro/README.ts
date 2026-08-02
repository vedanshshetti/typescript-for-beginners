/*
    Welcome to TypeScript!
    Seeing as you've opened me, the intro, I'll assume you're 
    just getting started with TypeScript, and have been using
    JavaScript until now.
    
    --------------------------------------------------------------------------------------------------------------

    So, what is TypeScript?
    Ever had those errors:
        "Uncaught TypeError: Cannot read properties of undefined"
    
    That is called a TypeError - it's when a function or variable value
    has one data type, but you treat it like it has a different data type.
    Every developer who has tried JavaScript has probably seen this error at least once.
    And the worst part?
    You only find out when you run the code.

    --------------------------------------------------------------------------------------------------------------

    That's why TypeScript was invented!
    As the name suggests, TypeScript (file extension ".ts") is all about data types.
    Instead of guessing what type a variable has, you define it when you create the
    variable. And then, if you accidentally treat it like it has a different type, you
    get an error, a red squiggly line, right in your IDE, long before it reaches production,
    allowing you to fix the bugs before shipping them to your users.
    Of course, you don't have to define a type, in which case it will take the type of its first value.

    --------------------------------------------------------------------------------------------------------------

    Enough theory, let's dive right in!
*/

/** 
This is how you define the type of a variable!
You just put a colon (the ":" symbol) after the variable name, then name the type you want it to be, 
then continue the variable definition normally.
*/
let myVariable: string = "Hello!";

// You can use the following types: string, number, boolean, null, undefined, as well as many more! Here are a few examples, I'll teach you more as you go.

let myString: string = "This is a string! It's a series of characters enclosed in either single- or doublequotes. You probably know this already!";
let myNumber: number = 12; // This is a number, it's pretty self-explanatory. I mean, it's in the name!
let myBoolean: boolean = true; // This is a boolean, it can only be true or false, nothing else.
let myUndefined: undefined = undefined; // This has very few use cases, but you can set a variable to the type "undefined", which makes that it's only possible value.
let myNull: null = null; // The null type allows one value: null! It's helpful for when you want an empty variable.

// Here are some more types you may encounter:

/** 
 *  This is an array. To define one, you can either write your type
 *  followed by square brackets, so string[] for an array of strings.
 *  You can also write Array<type>, so for an array of strings you
 *  would write Array<string>. We’ll learn more about the syntax
 *  T<U> when we cover generics.
*/

const arrayOfNumbers: number[] = [1, 2, 3];
const arrayOfStrings: Array<string> = ["a", "b", "c"];

/**
 *  TypeScript also has a special type, any, that you can use whenever
 *  you don’t want a particular value to cause typechecking errors. 

 * USE any SPARINGLY. IT DISABLES TYPE CHECKING AND BASICALLY BRINGS YOU
 * BACK TO NORMAL, TYPE-LESS JAVASCRIPT
*/

let variableOfAnyType: any= 12;
variableOfAnyType="this works too!";

/**
 * Last but not least, we have the Object!
 * You define one with curly braces and the desired properties inside it.
 */

let myObject: {
    name: string,
    age: number
} = {
    name: "John",
    age: 31
}

// TEST! Go to the test.ts file and do all the exercises, then check how many you got right by heading over to answerKey.ts!

// Want more? Check out lesson 2 - interfaces