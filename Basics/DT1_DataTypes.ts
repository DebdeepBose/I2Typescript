/*
Primitive data types are the most basic types of data. 
They are immutable (cannot be changed once created)
*/

let age: number = 25;
let price: number = 19.99;

console.log(age + price);

/*
Understand this:
Anything that has () or {} or [] is non-primitive and so whats the difference?

Primitive Can Be Copied by which i mean

let a = 2;
let b = a;
b = 3;

Here when we change b's value to 3, a remains unchanged.

However, Non Primitive datatypes work with reference

let a = [1,2,3];
let b = a;
here b did not get the value of a, but got the whole 'a' instead
so any changes made to 'b' directly affects 'a'.

*/

let a: number[] = [1, 2, 3];
let b = a;
b[1] = 4;

console.log(a); // It changes to [1,4,3]
