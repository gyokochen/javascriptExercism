//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const cost = (books) =>
{
  if (books.length === 0) return 0;

  const discount =
  {
   1: 1,
   2: 0.95,
   3: 0.9,
   4: 0.8,
   5: 0.75
  },
  bookPrice = 800;

  let discountNum =
  {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  };

  let bookList = {
    "1st": 0,
    "2nd": 0,
    "3rd": 0,
    "4th": 0,
    "5th": 0
  };

  for (let item of books)
  {
    switch (item)
    {
      case 1:
        bookList["1st"]++;
        break;
      case 2:
        bookList["2nd"]++;
        break;
      case 3:
        bookList["3rd"]++;
        break;
      case 4:
        bookList["4th"]++;
        break;
      case 5:
        bookList["5th"]++;
        break;
    }
  }

  // get all discountNum
  let bookNum = Object.values(bookList).filter(i => i>0);

  do
  {
    discountNum[bookNum.length]++;
    bookNum = bookNum.map(i => i - 1).filter(i => i>0);
  }
  while (bookNum.length > 0);

  //improve the discount, 3+5 --> 4*2
  if (discountNum[3] >= discountNum[5])
  {
    discountNum[3] -= discountNum[5];
    discountNum[4] += 2 * discountNum[5];
    discountNum[5] = 0
  }
  else if (discountNum[3] < discountNum[5])
  {
    discountNum[5] -= discountNum[3];
    discountNum[4] += 2 * discountNum[3];
    discountNum[3] = 0
  }

  return Math.round(bookPrice * (1 * discount[1] * discountNum[1] + 2 * discount[2] * discountNum[2]
  + 3 * discount[3] * discountNum[3] + 4 * discount[4] * discountNum[4]
  + 5 * discount[5] * discountNum[5]));

};
