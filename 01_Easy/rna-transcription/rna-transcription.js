//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const transform = {
  C: 'G',
  G: 'C',
  T: 'A',
  A: 'U'
};

export const toRna = dValue => [...dValue].map(each => transform[each]).join('');

//transform string => array
//https://www.samanthaming.com/tidbits/83-4-ways-to-convert-string-to-character-array/
//for each element in array transfored by object, to new array map
//transform array => string
//https://sebhastian.com/javascript-array-string/
