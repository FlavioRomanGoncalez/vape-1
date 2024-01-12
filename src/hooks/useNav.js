// REACT / HOOKS
import { useEffect, useState } from "react";

export function useNav() {
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(false);
  const [change, setChange] = useState(false);
  const [prevOffset, setPrevOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setChange(true);
      } else {
        setChange(false);
      }
      if (offset > prevOffset) {
        setHide(false);
        console.log("1");
      } else {
        setHide(true);
        console.log("0");
      }
      setPrevOffset(offset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [change, prevOffset]);

  return { show, setShow, change, setChange, setHide, hide };
}
