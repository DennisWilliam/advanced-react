import { RouterType } from "../types/router.types";
import Callback from "./callback";
import ComponentLifeCycle from "./componentLifeCycle";
import HighOrderComponent from "./highOrder";
import ImperativeDeclarative from "./imperativeDeclarative";
import InputSwitchWithKey from "./inputSwithWithKey";
import Layout from "./layout";
import ComponentMemo from "./memo";
import MemoizationCache from "./memoization";
import RightCmpKey from "./rightCmpKey";
import ComponentUseMemo from "./useMemo";
import WrongCmpKey from "./wrongCmpKey";
import WrongRenders from "./wrongRenders";

const pagesData: RouterType[] = [];

function createPageRoute(route: RouterType) {
  pagesData.push(route);
}
// prettier-ignore
createPageRoute({ path: "wrong-cmp-key", element: <WrongCmpKey />, title: "WrongCmpKey" });
// prettier-ignore
createPageRoute({ path: "right-cmp-key", element: <RightCmpKey />, title: "RightCmpKey" });
// prettier-ignore
createPageRoute({ path: "input-switch-with-key", element: <InputSwitchWithKey />, title: "InputSwitchWithKey" });
// prettier-ignore
createPageRoute({ path: "layout", element: <Layout />, title: "Layout" });
// prettier-ignore
createPageRoute({ path: "", element: <div>Home</div>, title: "Home" });
// prettier-ignore
createPageRoute({ path: "wrong-renders", element: <WrongRenders />, title: "WrongRenders" });
// prettier-ignore
createPageRoute({ path: "imperative-declarative", element: <ImperativeDeclarative />, title: "ImperativeDeclarative" });
// prettier-ignore
createPageRoute({ path: "life-cycle", element: <ComponentLifeCycle />, title: "LifeCycle" });
// prettier-ignore
createPageRoute({ path: "memoization-cache", element: <MemoizationCache />, title: "MemoizationCache" });
// prettier-ignore
createPageRoute({ path: "callback", element: <Callback />, title: "Callback" });
// prettier-ignore
createPageRoute({ path: "memo", element: <ComponentMemo />, title: "Memo" });
// prettier-ignore
createPageRoute({ path: "use-memo", element: <ComponentUseMemo />, title: "UseMemo" });
// prettier-ignore
createPageRoute({ path: "hoc", element: <HighOrderComponent />, title: "Hoc" });
export default pagesData;
