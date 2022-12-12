
//Spread operator = allows an iterable such as an
// ...              array or string to be expanded 
//                  in places where zero or more
//                  arguments are expected
//                  (unpacks the elements)

let userName = "Jay";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(...numbers);

let maximum = Math.max(...numbers);
console.log(maximum);

let class1 = [1, 2, 3, 4, 5];
let class2 = [6, 7, 8, 9, 10];

class1.push(...class2);

console.log(class1);