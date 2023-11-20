import { useState } from "react";

export type Layout = {
  children?: JSX.Element;
};

const Layout = ({ children }: Layout) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        background: "red",
        width: "100%",
      }}
    >
      Layout
      {children}
    </div>
  );
};

export default Layout;
