import { useEffect, useState } from "react";
import { getAllMemes } from "../../services/requests";
import styles from "./MemesPage.module.css";

const MemesPage = () => {
  const [memes, setMemes] = useState([]);
  const [textTop, setTextTop] = useState("");
  const [textBottom, setTextBottom] = useState("");
  const [number, setNumber] = useState(0);
  const [textColor, setTextColor] = useState("black");
  const [imgSrc, setImgSrc] = useState(null);
  const colors = ["red", "green", "black", "white"];

  useEffect(() => {
    getAllMemes()
      .then((res) => setMemes(res.data.memes))
      .catch((error) => console.log(error.message));
  }, []);
  useEffect(() => {
    return () => {
      if (imgSrc) {
        window.URL.revokeObjectURL(imgSrc);
      }
    };
  }, [imgSrc]);

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
  function handleFiles(e) {
    console.log(window.URL.createObjectURL(e.target.files[0]));
    setImgSrc(window.URL.createObjectURL(e.target.files[0]));
    // window.URL.createObjectURL(files[0]);
  }
  return (
    <div className={styles.pageWrp}>
      <div className={styles.colorBoxWrp}>
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

          {/* <div className={styles.colorBtn}></div>
        <div className={styles.colorBtn}></div> */}
        </div>
      </div>
      <form className={styles.memeForm}>
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
      </form>
      {memes.length > 0 && (
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
      )}
      <form className={styles.memeForm}>
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
      </form>
      {/* <ul>
        {memes &&
          memes.map((meme) => (
            <li key={meme.id}>
              <p>{meme.name}</p>
              <img style={{ width: 400 }} src={meme.url} alt={meme.name} />
            </li>
          ))}
      </ul> */}
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
      <input
        type="file"
        id="fileElem"
        accept="image/*"
        // style={{ display: "none" }}
        // onChange={handleFiles(this.files)}
        onChange={handleFiles}
      />
      <a href="#" id="fileSelect">
        Select some files
      </a>
      <div id="fileList">
        <p>No files selected!</p>
        {imgSrc && <img src={imgSrc} alt="" />}
      </div>
    </div>
  );
};

export default MemesPage;
