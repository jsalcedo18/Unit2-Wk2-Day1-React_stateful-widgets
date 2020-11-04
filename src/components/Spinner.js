/*
SPINNER Instructions
 
Watch this short video:
https://tk-assets.lambdaschool.com/38201164-4df9-4c89-923b-5325dc72124d_spinner.gif

💭
state is ether true or false
💭


STEP 0: 🥇
  Start by studying the component below, and importing the state hook.

STEP 1: 🥇
  Create a 'spinnerOn', 'setSpinnerOn' pair of variables using the state hook.
  The 'spinnerOn' slice should be initialized to true so the spinner is visible on page load.

STEP 2: 🥇
  This is called a logical expression. If the expressions on both sides of the '&&' are truthy,
  the one on the right becomes the value of the whole line. If an expression on either side of the '&&'
  is falsy, the one on the left becomes the value of the whole line. It's a neat little trick to render
  a React element (in this case the spinner) conditionally: only if the variable on the left is truthy.

  Replace the hard-coded 'true' with the variable that keeps track of whether spinner is on or not.

STEP 3:
  Use a ternary expression inside the text of the button, to render "Hide" or "Show" depending on the value of 'spinnerOn'.

STEP 4:
  This click handler needs to toggle the spinner by setting "whether on" to be the opposite of what it currently is.
  Do you remember the operator we use to do "not"?
*/

import React, { useState } from 'react'; /* STEP 0 */

export default function Spinner() {
/* STEP 1 */
  const [spinnerOn, setSpinnerOn] = useState(true);

  const toggleSpinner = () => {
  /* STEP 4 */
  };

  return (
    <div className='widget-spinner container'>
      <h2>Spinner</h2>
      {
        spinnerOn && <div id='spinner' className='spinner'>--+--</div> /* STEP 2 */
      }
      <button id='toggleSpinner' onClick={toggleSpinner}>
        Hide Spinner {/* STEP 3 */}
      </button>
    </div>
  );
}
