import notFound from "../../assets/images/no_found.jpg";
import { useRouteError } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className={styles.pageWrp}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <img src={notFound} alt="Page not found" className={styles.notFoundImg} />
    </div>
  );
};

export default NotFound;
