import { useState } from "react";

const RightCmpKey = () => {
  const [checkList, setCheckList] = useState<string[]>([
    "checkbox 1",
    "checkbox 2",
  ]);
  const [isDesc, setIsDesc] = useState<boolean>(true);

  function handleClick() {
    setIsDesc(!isDesc);
    setCheckList(!isDesc ? checkList.sort() : checkList.reverse());
  }
  console.log(checkList);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {checkList.map((cb) => (
        <div key={cb}>
          <input type="checkbox" name={cb} value={cb} />
          <label htmlFor={cb}>{cb}</label>
          <br></br>
        </div>
      ))}
      <button onClick={handleClick}>
        {isDesc ? "Ordenar Decrescente" : "Ordenar Crescente"}
      </button>
    </div>
  );
};

export default RightCmpKey;
