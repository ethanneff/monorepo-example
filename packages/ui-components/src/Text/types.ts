export type FontEmphasis = 'heavy' | 'light' | 'medium';

export type FontFamily =
  | 'AmericanTypewriter'
  | 'FuturaStd-Heavy'
  | 'FuturaStd-Light'
  | 'FuturaStd-Medium'
  | 'Lemon-Regular';

export const textVariants = [
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
