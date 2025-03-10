import {
  type GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export type ButtonProperties = {
  readonly onClick?: (event: GestureResponderEvent) => void;
  readonly text: string;
};

export const Button = ({ onClick, text }: ButtonProperties) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={styles.button}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2f80ed',
    borderRadius: 10,
    fontSize: 15,
    maxWidth: 200,
    paddingBottom: 14,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 14,
    textAlign: 'center',
  },
  text: {
    color: 'white',
  },
});
