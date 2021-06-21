var exp = [4000, 5000, 6500, 5000, 2800, 3500]; //Given Array

exp.forEach((amount, index) => {
  let result = 0;
  let balance = 0;
  if (amount > 4000) {
    balance = amount - 4000;
  }
  result = amount + balance * 0.02;

  return (exp[index] = result);
});

console.log(exp);
