"use client";

import { Button, Text, View, TextInput } from "@repo/ui-components";
import styles from "../styles/index.module.css";
import { NoSSR } from "../NoSSR";

export default function Web() {
  return (
    <div className={styles.container}>
      <h1>Web</h1>
      <NoSSR>
        <View>
          <Button onClick={() => console.log("Pressed!")} text="Boop" />
          <Text title="Hello, world!" variant="body2" />
          <TextInput
            placeholder="Type something..."
            onChangeText={(v) => console.log(v)}
          />
        </View>
      </NoSSR>
    </div>
  );
}
