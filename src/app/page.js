import styles from "src/styles/landingPage/baseLayout.module.scss";

//import LoginTerminal from "./components/landingPage/Terminal";
import TerminalSvg from "./components/elements/test-frame";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.controlBoard}>
        <TerminalSvg
          className={styles.svg}
          fill="#00ffff"
          stroke="#878787"
          strokeWidth={4}
        />
      </div>
    </div>
  );
}
