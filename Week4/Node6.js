// Define the Rectangle class
class Rectangle {
    // Constructor to initialize length and width
    constructor(length, width) {
      this.length = length;
      this.width = width;
    }
  
    // Method to calculate the area of the rectangle
    calculateArea() {
      return this.length * this.width;
    }
  
    // Method to calculate the perimeter of the rectangle
    calculatePerimeter() {
      return 2 * (this.length + this.width);
    }
  
    // Method to display the properties of the rectangle
    displayProperties() {
      const area = this.calculateArea();
      const perimeter = this.calculatePerimeter();
      
      console.log(`For a rectangle with length ${this.length} and width ${this.width}:`);
      console.log(`Area: ${area}`);
      console.log(`Perimeter: ${perimeter}`);
    }
  }
  
  // Create an object (instance) of the Rectangle class
  const myRectangle = new Rectangle(5, 3);
  
  // Call the method to display properties of the rectangle
  myRectangle.displayProperties();
  