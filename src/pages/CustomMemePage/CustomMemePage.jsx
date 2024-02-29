import { useEffect, useState } from "react";
import { useRef } from "react";
import domtoimage from "dom-to-image";
import styles from "./CustomMemePage.module.css";

import ColorBox from "../../components/ColorBox/ColorBox";
import Form from "../../components/Form/Form";
import MemeWrp from "../../components/MemeWrp/MemeWrp";

const CustomMemePage = () => {
  const memeContainerRef = useRef(null);
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
    setTextTop("");
    setTextBottom("");
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
            <div ref={memeContainerRef}>
              <MemeWrp
                src={imgSrc}
                alt="My meme"
                textColor={textColor}
                textTop={textTop}
                textBottom={textBottom}
              />
            </div>
          </div>

          <button
            type="button"
            className={styles.downloadBtn}
            onClick={handleDownloadClick}
          >
            Download
          </button>

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
