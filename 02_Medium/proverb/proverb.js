//
// This is only a SKELETON file for the 'Proverb' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const proverb = (...inputs) =>
{
  if (!inputs[0])
  {
    return "";
  }
  else if (typeof inputs[inputs.length - 1] === 'string')
  {
    return buildProverb(inputs) + `And all for the want of a ${inputs[0]}.`;
  }
  else
  {
    return buildProverb(inputs.slice(0, -1)) + `And all for the want of a ${inputs[inputs.length - 1].qualifier} ${inputs[0]}.`
  }
};

function buildProverb(array)
{
  let text = "";
  for (let i = 1; i < array.length; i++)
  {
    text += `For want of a ${array[i-1]} the ${array[i]} was lost.\n`
  }
  return text;
}
