import React from "react";
import {
  RendererProvider,
  createDOMRenderer,
  makeStyles,
} from "@griffel/react";
import { mediaQueryMobileFirst } from "./mediaQuery";
import { compareMediaQueries } from "./mediaQuery";

const renderer = createDOMRenderer(document, {
  compareMediaQueries: compareMediaQueries,
});

const useStyles = makeStyles({
  root: {
    fontSize: "1.5rem",
    backgroundColor: "#333",
    height: "100vh",
    width: "100vw",
    color: "#efefef",
  },
  main: {
    maxWidth: "calc(100% - 3.5rem)",
    padding: "1.5rem",
    display: "grid",

    // mobile
    gridTemplateColumns: "repeat(1, auto)",
    gap: "1rem",

    [mediaQueryMobileFirst.md]: {
      // medium
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "2rem",
    },
    [mediaQueryMobileFirst.xl]: {
      // xl
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "1rem",
    },
  },
  card: {
    border: "1px solid #efefef",
    padding: "1rem",
    fontSize: "2.5rem",
    // mobile
    color: "#000000",

    [mediaQueryMobileFirst.xs]: {
      // small
      backgroundColor: "lightyellow",
    },
    [mediaQueryMobileFirst.s]: {
      // med
      backgroundColor: "lightpink",
    },
    [mediaQueryMobileFirst.md]: {
      // large
      backgroundColor: "aqua",
    },
    [mediaQueryMobileFirst.l]: {
      // large
      backgroundColor: "purple",
    },
    [mediaQueryMobileFirst.xl]: {
      // xl
      backgroundColor: "powderblue",
    },
  },
});

export const App: React.FunctionComponent = () => {
  const styles = useStyles();
  return (
    <RendererProvider renderer={renderer}>
      <div className={styles.root}>
        <div className={styles.main}>
          <div className={styles.card}>card 1</div>
          <div className={styles.card}>card 2</div>
          <div className={styles.card}>card 3</div>
          <div className={styles.card}>card 4</div>
        </div>
      </div>
    </RendererProvider>
  );
};
