import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import * as stylex from "@stylexjs/stylex";
// import "./App.css";

const NO_REDUCED_MOTION_PREFERENCE =
  "@media (prefers-reduced-motion: no-preference)";

// Same rules as App.css, written in StyleX
const logoSpin = stylex.keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

const styles = stylex.create({
  logo: {
    height: "6em",
    padding: "1.5em",
    willChange: "filter",
    transition: "filter 300ms",
    filter: {
      ":hover": "drop-shadow(0 0 2em #646cffaa)",
    },
  },
  react: {
    filter: {
      ":hover": "drop-shadow(0 0 2em #61dafbaa)",
    },
    [NO_REDUCED_MOTION_PREFERENCE]: {
      animationName: logoSpin,
      animationDuration: "20s",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
    },
  },
  card: {
    padding: "2em",
  },
  readTheDocs: {
    color: "#888",
  },
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img {...stylex.props(styles.logo)} src={viteLogo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            {...stylex.props(styles.logo, styles.react)}
            src={reactLogo}
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div {...stylex.props(styles.card)}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p {...stylex.props(styles.readTheDocs)}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
