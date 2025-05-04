function makeArray(firstArray, secondArray, maxLength) {
  // Створюємо новий масив, об'єднуючи два вхідні масиви
  const combinedArray = firstArray.concat(secondArray);

  // Якщо довжина об'єднаного масиву перевищує maxLength
  if (combinedArray.length > maxLength) {
    // Повертаємо копію з перших maxLength елементів
    return combinedArray.slice(0, maxLength);
  }

  // Інакше повертаємо увесь об'єднаний масив
  return combinedArray;
}

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []
