import dynamic from 'next/dynamic';
import React from 'react';

const Component = ({ children }: { children: React.ReactNode }) => (
  <React.Fragment>{children}</React.Fragment>
);

/**
 * needed because react native code does not support next's preloaded ssr
 */
export const NoSSR = dynamic(() => Promise.resolve(Component), {
  ssr: false,
});
