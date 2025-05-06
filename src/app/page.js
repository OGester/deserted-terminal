import styles from "src/styles/landingPage/baseLayout.module.scss";
import LoginTerminal from "./components/landingPage/Terminal";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.controlBoard}>
        <LoginTerminal />
      </div>
    </div>
  );
}
