const serieCalculator = (number) => {
  const data = { error: false, message: '', value: 0 };

  const primeData = prime(number + 3);
  const triangularData = triangular(number - 1);
  const fibonacciData = fibonacci(number - 2);

  if(primeData == null) {
    data.error = true;
    data.message = 'El término primo es un valor negativo.';
  } else if(triangularData == null) {
    data.error = true;
    data.message = 'El término triangular es un valor negativo.';
  } else if(fibonacciData === 0) {
    data.error = true;
    data.message = 'El término fibonacci es 0 y no es posible dividir entre este valor.';
  } else {
    const result = (primeData * triangularData) / fibonacciData;
    data.value = result;
  }

  return data;
};

const triangular = (term) => {
  if(term < 0) return null;

  return term * (term + 1) / 2;
};

const fibonacci = (term) => {
  if(term == 0) return 0;
  if(term == 1 || term == -1) return 1;

  if(term < 0) {
    return Math.pow(-1, term + 1) * fibonacci(Math.abs(term));
  } else {
    return fibonacci(term - 1) + fibonacci(term - 2);
  }
};

const prime = (term) => {
  if(term < 0) return null;

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