"use client";

import { Button, Text, TextInput, View } from "@repo/ui-components";
import { NoSSR } from "../../NoSSR";
import styles from "../styles/index.module.css";

const noop = () => false;

const Web = () => {
  return (
    <div className={styles.container}>
      <NoSSR>
        <View alignItems="center">
          <Text title="Web" variant="header1" />
          <Button onClick={noop} text="Boop" />
          <Text title="Hello, world!" variant="body2" />
          <TextInput
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            defaultValue=""
            editable
            keyboardType="default"
            onChangeText={noop}
            onSubmitEditing={noop}
            placeholder="Type something..."
            returnKeyType="done"
            secureTextEntry={false}
            submitBehavior="submit"
            textContentType="none"
          />
        </View>
      </NoSSR>
    </div>
  );
};

export default Web;
