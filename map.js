const numbers = [1, 2, 3, 4, 5];
const numbersDouble = numbers.map(double);

// We are not using arr in the following function.
function double(value, index, arr) {
  return value * 2;
}

console.log(numbers);
console.log(numbersDouble);

const products = [
  {
    name: "laptop",
    price: 1000,
    count: 5,
  },
  {
    name: "desktop",
    price: 1500,
    count: 5,
  },
  {
    name: "phone",
    price: 500,
    count: 10,
  },
];

const totalProductsValue = products.map((item) => item.price * item.count);

console.log(totalProductsValue);

const totalProductsValueWithName = products.map((item) => ({
  name: item.name,
  totalValue: item.price * item.count,
}));
console.log(totalProductsValueWithName);

// In the following we are calling the number of item
// We are converting array of strings to array of numbers.
const str = ["1", "5", "3", "4", "a"];
const numbers2Temp = str.map((item) => Number(item));
const numbers2 = str.map(Number);
console.log(`const str ${numbers2Temp}`);
console.log(`const str ${numbers2}`);
