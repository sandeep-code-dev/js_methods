const styleOverrides = [
  { color: "blue", fontSize: "14px" },
  { backgroundColor: "red" },
  { color: "green" }, // This color should be applied last
];

const finalStyles = styleOverrides.reduce((acc, currentStyle) => {
  return { ...acc, ...currentStyle }; // Spread current style over accumulator
}, {});

console.log(finalStyles); // Output: { color: 'green', backgroundColor: 'red', fontSize: '14px' }
