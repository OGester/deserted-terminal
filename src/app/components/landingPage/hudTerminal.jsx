import styles from "src/styles/components/hudTerminal.module.scss";

export default function HUDFrame({ children }) {
  return (
    <div style={{ position: "relative", width: "100%", height: "auto" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 522.99 303.95"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      >
        <path
          d="M493.12,125.56l29.86-2.44v-47.55l-11.29-2.42v-3.73l11.29-1.78V0H211.54l-26.89,37.12H53.96L.07,91.02v34.11l31.9,2.02v82.65L.07,212.27v91.68h114.22l6-39.28h166.71l5.77,39.28h102.54l3.67-10.91h7.64l3.37,10.91h57.39l55.61-56.33v-35.14l-29.86-2.43v-84.49Z"
          fill="#27aae1"
        />
        {/* Add more <path> elements from your SVG here if needed */}
      </svg>

      <div className={styles.hudContent}>{children}</div>
    </div>
  );
}
