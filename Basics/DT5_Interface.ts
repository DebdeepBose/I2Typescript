/*

Interface = contract/blueprint for objects.
It tells TS: "this object must have these properties/methods".

It does NOT create JS code (just type-checking in TS).
Think of it like a shape-checker.

*/

interface User {
  id: number;
  name: string;
  isAdmin: boolean;
}


let u1: User = {
  id: 1,
  name: "Debdeep",
  isAdmin: true,
};

// Error: missing property
// let u2: User = { id: 2, name: "Bob" };

// Error: wrong type
// let u3: User = { id: 3, name: "Alice", isAdmin: "yes" };

console.log(u1);


//Similarly we can use a function as well

interface User {
  id: number;
  name: string;
  isAdmin: boolean;
  gender ?: string; // ?: means optional, we can or cannot pass it in a function
}

function f1(Obj1: User) {
  Obj1.id;
  Obj1.isAdmin;
  Obj1.name;

  console.log(Obj1.id);
}

// Create an object to pass in
let user1: User = {
  id: 1,
  name: "Debdeep",
  isAdmin: false,
};

f1(user1);
