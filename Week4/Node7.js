function handleArray(arr) {
    try {
      if (!Array.isArray(arr)) throw "Not an array!";
      if (arr.length === 0) throw "Array is empty!";
      console.log(arr[0].toUpperCase()); // Example: access and process first element
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  // Example usage:
  handleArray(["hello", "world"]); // Output: HELLO
  handleArray("not an array"); // Error: Not an array!
  handleArray([]); // Error: Array is empty!
  