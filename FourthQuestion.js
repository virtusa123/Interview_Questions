// This function finds the shortest path between two vertices in an unweighted, undirected graph using Dijkstra's algorithm.
function findShortestPath(graph, startVertex, endVertex) {
  // Create a distance object to keep track of the shortest distance to each vertex from the startVertex
  const distances = {};
  for (const vertex in graph) {
    distances[vertex] = Infinity; // Initialize all distances to Infinity, except for the startVertex, which is 0
  }
  distances[startVertex] = 0;

  // Create a priority queue to keep track of the vertices with the shortest distance from the startVertex
  const priorityQueue = [startVertex];

  // Create a previous object to keep track of the path from the startVertex to each vertex
  const previous = {};

  // Loop until the priority queue is empty
  while (priorityQueue.length) {
    // Get the vertex with the shortest distance from the startVertex
    const currentVertex = priorityQueue.shift();

    // Check if we've reached the endVertex
    if (currentVertex === endVertex) {
      // If we have, build the path from the startVertex to the endVertex and return it
      const path = [endVertex];
      let vertex = endVertex;
      while (vertex !== startVertex) {
        path.unshift(previous[vertex]);
        vertex = previous[vertex];
      }
      return path;
    }

    // Loop through the neighbors of the currentVertex
    for (const neighbor in graph[currentVertex]) {
      // Calculate the distance from the startVertex to the neighbor
      const distance =
        distances[currentVertex] + graph[currentVertex][neighbor];

      // If this distance is shorter than the previous distance to the neighbor, update the distances and previous objects
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = currentVertex;

        // Add the neighbor to the priority queue
        if (!priorityQueue.includes(neighbor)) {
          priorityQueue.push(neighbor);
        }
      }
    }
  }

  // If we've gone through the entire graph and haven't found the endVertex, there is no path
  return null;
}

// Define a graph object
const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 },
};

// Define the start and end vertices
const start = "A";
const end = "D";

// Call the findShortestPath function with the graph and vertices, and print the result
console.log(findShortestPath(graph, start, end));
