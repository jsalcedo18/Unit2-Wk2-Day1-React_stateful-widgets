/* Notes:
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - An slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/
//------------------------------------------------------------------------------------------------------------------------------------------
import React, { useState } from "react"; //Whatever we want to use in react, has to have this import, or the file wont communicate
  //useState is a state hook

//------------------------------------------------------------------------------------------------------------------------------------------
export default function Playground(props) { //This whole function, your exporting it out to another file

  const [count, setCount] = useState(0); // useState allows us to set internal state w/an initial state
        // const theArray = useState(0);         
        // const count = theArray[0];           <-- Old Way of writing it, but you want it D.R.Y (line 17)
        // const setCount = theArray[1];
  const [spinnerOn, setSpinnerOn] = useState(false); // it returns an array with two things: the state itself and a state changer function
  const [weapon, setWeapon] = useState("scissors");

  if (spinnerOn) {
    return (
      <div className="container">
        Please wait...Loading
        <button onClick={(event) => setSpinnerOn(false)}> Turn Spinner Off </button>
      </div>
    );
  }

    return (
      <div className="container">
        <h3>Playground for Web {props.cohort}</h3>
        <div>the count is {count}</div>

        <div>the current weapon is {weapon}</div>
          <button onClick={(event) => setWeapon("scissors")}>pick scissors</button>
          <button onClick={(event) => setWeapon("rock")}>pick rock</button>
          <button onClick={(event) => setWeapon("paper")}>pick paper</button>

          <button onClick={(event) => setCount(count + 1)}>increase</button>
       </div>
    );
} //end of playground function



return (
<div className="container "></div> //if you have multiple of the same; it will show an error bc JSX has to be in a component
<div className="container "></div>
<div className="container "></div>
);

//Solution:
return (
  <> //this is creating a component, with ...
  <div className="container "></div> //if you have multiple of the same; it will show an error bc JSX has to be in a component
  <div className="container "></div>
  <div className="container "></div>
  </> //all ^^^ inside as "1" Component or make the <> </> as 1 div that the other divs are in
  );