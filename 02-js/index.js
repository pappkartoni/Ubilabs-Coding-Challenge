// pad a value with leading zeros
function zeroFill( number, width )
{
 width -= number.toString().length;
 if ( width > 0 )
 {
   return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
 }
 return number + ""; // always return a string
}


/*

Code review:

- First of all it kinda works, but only for nonnegative numbers and certain decimal numbers
- When calculating the difference in line 4 it would count the sign of the negative number as part of the actual number which would lead to something along the lines of:
  zeroFill(-3, 4) => "00-3" when it should return -0003
- as it is not specified what should happen to a number that has more places than the provided width it just returns the number as is (but as string, more on that later), which is fine to me 
- Furthermore there is a problem when the length of a stringified decimal number is exactly equal to the width, e.g. 123.456 and width=7 as that returns "123.456" when it should return "0123.456"
  This is due to the condition in line 5 (width > 0) which does not properly cover said fringe case
- As for using an array to get to the leading zeros, that seems okay with me, obviously we have to convert away from a number in some way or JS would not let us have leading zeros in the first place.
- Checking if the number has a decimal point is also ok, even though it is not very intuitive on first look,
  you have to be familar with regex and more specifically the test method to understand line 7 at a glance
- For readability it might also be of use to split the line into multiple lines but as it is still pretty short i actually kind of like it like this,
  especially since using a ternary operator where using it inline is intended anyways
- using "+" for string concatenation is fine (even more performant than .concat() if i remember correctly?) but the input "number" is still just that, a number so it would be a better practice to
  transform it .toString() before concatenation even though adding a number to a string does work in JS automatically
- Not having transformed the input number to string at the start also means we have to do so in line 9 again (the case where the number is as long or longer than the width)
- this should however not be done by adding an empty string but rather .toString() again
*/


// your solution:
// have not extensively tested this, i just changed the things i wrote down at the top and used modulo operator for checking if number is decimal

const zeroFill2 = (number, width) => {
  if (number < 0) {
    return "-" + zeroFill2(-number, width)
  } else {
    const numStr = number.toString()
    const diff = width - numStr.length
    if (diff => 0) {
      return new Array(diff + (number % 1 == 0 ? 1 : 2)).join("0") + numStr
    } else {
      return numStr
    }
  }
}