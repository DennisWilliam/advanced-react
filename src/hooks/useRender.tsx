import { useState } from "react";

export const useRender = (componentName: string) => {
  let countRender = 0;
  const [hashRender, _setHashRender] = useState<number | undefined>(
    showRender(componentName)
  );

  function showRender(cmp: string) {
    const hashRender = Math.random() * 100;
    console.log(`Render ${cmp} - ${hashRender}`);
    countRender + 1;
    return hashRender;
  }

  const RenderComponent = () => (
    <span
      style={{
        width: "500px",
        background: "#166088",
        padding: "5px",
        margin: "5px",
        borderRadius: "2px",
      }}
    >{`Render ${componentName} / Initial Hash ${hashRender}`}</span>
  );
  return { showRender, hashRender, RenderComponent };
};
