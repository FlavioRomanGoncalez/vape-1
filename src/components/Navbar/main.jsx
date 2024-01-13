// STYLE
import styles from "./main.module.css";

// LOGO
import logo from "../../assets/logo.webp";

// ICON
import { FaBars } from "react-icons/fa";
import { IoMdApps } from "react-icons/io";

// CUSTOM HOOK
import { useNav } from "../../hooks/useNav";

// REACT / HOOKS
import { useEffect, useState } from "react";

// CONSTANT VALUES
import { NAV_OPTIONS } from "../../constant/main";

// REACT ROUTER DOM
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const [pathname, setPathname] = useState();
  const { show, setShow, hide, setHide } = useNav();

  useEffect(() => {
    setHide(true);
    setPathname(location.pathname);
  }, []);

  return (
    <nav
      className={`${styles.container_nav}`}
      style={{
        opacity: `${hide ? 1 : 0.3}`,
        transition: "all 0.2 ease",
        backgroundColor: `${
          pathname === "/menu" || pathname === "/authentication"
            ? "#000"
            : "transparent"
        }`,
      }}
    >
      {/* LOGO */}
      <Link to="/" className={styles.container_logo}>
        <img src={logo} alt="logo" className={styles.logo} />
      </Link>

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
            <a
              key={value?.id}
              href={value?.href}
              className={styles.nav_list}
              onClick={() => setShow(false)}
            >
              {value?.text}
            </a>
          );
        })}
        {/* AUTHENTICATION */}
        <div className={styles.options}>
          <Link className={styles.authentication} to={"/authentication"}>
            Authentication
          </Link>
          <Link to={"/menu"}>
            <IoMdApps className={styles.menu} />
          </Link>
        </div>
      </ul>

      {/* RESPONSIVE OPTIONS */}
      <div className={styles.nav_option}>
        <img src={"../../assets/img01.webp"} alt="" />
        <FaBars
          size={28}
          color={show ? "#fff" : "#fff"}
          onClick={() => setShow(!show)}
        />
      </div>
    </nav>
  );
}
