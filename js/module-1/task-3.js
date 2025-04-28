function getElementWidth(content, padding, border) {
  // Convert all values to numbers
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding) * 2; // padding is applied to both sides
  const borderWidth = parseFloat(border) * 2; // border is applied to both sides

  // Calculate total width
  const totalWidth = contentWidth + paddingWidth + borderWidth;

  return totalWidth;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
