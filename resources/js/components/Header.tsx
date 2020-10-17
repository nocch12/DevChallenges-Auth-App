import React, { useState, useCallback, useEffect, useRef, createRef } from "react";
import NavItems from "./NavItems";

const Header: React.FC = () => {
  const [navShow, setNavShow] = useState(false);

  const ref = createRef<HTMLDivElement>();
  const documentClickHandler: any = useRef();

  const outsideClickHandler = (e: MouseEvent) => {
    if (ref.current && ref.current.contains(e.target as Node)) return;
    document.removeEventListener("click", documentClickHandler.current);
    setNavShow(false);
  };

  useEffect(() => {
    documentClickHandler.current = outsideClickHandler;

    return () => {
      document.removeEventListener("click", documentClickHandler.current);
    }
  }, []);

  const toggleNavHandler: any = useCallback(
    (e: { target: Node }) => {
      if (!navShow) {
        document.addEventListener("click", documentClickHandler.current);
        setNavShow(true);
      }
    },
    [navShow]
  );

  let navItems = null;
  if (navShow) {
    navItems = (
      <NavItems ref={ref} isShow={navShow} clicked={toggleNavHandler} />
    );
  }

  return (
    <header className="fixed w-full top-0 left-0 bg-transparent px-3 md:px-16 bg-mygray-300">
      <div className="relative flex items-center justify-between h-12 md:h-16">
        <div className="">
          <h1>devchallenges</h1>
        </div>
        <div className="" onClick={toggleNavHandler}>
          Image
        </div>
        {navItems}
      </div>
    </header>
  );
};

export default Header;
