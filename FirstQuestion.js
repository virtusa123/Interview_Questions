// Merge two sorted arrays into a single sorted array
function merge(left, right) {
  // Initialize an empty array to store the merged result
  let arr = [];
  
  // While both left and right arrays are non-empty
  while (left.length && right.length) {
    // Pick the smaller of the two smallest elements from left and right
    if (left[0] < right[0]) {
      arr.push(left.shift()); // remove the first element from left and add it to arr
    } else {
      arr.push(right.shift()); // remove the first element from right and add it to arr
    }
  }
  
  // Concatenate any remaining elements from either array
  // (in case we didn't go through the entire left or right array)
  return [...arr, ...left, ...right];
}

// Recursively sort an array using merge sort
function mergeSort(array) {
  // Base case: return the array if it has 1 or 0 elements
  if (array.length < 2) {
    return array;
  }
  
  // Divide the array into two halves
  const half = array.length / 2;
  const left = array.splice(0, half); // splice the first half of the array into a new array called left
  
  // Recursively sort each half and merge them
  return merge(mergeSort(left), mergeSort(array)); // recursively call mergeSort on the left and right halves, and then merge the sorted results using the merge function
}

// Test the merge sort algorithm on an input array
const input = [5, 3, 8, 6, 2, 7, 1, 4];
console.log(mergeSort(input)); // prints [1, 2, 3, 4, 5, 6, 7, 8]
