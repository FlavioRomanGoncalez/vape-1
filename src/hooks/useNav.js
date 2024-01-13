// REACT / HOOKS
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useNav() {
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(false);
  const [list, setList] = useState(false);
  const [change, setChange] = useState(false);
  const [prevOffset, setPrevOffset] = useState(0);

  const location = useLocation();

  useEffect(() => {
    // if (location.pathname === "/menu") {
    //   setList(true);
    // }
    // if (location.pathname === "/authentication") {
    //   setList(true);
    // }
    // if (location.pathname === "/code") {
    //   setList(true);
    // }
    // if (location.pathname === "/client") {
    //   setList(true);
    // }

    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setChange(true);
      } else {
        setChange(false);
      }
      if (offset > prevOffset) {
        setHide(false);
      } else {
        setHide(true);
      }
      setPrevOffset(offset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [change, prevOffset]);

  return {
    show,
    setShow,
    change,
    setChange,
    setHide,
    hide,
    list,
  };
}
