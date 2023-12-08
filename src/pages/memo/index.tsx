import { memo, useState } from "react";

const ComponentAlwaysRefresh = () => (
  <div>{`This componente always will refresh ${Math.random() * 100}`}</div>
);

type MemoizedProps = {
  refresh: number;
};

const ComponentMemoized = memo(({ refresh }: MemoizedProps) => (
  <div>{`This componente is memoized with refresh number ${refresh},  ${
    Math.random() * 100
  }`}</div>
));

const ComponentMemo = () => {
  const [refresh, setRefresh] = useState(new Date().getMilliseconds());
  const [refreshMemoized, setRefreshMemoized] = useState<number>(
    new Date().getMilliseconds()
  );

  return (
    <div>
      <button onClick={() => setRefresh(new Date().getMilliseconds())}>
        {`Refresh Number ${refresh}`}
      </button>
      <button onClick={() => setRefreshMemoized(new Date().getMilliseconds())}>
        {`Refresh Memoized ${refreshMemoized}`}
      </button>
      <ComponentAlwaysRefresh />
      <ComponentMemoized refresh={refreshMemoized} />
    </div>
  );
};

export default ComponentMemo;
