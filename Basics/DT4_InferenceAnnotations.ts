/*

----------------------------------- Type Inference -----------------------------------
TypeScript automatically infers the type of a variable based on the value you assign. 
You don’t need to explicitly specify the type.

*/

let inferredNumber = 42;        // TypeScript infers 'number'
let inferredString = "Hello";   // TypeScript infers 'string'

// inferredNumber = "Hi";       // Error, cannot assign string to number
console.log(inferredNumber, inferredString);


/*

----------------------------------- Type Annotation -----------------------------------
Type Annotation → you explicitly tell TypeScript what type a variable should be.
This helps when you want a variable to accept only a specific type.

*/

let annotatedNumber: number = 100;
let annotatedString: string = "TypeScript";

annotatedNumber = 200;      // allowed
// annotatedNumber = "Hi";  // Error
console.log(annotatedNumber, annotatedString);
