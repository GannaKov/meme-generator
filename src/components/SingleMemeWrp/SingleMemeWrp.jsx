/* eslint-disable react/prop-types */
import styles from "./SingleMemeWrp.module.css";

const SingleMemeWrp = ({ src, alt, textColor, textTop, textBottom }) => {
  return (
    <div className={styles.imgWrp}>
      <img className={styles.memeImg} src={src} alt={alt} />
      <p className={styles.memeTextTop} style={{ color: textColor }}>
        {textTop}
      </p>
      <p className={styles.memeTextBottom} style={{ color: textColor }}>
        {textBottom}
      </p>
    </div>
  );
};

export default SingleMemeWrp;
