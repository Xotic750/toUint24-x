import toNumber from 'to-number-x';
import modulo from 'modulo-x';
import sign from 'math-sign-x';
import numberIsFinite from 'is-finite-x';

const {floor, abs} = Math;

/**
 * The abstract operation ToUint24 converts argument to one of 2^24 integer
 * values in the range 0 through 2^24-1, inclusive.
 *
 * @param {number} argument - The argument to convert to one of 2^24 integers.
 * @returns {number} Integer value, 0 through 2^24-1, inclusive.
 */
const toUint24 = function toUint24(argument) {
  // Let number be ? ToNumber(argument).
  const number = toNumber(argument);

  // If number is NaN, +0, -0, +∞, or -∞, return +0.
  if (number === 0 || numberIsFinite(number) === false) {
    return 0;
  }

  // Let int be the mathematical value that is the same sign as number and
  // whose magnitude is floor(abs(number)).
  // Let int24bit be int modulo 2^24.
  return modulo(sign(number) * floor(abs(number)), 0x1000000);
};

export default toUint24;
