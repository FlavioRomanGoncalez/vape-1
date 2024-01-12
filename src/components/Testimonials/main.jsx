// STYLE
import styles from "./main.module.css";

// SLIDE
import { Slide } from "react-slideshow-image";

// CONTANSTS VALUES
import { TESTIMONIALS } from "../../constant/main";

import "react-slideshow-image/dist/styles.css";

export default function Testimonials() {
  return (
    <>
      <main id="testimonials" className={styles.container}>
        {/* <h1 className={styles.title}>What a customer say.</h1> */}
        <Slide>
          {TESTIMONIALS.map((fadeImage, index) => (
            <div key={fadeImage.caption} className={styles.container_slide}>
              <div key={index} className={styles.slide}>
                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  placeat in laborum ipsam totam id aut sunt porro quo maxime.
                </p>
                <div className={styles.test}>
                  <img
                    alt="image"
                    src={fadeImage.url}
                    className={styles.image}
                  />
                  <h2 className={styles.test_text}>Name</h2>
                </div>
              </div>
              <div key={index} className={styles.slide}>
                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  placeat in laborum ipsam totam id aut sunt porro quo maxime.
                </p>
                <div className={styles.test}>
                  <img
                    alt="image"
                    src={fadeImage.url}
                    className={styles.image}
                  />
                  <h2 className={styles.test_text}>Name</h2>
                </div>
              </div>
              <div key={index} className={styles.slide}>
                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  placeat in laborum ipsam totam id aut sunt porro quo maxime.
                </p>
                <div className={styles.test}>
                  <img
                    alt="image"
                    src={fadeImage.url}
                    className={styles.image}
                  />
                  <h2 className={styles.test_text}>Name</h2>
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </main>
    </>
  );
}
