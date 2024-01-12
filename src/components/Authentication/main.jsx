// STYLES
import styles from "./main.module.css";

// MATERIAL UI
import { Button, TextField } from "@mui/material";

// IMAGE
import vape01 from "../../assets/vapes/apple_mango.webp";
import vape02 from "../../assets/vapes/blueberry_ice.webp";
import vape03 from "../../assets/vapes/watermelon_ice.webp";
import logoWhite from "../../assets/lamborghini_text_logo_white.png";

export default function Authentication() {
  return (
    <section id="authentication" className={styles.container}>
      <div className={styles.flex}>
        {/* ITEM 1 */}
        <div className={styles.item}>
          <form action="" className={styles.form}>
            <h1 className={styles.title}>AUTHENTICATION</h1>
            <h3 className={styles.subtitle}>
              CHECK TO SEE IF YOU HAVE AN AUTHENTIC BALI VAPE
            </h3>
            <TextField
              sx={{ width: "100%" }}
              variant="standard"
              label="ENTER YOUR EMAIL"
            />
            <TextField
              sx={{ width: "100%" }}
              label="ENTER YOUR PRODUCT SKU CODE"
              variant="standard"
            />
            <Button type="button" sx={{ width: "100%" }} variant="outlined">
              CHECK
            </Button>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium eos architecto sint omnis soluta nam. Corporis porro
              possimus repudiandae ad!
            </p>
          </form>
        </div>

        {/* ITEM 2 */}
        <div className={styles.item}>
          <img src={vape01} alt="logo" className={styles.vape01} />
          <img src={vape02} alt="logo" className={styles.vape02} />
          <img src={vape03} alt="logo" className={styles.vape03} />
          <img src={logoWhite} alt="logo" className={styles.image} />
        </div>
      </div>
    </section>
  );
}
