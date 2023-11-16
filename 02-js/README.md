### UBILABS TEST 2 
# JS CODING STYLES

Imaging you see this question on StackOverflow:

> **What is a good way to zerofill a value in JavaScript?** \
> \
> By "zerofilled" we mean it in the database sense of the word. \
> Eg. a 6-digit zerofilled representation of the number 5 would be "000005".

And the approved answer is:

```js
 function zeroFill( number, width )
 {
  width -= number.toString().length;
  if ( width > 0 )
  {
    return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
  }
  return number + ""; // always return a string
 }
```


### Your task

Do a code review on the provided solution. 

* Tell us what you think about it. 
* Hint: Bullet points are perfect!
* Write your own helper to solve the question.
* Limitation: The code should be ES5 compatible.

We'd like to see a list of things you would change or improve. 
Simply go through the code line by line and compile a list of what is good or bad.

Something like:

* Line X is hard to read. I would split this up.
* There is a symbol missing in line X
* I prefer UpperCase in line X, because of coding conventions
* There is an easier way to do stuff in line X

Try to collect as much as you can and make sure you do not spend more than half an hour on this task (you might even get this done in 15 minutes).

So, happy blaming ;)
