import { Text, View } from "react-native";
import { Button, TextInput } from "@repo/ui-components";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button onClick={() => console.log("Pressed!")} text="Boop" />
      <TextInput placeholder="haosdin" />
    </View>
  );
}
