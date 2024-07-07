const returnSum = (...val) => {
  let sum = 0;

  for (let i = 0; i <= val.length - 1; i++) {
    sum += val[i];
  }

  return sum + 10;
};

const sum = returnSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log("Sum is: " + sum);
