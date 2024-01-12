// STYLE
import styles from "./main.module.css";

// IMAGES
import crape_ice from "../../assets/vapes/crape_ice.webp";
import perch_ice from "../../assets/vapes/perch_ice.webp";
import apple_mango from "../../assets/vapes/apple_mango.webp";
import logo from "../../assets/lamborghini_text_logo_white.png";

export default function Hero() {
  return (
    <>
      <section id="home" className={styles.container}>
        <div className={styles.container_image}>
          <img alt="image" src={logo} className={`${styles.image}`} />
          <a href="#about" className={styles.btn}>
            MORE
          </a>
        </div>
        <p className={styles.desc}>
          Un vape fácil de usar con un diseño elegante. Disfruta de sabores
          intensos en cada bocanada. Tu experiencia de vapeo, simplificada.
        </p>
        <img alt="image" src={crape_ice} className={`${styles.vape01}`} />
        <img alt="image" src={perch_ice} className={`${styles.vape02}`} />
        <img alt="image" src={apple_mango} className={`${styles.vape03}`} />
      </section>
    </>
  );
}
