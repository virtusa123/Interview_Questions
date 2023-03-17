// This is a MongoDB query that searches for documents in the 'products' collection
// that meet the following conditions:
// 1. The value of the 'price' field is greater than 100
// 2. The value of the 'category' field is 'electronics'
// The query is expressed as a JavaScript object with two key-value pairs,
// separated by a comma, and enclosed in curly braces.

// Select the 'products' collection and call the 'find()' method to search for documents
// that meet the query conditions. 
// The find() method returns a cursor that can be iterated to access the matching documents.

db.products.find({
  price: { $gt: 100 }, // specify the first condition: price field is greater than 100
  category: "electronics" // specify the second condition: category field is 'electronics'
});
