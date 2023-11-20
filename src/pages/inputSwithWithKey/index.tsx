import { useState } from "react";

const InputSwitchWithKey = () => {
  const [showCpf, setShowCpf] = useState<boolean>(true);
  // const [cnpj, setCnpj] = useState("");
  // const [cpf, setCpf] = useState("");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <input
        type="checkbox"
        name="switch"
        onClick={() => setShowCpf(!showCpf)}
      />
      <label>{showCpf ? "cpf" : "cnpj"}</label>
      {showCpf ? (
        <input
          //key={"teste"}
          id="cpf"
          type="text"
          // value={cpf}
          //  onChange={(e) => setCpf(e.target.value)}
        />
      ) : (
        <input
          //key={"teste 2"}
          id="cnpj"
          type="text"
          //value={cnpj}
          //onChange={(e) => setCnpj(e.target.value)}
        />
      )}
    </div>
  );
};

export default InputSwitchWithKey;
