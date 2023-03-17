// Define a nested array
const input2 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// Define a function to flatten a nested array
function arrflat(arr) {
  // Call the flat method on the input array to flatten it
  return arr.flat();
}

// Call the arrflat function on the nested array and print the result to the console
console.log(arrflat(input2)); // prints [1, 2, 3, 4, 5, 6]
