//
// This is only a SKELETON file for the 'Rectangles' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

let findRegConer = (input) => input === "+";
let findRowConnet = (input) => input === "-";
let findColConnect = (input1, input2) => input1 === "|" && input2 === "|" || input1 === "+" && input2 === "|" || input1 === "|" && input2 === "+";

export function count(array)
{
  let counts = 0;

  for (let i = 0; i < array.length - 1; i++)
  {
    for (let x = 0; x < array[i].length - 1; x++)
    {
      if (findRegConer(array[i][x]))
      {
        for (let y = x + 1; y < array[i].length; y++)
        {
          if (findRegConer(array[i][y]))
          {
            for (let n = i + 1; n < array.length; n++)
            {
              if (findRegConer(array[n][x]) && findRegConer(array[n][y]))
              {
                counts++;
              }
              else if (findColConnect(array[n][x], array[n][y]))
              {
                continue;
              }
              else
              {
                break;
              }
            }
          }
          else if (findRowConnet(array[i][y]))
          {
            continue;
          }
          else
          {
            break;
          }
        }
      }
    }
  }
  return counts;
}
