"use client";

import { Button } from "@repo/ui-components";

import styles from "../styles/index.module.css";
import NoSSR from "../NoSSR";

export default function Web() {
  return (
    <div className={styles.container}>
      <h1>Web</h1>
      <NoSSR>
        <Button onClick={() => console.log("Pressed!")} text="Boop" />
      </NoSSR>
    </div>
  );
}
