import { useCallback, useState } from "react";

const Callback = () => {
  const [value1, setValue1] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [refresh, setRefresh] = useState(new Date().getMilliseconds());

  const callbackFunction = useCallback(() => {
    console.log(
      "Calculating values... " +
        `${Number.parseInt(value1) + Number.parseInt(value2)}`
    );
    setResult(`${Number.parseInt(value1) + Number.parseInt(value2)}`);
  }, [refresh]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.id === "value1") {
      setValue1(e.target.value);
      return;
    }
    setValue2(e.target.value);
  }

  function handleRefresh() {
    const refreshNumber = new Date().getMilliseconds();
    console.log("Refresh state... " + refreshNumber);
    setRefresh(refreshNumber);
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
      <button onClick={callbackFunction}>soma</button>
      <button onClick={handleRefresh}>Refresh state</button>
    </>
  );
};

export default Callback;
