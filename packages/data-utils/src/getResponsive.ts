import { Dimensions } from 'react-native';

type Base4 =
  | 0
  | 2
  | 4
  | 8
  | 12
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96
  | 100
  | 104
  | 108
  | 112
  | 116
  | 120
  | 124
  | 128
  | 132
  | 136
  | 140
  | 160
  | 180
  | 200
  | 300
  | 320
  | 340
  | 380
  | 400
  | 500
  | 600
  | 640
  | 700
  | 800
  | 1000;

/**
 * Guideline sizes are based on the smallest device (iPhone SE)
 */
const guidelineBaseWidth = 750 / 2;
const guidelineBaseHeight = 1334 / 2;

const responsiveLargest = (size: Base4) => {
  const { height, width } = Dimensions.get('window');
  if (width > height) {
    return Math.floor((width / guidelineBaseWidth) * size);
  }
  return Math.floor((height / guidelineBaseHeight) * size);
};

/**
 * Calculates a responsive size based on a given base size and a scaling factor.
 * Design for the smallest screen, and this function should make the sizing scale to the largest screen.
 */
export const getResponsive = (size: Base4, factor = 0.25) => {
  return Math.floor(size + (responsiveLargest(size) - size) * factor);
};
