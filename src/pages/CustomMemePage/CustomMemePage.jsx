import { useEffect, useState } from "react";
import styles from "./CustomMemePage.module.css";

const CustomMemePage = () => {
  const [imgSrc, setImgSrc] = useState(null);

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
    // window.URL.createObjectURL(files[0]);
  }
  return (
    <div className={styles.pageWrp}>
      <div className={styles.fileUploadWrp}>
        <input
          type="file"
          id="fileElem"
          accept="image/*"
          // style={{ display: "none" }}

          onChange={handleFiles}
        />
        <a href="#" id="fileSelect">
          Select some files
        </a>
      </div>

      <div id="fileList">
        {imgSrc ? <img src={imgSrc} alt="" /> : <p>No files selected!</p>}
      </div>
    </div>
  );
};

export default CustomMemePage;
