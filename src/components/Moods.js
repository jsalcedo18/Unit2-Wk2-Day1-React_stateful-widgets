/*
MOODS Instructions
 
Watch this short video: 🥇
https://tk-assets.lambdaschool.com/fe491c4f-395b-425c-b62e-3fbebf3cbb3f_moods-clip.gif

💭
happy is royalblue
sad is crimson
1 state: happy or sad
💭

STEP 0: 🥇
  Study the component below, and import the state hook.

STEP 1: 🥇
  Create a 'mood', 'setMood' pair using the state hook.
  The 'mood' slice of state should be initialized to one of the three variables right below our imports.
  Those variables exist so we don't need to write those long strings anywhere inside the component.

STEP 2: 🥇
  Make the color of the text be royalblue if the state of the mood is happy, crimson otherwise.

STEP 3: 🥇
  Remove the hard-coded mood and interpolate the 'mood' slice of state instead, using curly brackets.

STEPS 4, 5, 6:
  Inside these click handlers set the correct mood, using 'setMood' and the variables below the imports.
*/

import React, { useState } from 'react'; /* STEP 0 */

const initialMood = 'Not Sure How I Feel 🤔';
const happyMood = 'Im Happy! 😄';
const sadMood = 'Im abit sad...😔';

export default function Moods() {
  /* STEP 1 */
    const [mood, setMood] = useState(initialMood);

  const makeHappy = () => {
    /* STEP 4 */
  };
  const makeSad = () => {
    /* STEP 5 */
  };
  const reset = () => {
    /* STEP 6 */
  };

    const style = {
      fontSize: '1.5em',
      marginBottom: '0.3em',
      color: mood === happyMood ? 'royalblue' : 'crimson', /* STEP 2 */
    };

  return (
    <div className='widget-moods container'>
      <h2>Moods</h2>
      <div id='mood' style={style}>{mood}</div> {/* STEP 3 */}
      <div>
        <button id='makeHappy' onClick={makeHappy}>Make Happy</button>
        <button id='makeSad' onClick={makeSad}>Make Sad</button>
        <button id='resetMood' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
