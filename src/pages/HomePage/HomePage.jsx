import { Link } from "react-router-dom";
import loveMemes from "../../assets/images/cheese.jpg";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div
      className={styles.homeWrp}>
      <nav className={styles.navWrp}>
        <p className={styles.navTextTop}>
          Would you like to use our memes images?&nbsp;&nbsp;
          <Link to="/memes" className={styles.navLink}>
            click here!
          </Link>
        </p>
        <p className={styles.navTextTop}>
          Would you like to use your custom made meme images?&nbsp;&nbsp;
          <Link to="/custom" className={styles.navLink}>
            click here!
          </Link>
        </p>
        <img src={loveMemes} alt="Love memes" className={styles.navImg} />
      </nav>
    </div>
  );
};

export default HomePage;
