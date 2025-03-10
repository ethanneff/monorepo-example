import { getResponsive } from '@repo/data-utils';
import { Text, View } from '@repo/ui-components';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from 'react';

export const Welcome = () => {
  return (
    <View
      gap={getResponsive(20)}
      padding={getResponsive(20)}
    >
      <Text
        title="Welcome to the app!"
        variant="header3"
      />
    </View>
  );
};
