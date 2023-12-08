import { memo, useMemo, useState } from "react";

const ComponentUseMemo = () => {
  const [prime, setPrime] = useState<number[]>([]);
  const [refresh, setRefresh] = useState(new Date().getMilliseconds());

  const calculatePrimeNumbers = (limit: number) => {
    console.log("calculating prime numbers...");
    const primes = [];

    for (let number = 2; number <= limit; number++) {
      let isPrime = true;

      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        primes.push(number);
      }
    }

    return primes;
  };

  const memoPrimeNumbers: number[] = useMemo(
    () => calculatePrimeNumbers(200000),
    [refresh]
  );

  function handleCLick() {
    console.log(`inicio do calculo sem memo: ${new Date().toTimeString()} `);
    const primeNumbers = calculatePrimeNumbers(200000);
    console.log(`fim do calculo sem memo: ${new Date().toTimeString()} `);
    setPrime(primeNumbers);
  }

  function handleClickMemo() {
    console.log(`inicio do calculo com memo: ${new Date().toTimeString()} `);
    const primeNumbers = memoPrimeNumbers;
    console.log(`fim do calculo com memo: ${new Date().toTimeString()} `);
    setPrime(primeNumbers);
  }

  return (
    <div>
      <button onClick={handleCLick}>{`Show random`}</button>
      <button onClick={handleClickMemo}>{`Show memo random`}</button>
      <button onClick={() => setRefresh(new Date().getMilliseconds())}>
        {`Refresh Memo Number ${refresh}`}
      </button>
      <ul>
        {prime.map((primeNumber: number, index) => {
          return <li key={index}>{primeNumber}</li>;
        })}
      </ul>
    </div>
  );
};

export default ComponentUseMemo;
