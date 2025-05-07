import HUDFrame from "src/app/components/landingPage/hudTerminal";
import styles from "src/styles/components/terminal.module.scss";

export default function LoginTerminal() {
  return (
    <HUDFrame>
      <div className={styles.typingDemo}>
        {"[BOOT SEQUENCE INITIALIZED...]"}
      </div>
      <div className={styles.typingDemoTwo}>
        {">> SIGNAL ACQUIRED: CHECKING DEVICE. >"}
      </div>
      <div className={styles.typingDemoThree}>
        {"// SYSTEM FRAGILE | ACCESSING LOGS..."}
      </div>
    </HUDFrame>
  );
}

/* 
<div className={styles.rules}>
<div className={styles.typingDemo}>
  {"[BOOT SEQUENCE INITIALIZED...]"}
</div>
<div className={styles.typingDemoTwo}>
  {">> SIGNAL ACQUIRED: CHECKING DEVICE. >"}
</div>
<div className={styles.typingDemoThree}>
  {"// SYSTEM FRAGILE | ACCESSING LOGS..."}
</div>
</div> */
