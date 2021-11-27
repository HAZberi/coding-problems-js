const sumOfMultiples = () => {
  let sum = 0;
  for (let i = 2; i <= 999999; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      sum += i;
    }
  }
  console.log(sum);
};

sumOfMultiples();
