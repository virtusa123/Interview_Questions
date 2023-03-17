function generateFibonacciSequence(n) {
  // Initialize an array with the first two numbers in the Fibonacci sequence
  const fibonacciSequence = [0, 1];

  // Loop through the remaining numbers in the sequence and add them to the array
  for (let i = 2; i < n; i++) {
    // The next number in the sequence is the sum of the two previous numbers
    fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
  }

  // Return the first n numbers in the sequence
  return fibonacciSequence.slice(0, n);
}

// Example usage: generate the first 6 numbers in the Fibonacci sequence
console.log(generateFibonacciSequence(6));
