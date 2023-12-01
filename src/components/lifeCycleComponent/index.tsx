import { useEffect, useRef, useState } from "react";

const LifeCycleComponent = () => {
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    console.log("________________________________________");
    console.log("Mounting");
    handleRerender();
    return () => console.log("Unmounting");
  }, []);

  useEffect(() => {
    console.log("Rerender");
  }, [update]);

  function handleRerender() {
    const hashRender = Math.random() * 100;
    console.log(
      "Creating/Recreating functions inside component, " + hashRender
    );
  }

  return (
    <div onClick={() => setUpdate(!update)}>
      <button>Rerender</button>
    </div>
  );
};

export default LifeCycleComponent;
