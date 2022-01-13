//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const answer = (str) =>
{
  // deffirent erros
  const errors =
  {
    unknowOpe: "Unknown operation",
    syntax: "Syntax error"
  };
  // different operations
  const opes =
  {
    plus: (a, b) => a + b,
    minus: (a, b) => a - b,
    multiplied: (a, b) => a * b,
    divided: (a, b) => a / b
  };

  //based on the conditions, give errors
  if (!str.includes("What is"))
  {
    throw new Error(errors.unknowOpe);
  }

  let strArray = str.replace(/by |\?/g, "").split(" ").slice(2);
  switch (strArray.length)
  {
    case 0:
      throw new Error(errors.syntax);

    case 1:
      if (Number(strArray[0]))
      {
        return Number(strArray[0]);
      }
      else
      {
        throw new Error(errors.syntax);
      }

    case 2:
      throw Number(strArray[0]) && !opes[strArray[1]] ? new Error(errors.unknowOpe) : new Error(errors.syntax);

    default:
      if (strArray.length % 2 === 0)
      {
        throw new Error(errors.syntax);
      }
      else
      {
        for (var i = 1; i < strArray.length; i = i+2)
        {
          if (!Number(strArray[i-1]) || !Number(strArray[i+1]) || !opes[strArray[i]])
          {
            throw new Error(errors.syntax);
          }
          strArray[i+1] = opes[strArray[i]](Number(strArray[i-1]), Number(strArray[i+1]));
        }
        return strArray[strArray.length - 1];
      }
  }


};
