import { type ColorName, colorNames } from './colorNames';

export const getDropShadow = (backgroundColor: ColorName) => {
  if (backgroundColor === 'transparent') return {};
  return {
    backgroundColor: colorNames[backgroundColor],
    elevation: 2,
    shadowColor: colorNames.black,
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  };
};
