import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react-native';
import { Text } from '../Text';

describe('title', () => {
  it('renders correctly', () => {
    render(
      <Text
        emphasis="heavy"
        title="hello"
        variant="body1"
      />,
    );

    expect(screen.getByText('hello')).toBeVisible();
  });
});
