import { useEffect, useLayoutEffect, useState } from "react";

const ImperativeDeclarative = () => {
  const [autoFocus, setAutoFocus] = useState(getFocus());
  const [autoFocusImperative, setAutoFocusImperative] = useState(true);

  function getFocus() {
    const loadAutoFocus = window.localStorage.getItem("autoFocus");
    if (loadAutoFocus) {
      return /true/.test(loadAutoFocus);
    }
    return false;
  }

  /*
  	Manipulação do componente é feita passando diretamente os valores para o componente
  */
  function handleDeclarativeFocus() {
    window.localStorage.setItem("autoFocus", `${!autoFocus}`);
    window.location.reload();
  }

  /*
  	Manipulação do componente é feita via DOM
  */
  function handleImperativeFocus() {
    const imperativeInput = document.getElementById("imperative");
    !autoFocusImperative ? imperativeInput?.focus() : imperativeInput?.blur();
    setAutoFocusImperative(!autoFocusImperative);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        padding: "10px",
      }}
    >
      <label htmlFor="imperative">Imperativo</label>
      <input id="imperative" type="text" />
      <label>Declarativo</label>
      <input id="declarative" type="text" autoFocus={autoFocus} />
      <div
        style={{
          display: "flex",
          width: "500px",
          margin: "10px",
          justifyContent: "space-evenly",
        }}
      >
        <button onClick={handleImperativeFocus}>
          {`AutoFoco ${autoFocusImperative} (Imperativo)`}
        </button>
        <button onClick={handleDeclarativeFocus}>
          {`AutoFoco ${autoFocus} (Declarativo)`}
        </button>
      </div>
    </div>
  );
};

export default ImperativeDeclarative;
