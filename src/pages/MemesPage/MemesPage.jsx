import { useEffect, useState } from "react";
import { useRef } from "react";
import domtoimage from "dom-to-image";
import { getAllMemes } from "../../services/requests";
import styles from "./MemesPage.module.css";
import ColorBox from "../../components/ColorBox/ColorBox";
import Form from "../../components/Form/Form";
import MemeWrp from "../../components/MemeWrp/MemeWrp";

const MemesPage = () => {
  const memeContainerRef = useRef(null);
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

  function handleDownloadClick() {
    console.log("memeContainerRef.current", memeContainerRef.current);
    domtoimage
      .toJpeg(memeContainerRef.current, { quality: 0.95 })
      .then(function (dataUrl) {
        const link = document.createElement("a");
        link.download = "meme.jpeg";
        link.href = dataUrl;
        link.click();
      });
  }

  return (
    <div className={styles.pageWrp}>
      <ColorBox colors={colors} handleColorText={handleColorText} />

      <Form text={textTop} setText={setTextTop} forLabel="Text Top"></Form>

      {memes.length > 0 && (
        <div className={styles.memeCard}>
          <p className={styles.memeTitle}>{memes[number].name}</p>

          <div ref={memeContainerRef}>
            <MemeWrp
              src={memes[number].url}
              alt={memes[number].name}
              textColor={textColor}
              textTop={textTop}
              textBottom={textBottom}
            />
          </div>
        </div>
      )}
      {memes.length > 0 && (
        <button
          type="button"
          className={styles.downloadBtn}
          onClick={handleDownloadClick}
        >
          Download
        </button>
      )}

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
