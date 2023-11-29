import { useRender } from "../../hooks/useRender";

type HeavyComponentProps = {
  alias: string;
  numberOfItems: number;
};

type Item = {
  itemIndex: number;
};

export const HeavyComponent = ({
  alias,
  numberOfItems,
}: HeavyComponentProps) => {
  const Item = ({ itemIndex }: Item) => {
    const { hashRender } = useRender(`${alias} ${itemIndex}`);
    return <div>{`Component ${itemIndex} / Render hash : ${hashRender}`}</div>;
  };

  function createItems() {
    const items = [];
    for (let i = 0; i < numberOfItems; i++) {
      items.push(Item);
    }
    return items;
  }

  return (
    <div style={{ border: "solid 1px #166088", padding: "5px", margin: "5px" }}>
      <span
        style={{
          width: "500px",
          background: "#4f6d7a",
          padding: "5px",
          borderRadius: "2px",
        }}
      >{`Heavy Component: ${alias}`}</span>
      {createItems().map((Item, index) => (
        <Item key={index} itemIndex={index} />
      ))}
    </div>
  );
};
