import { useEffect, useState } from "react";
import { getAllMemes } from "../../services/requests";
import styles from "./MemesPage.module.css";

const MemesPage = () => {
  const [memes, setMemes] = useState(null);
  const [textTop, setTextTop] = useState("");
  const [textBottom, setTextBottom] = useState("");

  useEffect(() => {
    getAllMemes()
      .then((res) => setMemes(res.data.memes))
      .catch((error) => console.log(error.message));
  }, []);

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log("forms", e);
  // }

  return (
    <div>
      {memes && (
        <div className={styles.memeCard}>
          <p>{memes[0].name}</p>
          <img
            className={styles.memeImg}
            src={memes[0].url}
            alt={memes[0].name}
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
    </div>
  );
};

export default MemesPage;
