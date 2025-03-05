// Function to calculate the area of a rectangle
function calculateArea(length, width) {
    return length * width;
  }
  
  // Function to calculate the perimeter of a rectangle
  function calculatePerimeter(length, width) {
    return 2 * (length + width);
  }
  
  // Function to display the results
  function displayRectangleProperties(length, width) {
    // Calculate area and perimeter
    const area = calculateArea(length, width);
    const perimeter = calculatePerimeter(length, width);
  
    // Display the results
    console.log("For a rectangle with length " + length + " and width " + width + ":");
    console.log("Area: " + area);
    console.log("Perimeter: " + perimeter);
  }
  
  // Call the function with example values
  displayRectangleProperties(5, 3);
  