/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remainingTime)
{
  if (remainingTime === 0)
  {
    return 'Lasagna is done.';
  }
  else if (remainingTime > 0)
  {
    return 'Not done, please wait.';
  }
  else
  {
    return 'You forgot to set the timer.';
  }
}

export function preparationTime(layers, AveragePreparTime = 2)
{
  return layers.length * AveragePreparTime;
}

export function quantities(layers)
{
  return {
   noodles: layers.filter(i => i === 'noodles').length * 50,
   sauce: layers.filter(i => i === 'sauce').length * 0.2,
  }
  /*return
  {
    noodles: itemCounter(layers, "noodles") * 50,
    sauce: itemCounter(layers, "sauce") * 0.2
  };
  */
}

function itemCounter(array, item)
{
  let counter = 0;
  for (let i = 0; i < array.length; i++)
  {
    if (array[i] === item)
    {
      counter++;
    }
  }
  return counter;
}

export function addSecretIngredient(friendsList, myList)
{
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, portions)
{
  let recipeCopy = Object.assign({}, recipe);
  //https://www.digitalocean.com/community/tutorials/copying-objects-in-javascript
  for (let key in recipeCopy)
  {
    recipeCopy[key] = recipeCopy[key] * portions / 2;
  }
  return recipeCopy;
}
