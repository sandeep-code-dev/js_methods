const currentSelection = ["apple", "banana", "orange"];

function toggleSelextion(item, selectedItems) {
  const itemIndex = selectedItems.indexOf(item);
  if (itemIndex !== -1) {
    return selectedItems.toSpliced(itemIndex, 1);
  } else {
    return selectedItems.toSpliced(selectedItems, 0, item);
  }
}
let userSelection = ["Product A", "Product C"];
userSelection = toggleSelextion("Product A", userSelection);
userSelection = toggleSelextion("Product B", userSelection);
console.log("After removing A:", userSelection);

console.log(
  "Original selections are implicitly preserved due to immutability.",
);
