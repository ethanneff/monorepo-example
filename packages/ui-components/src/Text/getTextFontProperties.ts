import { getResponsive, getTypescriptAssertNever } from '@repo/data-utils';
import { getFuturaFontFamily } from './getFuturaFontFamily';
import { type FontEmphasis, type FontFamily, type TextVariant } from './types';

type FontProperties = {
  fontFamily: FontFamily;
  fontSize: number;
};

export const getTextFontProperties = (
  variant: TextVariant,
  emphasis: FontEmphasis = 'medium',
): FontProperties => {
  const futuraFontFamily = getFuturaFontFamily(emphasis);

  switch (variant) {
    case 'body1': {
      return {
        fontFamily: futuraFontFamily,
        fontSize: getResponsive(20),
      };
    }
    case 'body2': {
      return {
        fontFamily: futuraFontFamily,
        fontSize: getResponsive(16),
      };
    }
    case 'body3': {
      return {
        fontFamily: futuraFontFamily,
        // @ts-expect-error non base4 override
        fontSize: getResponsive(14),
      };
    }
    case 'body4': {
      return {
        fontFamily: futuraFontFamily,
        fontSize: getResponsive(12),
      };
    }
    case 'body5': {
      return {
        fontFamily: futuraFontFamily,
        // @ts-expect-error non base4 override
        fontSize: getResponsive(10),
      };
    }
    case 'header1': {
      return { fontFamily: 'Lemon-Regular', fontSize: getResponsive(24) };
    }
    case 'header2': {
      // @ts-expect-error non base4 override
      return { fontFamily: 'Lemon-Regular', fontSize: getResponsive(18) };
    }
    case 'header3': {
      // @ts-expect-error non base4 override
      return { fontFamily: 'Lemon-Regular', fontSize: getResponsive(14) };
    }
    case 'header4': {
      return { fontFamily: 'Lemon-Regular', fontSize: getResponsive(12) };
    }
    case 'monospace': {
      return {
        fontFamily: 'AmericanTypewriter',
        fontSize: getResponsive(12),
      };
    }
    default: {
      return getTypescriptAssertNever(variant);
    }
  }
};
