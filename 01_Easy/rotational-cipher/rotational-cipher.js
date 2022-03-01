//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const plainLower = "abcdefghijklmnopqrstuvwxyz",
plainUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


export const rotate = (text, key) =>
{
  if (key % 26 === 0)
  {
    return text;
  }

  let transformed = "",
  newPosition = 0;


  for (let i = 0; i < text.length; i++)
  {
    if (plainLower.includes(text[i]))
    {
      newPosition = key + plainLower.indexOf(text[i]);
      transformed += plainLower[newPosition % 26];
    }
    else if (plainUpper.includes(text[i]))
    {
      newPosition = key + plainUpper.indexOf(text[i]);
      transformed += plainUpper[newPosition % 26];
    }
    else
    {
      transformed += text[i];
    }
  };
  return transformed;
};
