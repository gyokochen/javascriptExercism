// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

const juiceTime =
{
  'Pure Strawberry Joy': 0.5,
  'Energizer': 1.5,
  'Green Garden': 1.5,
  'Tropical Island': 3,
  'All or Nothing': 5
};

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name)
{
  return juiceTime[name] || 2.5;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes)
{
  let cutTimes = 0,
  wedgesSum = 0;


  while (wedgesSum < wedgesNeeded)
  {
    switch (limes[cutTimes])
    {
      case 'small':
        wedgesSum += 6;
        break;
      case 'medium':
        wedgesSum += 8;
        break;
      case 'large':
        wedgesSum += 10;
        break;
      default:
        return cutTimes;
    }
    cutTimes++;
  }
  return cutTimes;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders)
{
  do
  {
    timeLeft -= timeToMixJuice(orders[0]);
    orders.shift();
  }
  while (timeLeft > 0);
  return orders;
}
