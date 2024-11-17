function sharePizza(slices, people) {
    // Calculate the slices per person 
    const slicesPerPerson = slices / people;
  
    // Return the formatted message with two decimal places for slices per person
    return `Each person gets ${slicesPerPerson.toFixed(2)} slices of pizza; from our ${slices} slice pizza`;
  }

// console
console.log(sharePizza(8,2));
console.log(sharePizza(10, 3));
console.log(sharePizza(12, 0));