//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const giga = 1_000_000_000_000

export const gigasecond = dataValue => new Date(dataValue.getTime() + giga);
