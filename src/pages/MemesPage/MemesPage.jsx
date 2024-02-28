import { useEffect, useState } from "react";
import { getAllMemes } from "../../services/requests";
import styles from "./MemesPage.module.css";

const MemesPage = () => {
  const [memes, setMemes] = useState(null);
  const [textTop, setTextTop] = useState("");
  const [textBottom, setTextBottom] = useState("");
  const [number, setNumber] = useState(0);

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
    setNumber((prev) => prev + 1);
  }
  function handlePrevBtnClick() {
    setNumber((prev) => prev - 1);
  }
  return (
    <div>
      {memes && (
        <div className={styles.memeCard}>
          <p>{memes[number].name}</p>
          <img
            className={styles.memeImg}
            src={memes[number].url}
            alt={memes[number].name}
          />
          <p className={styles.memeTextTop}>{textTop}</p>
          <p className={styles.memeTextBottom}>{textBottom}</p>
        </div>
      )}
      <form>
        <label htmlFor="textTop">Text Top</label>
        <input
          type="text"
          name="textTop"
          value={textTop}
          onChange={(e) => setTextTop(e.target.value)}
        />
        <label htmlFor="textBotton">Text Bottom</label>
        <input
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
      <button type="button" onClick={handleNextBtnClick}>
        Next
      </button>
      <button type="button" onClick={handlePrevBtnClick}>
        Previous
      </button>
    </div>
  );
};

export default MemesPage;
