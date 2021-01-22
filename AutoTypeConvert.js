//null is automatically recognized as zero
console.log(8 * null)

//"5"  becomes 5 (from string to number)
console.log("5" - 1)

//+ tries string concatenation
//before numeric addition, so the 1 is converted to "1" (from number to string).
console.log("5" + 1)

/*When something that doesn’t map to a number in an obvious way (such as
"five" or undefined) is converted to a number, you get the value NaN.*/
console.log("five" * 2)

/*you should get true when both values are the same, except in the case
of NaN.
*/
console.log(false == 0)
