import { useState } from "react";

const memoization = (fn: any) => {
  const cache = new Map();
  return (...args: any) => {
    console.log(args);
    const key = `key-${args.join("-")}`;
    if (cache.get(key)) {
      console.log("Cached function " + key);
      return cache.get(key);
    }

    const result = fn && fn(...args);
    cache.set(key, result);
    console.log("Memoized function " + key);

    return result;
  };
};

const MemoizationCache = () => {
  const [value1, setValue1] = useState<number | string>(0);
  const [value2, setValue2] = useState<number | string>(0);
  const [result, setResult] = useState<number | string>(0);

  function sumValues(value1: number, value2: number) {
    return value1 + value2;
  }

  const memoizedFunction = memoization(sumValues);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value ? Number.parseInt(e.target.value) : "";
    if (e.target.id === "value1") {
      setValue1(value);
      return;
    }
    setValue2(value);
  }

  return (
    <>
      <div>
        <input
          id="value1"
          placeholder="Digite um número 1"
          type="number"
          value={value1}
          onChange={handleChange}
        />
        <br />
        <input
          id="value2"
          placeholder="Digite um número 2"
          type="number"
          value={value2}
          onChange={handleChange}
        />
        <div>{result}</div>
      </div>
      <button onClick={() => setResult(memoizedFunction(value1, value2))}>
        soma
      </button>
    </>
  );
};

export default MemoizationCache;
