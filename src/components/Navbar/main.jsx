// STYLE
import styles from "./main.module.css";

// ICON
import { FaBars } from "react-icons/fa";

// REACT ROUTER DOM
import { Link, useLocation } from "react-router-dom";

// LOGO
import logo from "../../assets/logo.webp";

// CUSTOM HOOK
import { useNav } from "../../hooks/useNav";

// CONSTANT VALUES
import { NAV_OPTIONS } from "../../constant/main";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [pathname, setPathname] = useState();
  const { show, setShow, change } = useNav();

  useEffect(() => {
    setPathname(location.pathname);
  }, []);

  return (
    <>
      <nav
        className={`${styles.container_nav}`}
        style={{
          // backgroundColor: `${change ? "#25252550" : "transparent"}`,
          backgroundColor: `${
            pathname === "/authentication" ? "#000" : "#25252550"
          }`,
        }}
      >
        {/* LOGO */}
        <a href="#home" className={styles.container_logo}>
          <img src={logo} alt="logo" className={styles.logo} />
        </a>

        {/* OPTIONS */}
        <ul
          className={styles.nav_lists}
          style={{
            top: `${show ? "0%" : "-200%"}`,
            transition: "all 1s ease",
          }}
        >
          {NAV_OPTIONS.map((value) => {
            return (
              <Link
                to={"/"}
                key={value?.id}
                // href={value?.href}
                className={styles.nav_list}
                onClick={() => setShow(false)}
              >
                {value?.text}
              </Link>
            );
          })}
        </ul>

        {/* AUTHENTICATION */}
        <Link className={styles.contact} to={"/authentication"}>
          Authentication
        </Link>

        {/* RESPONSIVE OPTIONS */}
        <div className={styles.nav_option}>
          <img src={"../../assets/img01.webp"} alt="" />
          <FaBars
            size={28}
            color={show ? "#000" : "#fff"}
            onClick={() => setShow(!show)}
          />
        </div>
      </nav>
    </>
  );
}
