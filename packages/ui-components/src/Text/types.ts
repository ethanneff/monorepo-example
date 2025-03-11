export type FontEmphasis = 'heavy' | 'light' | 'medium';

export type FontFamily =
  | 'AmericanTypewriter'
  | 'FuturaStd-Heavy'
  | 'FuturaStd-Light'
  | 'FuturaStd-Medium'
  | 'Lemon-Regular';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const textVariants = [
  'header1',
  'header2',
  'header3',
  'header4',
  'body1',
  'body2',
  'body3',
  'body4',
  'body5',
  'monospace',
] as const;

export type TextVariant = (typeof textVariants)[number];
