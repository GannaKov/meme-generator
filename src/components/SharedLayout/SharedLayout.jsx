import { NavLink, Outlet } from "react-router-dom";
import styles from "./SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.headerWrp}>
        <p className={styles.headerTitle}>
          Love Memes? You are in the right Place Love Meme? 🤩{" "}
        </p>
        <nav>
          <ul className={styles.navList}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.active} ${styles.headerNavLink}`
                    : `${styles.headerNavLink}`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.active} ${styles.headerNavLink}`
                    : `${styles.headerNavLink}`
                }
                to="/memes"
              >
                Memes
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.active} ${styles.headerNavLink}`
                    : `${styles.headerNavLink}`
                }
                to="/custom"
              >
                Custom
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
