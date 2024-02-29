/* eslint-disable react/prop-types */
import styles from "./ColorBox.module.css";

const ColorBox = ({ colors, handleColorText }) => {
  return (
    <div className={styles.colorBoxWrp}>
      <p className={styles.colorTitle}>Choose color for the text</p>
      <div className={styles.colorBtnWrp} onClick={handleColorText}>
        {colors.map((box) => (
          <div
            key={box}
            className={styles.colorBtn}
            style={{ backgroundColor: box }}
            id={box}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorBox;
