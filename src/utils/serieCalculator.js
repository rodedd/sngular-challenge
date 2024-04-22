const serieCalculator = (number) => {
  return (prime(number + 3) * triangular(number - 1)) / fibonacci(number - 2);
};

const triangular = (number) => {
  return number * (number + 1) / 2;
};

const fibonacci = (number) => {
  if (number == 0) return 0;
  if (number == 1 || number == -1) return 1;

  if(number < 0) {
    return Math.pow(-1, number + 1) * fibonacci(Math.abs(number));
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
};

const prime = (term) => {
  const primeNumbers = [];
  let naturalNumber = 2;

  while(primeNumbers.length < term) {
    if (isPrime(naturalNumber)) {
      primeNumbers.push(naturalNumber);
    }
    naturalNumber++;
  }

  return primeNumbers[term - 1];
};

const isPrime = (naturalNumber) => {
  if (naturalNumber < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(naturalNumber); i++) {
    if (naturalNumber % i === 0) {
      return false;
    }
  }
  return true;
};


export default serieCalculator;