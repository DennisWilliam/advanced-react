import { useState } from "react";
import "./style.css";
import { useRender } from "../../hooks/useRender";
import { useHeavyInternalComponent } from "../../hooks/useHeavyInternalComponent";

export type Layout = {
  useHeavyComponent?: boolean;
  children?: JSX.Element;
};

export type Nav = {
  open: boolean;
  toggle: () => void;
};

const Layout = ({ useHeavyComponent = false, children }: Layout) => {
  const { RenderComponent } = useRender("Layout");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleCLick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="layout-container">
      <Nav open={isOpen} toggle={handleCLick} />
      <Main useHeavyComponent={useHeavyComponent} navOpen={isOpen}>
        <>
          {children}
          <RenderComponent />
        </>
      </Main>
    </div>
  );
};

const Nav = ({ open, toggle }: Nav) => {
  const { RenderComponent } = useRender("Nav");

  return (
    <nav className={`nav ${open ? "open" : ""}`}>
      <button onClick={toggle}>{"--->"}</button>
      {open && <RenderComponent />}
    </nav>
  );
};

type MainProps = {
  useHeavyComponent?: boolean;
  navOpen: boolean;
  children?: JSX.Element;
};
const Main = ({ useHeavyComponent, navOpen, children }: MainProps) => {
  const { RenderComponent } = useRender("Main");
  const { HeavyComponent } = useHeavyInternalComponent();
  //  showRender("Main");

  return (
    <main className="main">
      {navOpen && <span>{navOpen}</span>}
      <RenderComponent />
      {useHeavyComponent && HeavyComponent}
      <br />
      {children}
    </main>
  );
};

export default Layout;
