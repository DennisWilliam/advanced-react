import { useEffect, useState } from "react";

type OriginalComponentProps = {
  money: number;
  user: string;
};
const OriginalComponent = ({ money }: OriginalComponentProps) => {
  return <li>{`Saldo: ${money}`}</li>;
};

const HOCComponent = (OriginalComponent: any) => {
  const [money, setMoney] = useState(50);

  useEffect(() => {
    const money = Math.random() * 100;
    setMoney(money);
  }, []);

  return (props: any) => <OriginalComponent {...props} money={money} />;
};

const HighOrderComponent = () => {
  const list = ["user1", "user2", "user3"];

  return (
    <>
      <div>
        <span>Sem High Order Component</span>
        <ul>
          {list.map((user) => {
            return <OriginalComponent key={user} user={user} money={0} />;
          })}
        </ul>{" "}
      </div>
      <div>
        <span>High Order Component</span>
        <ul>
          {list.map((user) => {
            const HOC = HOCComponent(OriginalComponent);
            return <HOC key={user} user={user} />;
          })}
        </ul>{" "}
      </div>
    </>
  );
};

export default HighOrderComponent;
