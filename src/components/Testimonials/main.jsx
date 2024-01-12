// STYLE
import styles from "./main.module.css";

// IMAGES
import img01 from "../../assets/img01.webp";
// import img02 from "../../assets/img02.webp";
// import img03 from "../../assets/img03.webp";

export default function Testimonials() {
  return (
    <main id="testimonials" className={styles.container}>
      <div className={styles.content}>
        <img src={img01} alt="image" className={styles.image} />
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          dolorum ea adipisci esse quibusdam quas ab cumque placeat
        </p>
      </div>
    </main>
  );
}
