/*

-----------------------------------------any--------------------------------------------------

any → disables type checking, it means literally any value/type is possible

let x: any = 10;
x = "hello"; // ✅ allowed

*/

let a:any;
a = 12;
console.log(a);
a = "hello"
console.log(a);

// -----------------------------------------------------------------------------------------------



/*
----------------------------------------unknown------------------------------------------------

unknown → safer any, needs type check before use, basically u always need a typeof check before running it

let y: unknown = "hi";

if (typeof y === "string") {
  console.log(y.toUpperCase()); 
}

*/

let y: unknown;
y = 42;
console.log(y); // 42
y = "hi";
console.log(y); // "hi"

// Need type check before using unknown
if (typeof y === "string") {
    console.log(y.toUpperCase()); // "HI"
}

//-----------------------------------------------------------------------------------------------

/*
----------------------------------------void---------------------------------------------------

void → no return value (mainly for functions), as we know doesnt return anything

function greet(): void {
  console.log("Hello");
}

-----------------------------------------------------------------------------------------------


-----------------------------------------------null--------------------------------------------

null → intentional empty value

let a: null = null;
let b : null = 12; //Not allowed

-------------------------------------------------------------------------------------------------


--------------------------------------------undefined---------------------------------------------

undefined → variable declared but not assigned
let b: undefined;

-------------------------------------------------------------------------------------------------


-----------------------------------------------never---------------------------------------------

never → function that never returns, usually helps to prevent infinite loop

function error(msg: string): never {
  throw new Error(msg);
}

--------------------------------------------------------------------------------------------------
*/


