/* Remember how we could put any value in Js? In TS we can specifiy the values we put in array
    if any of the element doesnt match that, TS gives error
*/

let Numbers: number[] = [1, 2, 3, 4, 5];

let Fruits: string[] = ["Apple", "Banana", "Lychee", "Watermelon", "Mango"];

let Alphabets: string[] = ["A", "B", "C", "D", "E"];

let TruthyFalsy: boolean[] = [true, false];

//As u can see we specify the type beforehand

/*
If we do somehting like this
let Numbers: number[] = [1, 2, 3, "Walter"];
This will give us an error since Walter is a string but the array is of numbers */



//-----------------------------------TUPLES----------------------------------------------------

/*
  Moving ON LETS understand what a tuple is 
  TUPLE : A tuple is a fixed-length array where each element can have a different type.

  let a: [string,number] = ["Twenty",5]; <-- We fixed it

  If we did this insetad : let a: [string,number] = [3,5]; <-- It would give us error
*/

let T1: [string, number] = ["Twenty", 5];
let T2: [string, number, boolean, string] = ["Hello", 10, true, "World"];

console.log(T1);                // [ 'Twenty', 5 ]

console.log(T2[0],T2[3]);       // Hello World

//----------------------------------------------------------------------------------------------


//-----------------------------------ENUMS-------------------------------------------------------

//An enum (enumeration) is a way to define a set of named constants.
//We use . operator to get the value


enum Color{
    Red,
    Blue,
    Green
}

console.log(Color.Blue); //Gives the index basically

enum Fruit {
    Apple = "Apple",
    Mango = "Mango",
    Orange = "egnarO"
}

console.log(Fruit.Orange);

//-----------------------------------------------------------------------------------------------