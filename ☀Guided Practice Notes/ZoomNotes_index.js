import React from "react"; //allows us to write functions
import { render } from "react-dom"; //allows us to write the render statement
import Playground from "./components/Playground";

/*
💥💥💥 Rules when DECLARING a React component 💥💥💥
  - Name is capitalized
  - Takes an object ("props") as its one argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly brackets
  - We interpolate attribute values and content
*/

/*
💥💥💥 Rules when USING a React component 💥💥💥
  - Components are utilized (invoked?) so we may obtain elements
  - Instead of invoking the component with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly
*/

function App(props) {  //a react component ***Always starts with a capital..."props" pulls data
  const { cohort, instructor, happy, week } = props; // destructure...instead of needing to write props.cohort
  return (     //react components always need to have a return, even if its null;
    <div className="container">
      <h1>Welcome to React, Web {cohort}</h1>
      <div>{instructor} welcomes you!</div>

      {happy ? <div>Very happy</div> : <div>It is Monday</div>}
      //if happy is true then render ;Very Happy; div, if its false then render 'It is Monday' div

      <div>It is week {week}</div>

      <Playground cohort={cohort} /> //Imported Playground to this file (now assessable), for it to be rendered, insterting into function thats in the render
    </div>
  );
}

// only appears once per project
  //renders into the HTML
render(
  <App cohort="37" instructor="Rhiannon" happy={true} week={2} />,
  document.querySelector("#root") //targeting the div with an id of root
);
/*How to read that render:

render (argument 1, argument 2);
⬇
render (<App cohort="37" instructor="Rhiannon" happy={true} week={2} />, document.querySelector("#root"));
        "-------------------------A Component-------------------------"  "--------A DOM Element--------" */
