import { RouterType } from "../types/router.types";
import RightCmpKey from "./rightCmpKey";
import WrongCmpKey from "./wrongCmpKey";

const pagesData: RouterType[] = [
  {
    path: "wrong-cmp-key",
    element: <WrongCmpKey />,
    title: "WrongCmpKey",
  },
  {
    path: "right-cmp-key",
    element: <RightCmpKey />,
    title: "WrongCmpKey",
  },
  {
    path: "",
    element: <div>Home</div>,
    title: "Home",
  },
];

export default pagesData;
