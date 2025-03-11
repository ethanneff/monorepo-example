import dynamic from 'next/dynamic';
import React, { type PropsWithChildren } from 'react';

const Component = ({ children }: PropsWithChildren) => (
  <React.Fragment>{children}</React.Fragment>
);

/**
 * needed because react native code does not support next's preloaded ssr
 */
export const NoSSR = dynamic(() => Promise.resolve(Component), {
  ssr: false,
});
