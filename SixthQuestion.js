// This function takes an array of objects and a key as arguments
function groupByKey(arr, key) {
  // Create an empty object to hold the grouped data
  const grouped = {};
  
  // Loop through the array of objects
  arr.forEach((obj) => {
    // Get the value of the key for the current object
    const value = obj[key];
    
    // If the value does not exist as a key in the grouped object, create an array with the current object as the first item
    if (!grouped[value]) {
      grouped[value] = [obj];
    } else {
      // If the value already exists as a key in the grouped object, push the current object into the existing array
      grouped[value].push(obj);
    }
  });
  
  // Return the grouped object
  return grouped;
}

// Define an array of objects and a key to group by
const data = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 35, gender: "male" },
  { name: "Dave", age: 40, gender: "male" },
  { name: "Eve", age: 45, gender: "female" },
  { name: "Frank", age: 50, gender: "male" },
  { name: "Grace", age: 55, gender: "female" },
];

const key = "gender";

// Call the groupByKey function with the data array and key
console.log(groupByKey(data, key));
