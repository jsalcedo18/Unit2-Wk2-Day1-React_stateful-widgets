/*
COUNTER Instructions
 
Watch this short video carefully, paying attention to the UI and Chrome Devtools:
https://tk-assets.lambdaschool.com/59036a85-0980-42c8-81ad-9afc8354497f_counter-clip.gif

How many slices of state do you think are necessary to act as "sources of truth" for all
the things that change in this widget? Give it some thought before continuing reading!

💭
Even Number = Blue (royalblue) & Odd is Red(crimson) (Toggle)
-3 Buttons:
Increment (+1), Decrement(-1), Reset(?)
"Number "
"(#)" (One State)
" is "
"even or odd"
*No props
💭
*/

// STEP 0: 🥇
// Start by studying the component below, and importing the state hook.
import React, { useState } from 'react';

// STEP 1: 🥇
// Using the state hook, create a 'count', 'setCount' pair.
// The 'count' state should be initialized to the number zero.
export default function Counter() {
  const [count, setCount] = useState(0);
  
  // STEP 4:
  // This click handler needs to use 'setCount' to schedule the 'count' to become the current 'count' plus one.
  // These state changes are not synchronous: the updated count arrives on the next run of the Counter component.
  // Do NOT simply do count++. The plus plus is forbidden! We never mutate a slice of state in place. Even if you could
  // reassign a const, React would not be aware anything changed. Always use the state updater, passing in a new value.
  const increment = () => {
    /* STEP 4 */
  };
  
  // STEP 5:
  // This click handler needs to use 'setCount' to set the 'count' to be the current 'count' minus one.
  // Do NOT do count--. That amounts to trying to mutate 'count' in place. This is the road to perdition.
  const decrement = () => {
    /* STEP 5 */
  };
  // STEP 6:
  // This click handler needs to use 'setCount' to set the 'count' to be zero again.
  const reset = () => {
    /* STEP 6 */
  };
  
  // STEP 2: 🥇
  // The 'style' object has the 'color' property hard-coded to "royalblue".
  // What the value of 'color' should be instead is a ternary expression that goes like this:
  // If count is even, then "royalblue", else "crimson".
  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: count%2 === 0 ? 'royalblue' : 'crimson'
  };
  
  // STEP 3: 🥇
  // We need to replace some hard-coded info in the JSX with expressions, interpolated inside curly brackets.
  // Start by replacing the character "0" with {count}. The 'count' slice of state is the source of truth here.✔
  // Then, replace the word "even" with a ternary: {if count is even number, then string "even", else string "odd"}.❔
  return (
    <div className='widget-counter container'>
      <h2>Counter</h2>

      <div id='count' style={style}>
        Number {count} is {count%2 === 0 ? 'Even' : 'Odd'}
      </div>

      <div>
        <button id='increment' onClick={increment}>Increment</button> 
        {/*instead of doing the function ^^^ you make it into a variable so the code is cleaner*/}
        <button id='decrement' onClick={decrement}>Decrement</button>
        <button id='resetCount' onClick={reset}>Reset</button>
      </div>

    </div>
  );
}
//------------------------------------------------------------------------------------------------------------
//Information from above that's not needed:
// A naive developer might say 3 different slices:
//   - The count
//   - Whether the text is color crimson or royalblue
//   - Whether the text reads "even" or "odd"

// But a single slice of state is all that's needed here: the count!
// The other things can simply be _derived_ from the count itself.
