/* eslint-disable react/prop-types */
import styles from "./Form.module.css";

const Form = ({ text, setText, forLabel }) => {
  return (
    <form className={styles.memeForm}>
      <label htmlFor="textTop" className={styles.memeLabel}>
        {forLabel}
      </label>
      <input
        className={styles.memeInput}
        type="text"
        name="textTop"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default Form;
