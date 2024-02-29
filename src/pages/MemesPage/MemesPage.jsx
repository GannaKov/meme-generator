import { useEffect, useState } from "react";
import { getAllMemes } from "../../services/requests";
import styles from "./MemesPage.module.css";
import ColorBox from "../../components/ColorBox/ColorBox";
import Form from "../../components/Form/Form";
import MemeWrp from "../../components/MemeWrp/MemeWrp";

const MemesPage = () => {
  const [memes, setMemes] = useState([]);
  const [textTop, setTextTop] = useState("");
  const [textBottom, setTextBottom] = useState("");
  const [number, setNumber] = useState(0);
  const [textColor, setTextColor] = useState("black");
  // const [imgSrc, setImgSrc] = useState(null);
  const colors = ["red", "green", "black", "white"];

  useEffect(() => {
    getAllMemes()
      .then((res) => setMemes(res.data.memes))
      .catch((error) => console.log(error.message));
  }, []);

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log("forms", e);
  // }
  function handleNextBtnClick() {
    if (number < memes.length - 1) {
      setNumber((prev) => prev + 1);
      setTextTop("");
      setTextBottom("");
    }
  }
  function handlePrevBtnClick() {
    if (number != 0) {
      setNumber((prev) => prev - 1);
      setTextTop("");
      setTextBottom("");
    }
  }
  function handleColorText(e) {
    if (e.target.id) {
      setTextColor(e.target.id);
      console.log(e.target.id);
    }
  }

  return (
    <div className={styles.pageWrp}>
      {/* <div className={styles.colorBoxWrp}>
        <p className={styles.colorTitle}>Choose color for text</p>
        <div className={styles.colorBtnWrp} onClick={handleColorText}>
          {colors.map((box) => (
            <div
              key={box}
              className={styles.colorBtn}
              style={{ backgroundColor: box }}
              //
              id={box}
            ></div>
          ))}
        </div>
      </div> */}
      <ColorBox colors={colors} handleColorText={handleColorText} />
      {/* <form className={styles.memeForm}>
        <label htmlFor="textTop" className={styles.memeLabel}>
          Text Top
        </label>
        <input
          className={styles.memeInput}
          type="text"
          name="textTop"
          value={textTop}
          onChange={(e) => setTextTop(e.target.value)}
        />
      </form> */}
      <Form text={textTop} setText={setTextTop} forLabel="Text Top"></Form>

      {/* {memes.length > 0 && (
        <div className={styles.memeCard}>
          <p className={styles.memeTitle}>{memes[number].name}</p>
          <div className={styles.imgWrp}>
            <img
              className={styles.memeImg}
              src={memes[number].url}
              alt={memes[number].name}
            />
            <p className={styles.memeTextTop} style={{ color: textColor }}>
              {textTop}
            </p>
            <p className={styles.memeTextBottom} style={{ color: textColor }}>
              {textBottom}
            </p>
          </div>
        </div>
      )} */}

      {memes.length > 0 && (
        <div className={styles.memeCard}>
          <p className={styles.memeTitle}>{memes[number].name}</p>
          <MemeWrp
            src={memes[number].url}
            alt={memes[number].name}
            textColor={textColor}
            textTop={textTop}
            textBottom={textBottom}
          />
        </div>
      )}
      {/* <form className={styles.memeForm}>
        <label htmlFor="textBotton" className={styles.memeLabel}>
          Text Bottom
        </label>
        <input
          className={styles.memeInput}
          type="text"
          name="textBottom"
          value={textBottom}
          onChange={(e) => setTextBottom(e.target.value)}
        />
      </form> */}
      <Form
        text={textBottom}
        setText={setTextBottom}
        forLabel="Text Bottom"
      ></Form>

      <div className={styles.memeBtnWrp}>
        <button
          type="button"
          onClick={handlePrevBtnClick}
          className={styles.memeBtn}
          disabled={number === 0}
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNextBtnClick}
          className={styles.memeBtn}
          disabled={number === memes.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MemesPage;
