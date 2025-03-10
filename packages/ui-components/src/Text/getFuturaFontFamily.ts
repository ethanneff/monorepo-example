import { getTypescriptAssertNever } from '@repo/data-utils';
import { type FontEmphasis, type FontFamily } from './types';

export const getFuturaFontFamily = (emphasis: FontEmphasis): FontFamily => {
  switch (emphasis) {
    case 'heavy': {
      return 'FuturaStd-Heavy';
    }
    case 'light': {
      return 'FuturaStd-Light';
    }
    case 'medium': {
      return 'FuturaStd-Medium';
    }
    default: {
      return getTypescriptAssertNever(emphasis);
    }
  }
};
