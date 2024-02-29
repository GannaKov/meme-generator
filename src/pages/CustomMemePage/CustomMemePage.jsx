import { useEffect, useState } from "react";
import styles from "./CustomMemePage.module.css";

import ColorBox from "../../components/ColorBox/ColorBox";
import Form from "../../components/Form/Form";
import MemeWrp from "../../components/MemeWrp/MemeWrp";

const CustomMemePage = () => {
  const [imgSrc, setImgSrc] = useState(null);
  const [textTop, setTextTop] = useState("");
  const [textBottom, setTextBottom] = useState("");
  const [textColor, setTextColor] = useState("black");
  // const [imgSrc, setImgSrc] = useState(null);
  const colors = ["red", "green", "black", "white"];

  useEffect(() => {
    return () => {
      if (imgSrc) {
        window.URL.revokeObjectURL(imgSrc);
      }
    };
  }, [imgSrc]);

  function handleFiles(e) {
    console.log(window.URL.createObjectURL(e.target.files[0]));
    setImgSrc(window.URL.createObjectURL(e.target.files[0]));
  }

  function handleColorText(e) {
    if (e.target.id) {
      setTextColor(e.target.id);
      console.log(e.target.id);
    }
  }
  return (
    <div className={styles.pageWrp}>
      <div>
        {/* className={styles.fileUploadWrp} */}
        <input
          type="file"
          id="fileElem"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFiles}
        />
        {/* <a href="#" id="fileSelect">
          Select some files
        </a> */}
        <label htmlFor="fileElem" className={styles.fileUploadLabel}>
          Select some files
        </label>
      </div>

      {imgSrc ? (
        <>
          <ColorBox colors={colors} handleColorText={handleColorText} />
          <Form text={textTop} setText={setTextTop} forLabel="Text Top"></Form>
          <div className={styles.memeCard}>
            <MemeWrp
              src={imgSrc}
              alt="My meme"
              textColor={textColor}
              textTop={textTop}
              textBottom={textBottom}
            />
          </div>

          <Form
            text={textBottom}
            setText={setTextBottom}
            forLabel="Text Bottom"
          ></Form>
        </>
      ) : (
        <p>No files selected!</p>
      )}
    </div>
  );
};

export default CustomMemePage;
