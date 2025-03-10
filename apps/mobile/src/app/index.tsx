import { getResponsive } from '@repo/data-utils';
import { Button, Text, TextInput, View } from '@repo/ui-components';

const noop = () => false;

export const Index = () => {
  return (
    <View
      gap={getResponsive(8)}
      style={{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <Text
        title="Edit app/index.tsx to edit this screen"
        variant="body2"
      />
      <Button
        onClick={noop}
        text="Boop"
      />
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
  );
};

export default Index;
