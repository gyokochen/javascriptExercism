// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck)
{
  return deck.map((card) => card + card);
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck)
{
  if (deck.indexOf(3) === -1)
  {
    return deck;
  }

  for (let i = 0; i < deck.length; i++)
  {
    if (deck[i] === 3)
    {
      deck.splice(i, 0, 3, 3)
      i += 3
    }
  }
  return deck;
}
/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck)
{
  return deck.slice(deck.length / 2 - 1, deck.length / 2 + 1);
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with 10 cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck)
{
  let newdeck = deck.slice(1, deck.length - 1);
  newdeck.splice(deck.length / 2 - 1, 0, deck[deck.length - 1], deck[0]);
  return newdeck;
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck)
{
  return deck.filter((card) => card === 2);;
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck)
{
  return deck.sort((a, b) => a - b);
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck)
{
  return deck.reverse();
}
