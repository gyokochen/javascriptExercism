

export const transform = myObject => {
  let myNewObject = {};

  for (var index in myObject) {
    for (var x = 0; x < myObject[index].length; x++){
      myNewObject[myObject[index][x].toLowerCase()] = Number(index);
    }
  }
  return myNewObject;
}


// for (var index in myObject)
// That loop will iterate through the indexes which are the scores
// Inside that loop, you can loop the current array stored in that index
// for (var x = 0; x < myObject[index].length; x++)
// If you do not want support for old browsers, you can use "let" instead of "var" better
// Then you only need to do this: myNewObject[myObject[index][x]] = index;
// Before you must create the myNewObject = {}

//export const transform = input => {
//  const oldArray = Object.entries(input);
//  let newArray = [];
//  let array = [];
//  let newObject = {};

//  for (var i = 0; i < oldArray.length; i++) {
//    array = [];
//    array = oldArray[i][1].map(a => [a.toLowerCase()].concat(Number(oldArray[i][0])));
//    newArray = newArray.concat(array);
//  }

//  newObject = Object.fromEntries(newArray);
//  return newObject;


//};

//https://stackoverflow.com/questions/6605640/javascript-by-reference-vs-by-value
//https://www.educative.io/courses/step-up-your-js-a-comprehensive-guide-to-intermediate-javascript/7nAZrnYW9rG
