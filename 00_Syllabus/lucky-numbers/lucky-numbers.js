// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2)
{
  return Number(array1.join('')) + Number(array2.join(''));
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value)
{
  let valueStr = String(value),
  strLength = valueStr.length,
  halfStrLength = strLength / 2;

  for (let i = 0; i < halfStrLength; i++)
  {
    if (valueStr[i] !== valueStr[strLength - 1 - i])
    {
      return false;
    }
  }
  return true;
  /*  return value == [...String(value)].reverse().join(''); it will not compare types
  value === Number([...String(value)].reverse().join(''));
  */
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input)
{
  if (!input)
  {
    return 'Required field';
  }
  else if (!Number(input))
  {
    return 'Must be a number besides 0';
  }
  else
  {
    return "";
  }
}
