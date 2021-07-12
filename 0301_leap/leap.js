//
// Expressions & operators practice 
// This is a simple math practice, the important part is to understand set.

export const isLeap = year => (year % 4 == 0) && (!((year % 100 ==0) && ( year % 400 != 0 ))) ;


//https://www.w3schools.com/js/js_comparisons.asp
//条件运算
// Another solution in community -- use of Conditional (ternary) operator

//  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
