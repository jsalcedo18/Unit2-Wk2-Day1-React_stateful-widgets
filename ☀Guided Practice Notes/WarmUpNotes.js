//Warm Up Notes
//Definition: User Interface Component Library
    //Job: taking data and rendering UI
    //Vitrual DOM: Its own engine; takes the code then compiles it to the screen
    //Not HTML but a new JSX

//reactjs.org Notes...
//A Simple Component:
    //- render () : a method that takes data and returns it to the display using this.props
    class HelloMessage extends React.Component {
        render() {
            return (
            <div>
                Hello my name is {this.props.name}. My number is {this.props.number}
            </div>
            );
        }
        }

        ReactDOM.render(
        <HelloMessage name="Taylor" number="808"/>,
        document.getElementById('hello-example')
        );

//- Stateful Component: can maintain internal state by (this.state). When the state changes, the rendered data will be updated by re-invoking render()
        class Timer extends React.Component {
        constructor(props) {
            super(props);
            this.state = { seconds: 0 };
        }

        tick() {
            this.setState(state => ({
            seconds: state.seconds + 1
            }));
        }

        componentDidMount() {
            this.interval = setInterval(() => this.tick(), 1000);
        }

        componentWillUnmount() {
            clearInterval(this.interval);
        }

        render() {
            return (
            <div>
                Seconds: {this.state.seconds}
            </div>
            );
        }
        }

        ReactDOM.render(
        <Timer />,
        document.getElementById('timer-example')
        );

//- Application: props & state could create a To Do Application. 
    //- state tracks the current list of items and the text the user entered:
        class TodoApp extends React.Component {
        constructor(props) {
            super(props);
            this.state = { items: [], text: '' };
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        render() {
            return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="new-todo">
                    What needs to be done?
                </label>
                <input
                    id="new-todo"
                    onChange={this.handleChange}
                    value={this.state.text}
                />
                <button>
                    Add #{this.state.items.length + 1}
                </button>
                </form>
            </div>
            );
        }

        handleChange(e) {
            this.setState({ text: e.target.value });
        }

        handleSubmit(e) {
            e.preventDefault();
            if (this.state.text.length === 0) {
            return;
            }
            const newItem = {
            text: this.state.text,
            id: Date.now()
            };
            this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
            }));
        }
        }

        class TodoList extends React.Component {
        render() {
            return (
            <ul>
                {this.props.items.map(item => (
                <li key={item.id}>{item.text}</li>
                ))}
            </ul>
            );
        }
        }

        ReactDOM.render(
        <TodoApp />,
        document.getElementById('todos-example')
        );

//⭐React Components...
    //imports of 2 different librarys
    import React from "react";
    import ReactDOM from "react-dom";
    import "./styles.css";

    //react component:
    function App () { //components must be capitalized
        return null; //will return a react element, if theres nothing...input "null"
    }
        //Old Way: Would be alot if needing to create a lot of react elements
        function App () { // Will get created in the "root" div in the HTML
            return React.createElement('div', {id: 'greet'}, 'Hello'); // div =element creating, {id:} =id name for it, 'text content of it
        }

        //💯JSX New Way:
        function App () { 
            const id = 'greet';
            const text = 'Hello';
            return <div className= 'my-greet' id={id}>{text}</div>; //What will end up on the page
        }
        //OR
        const id = 'greet';
        const text = 'Hello';

        function App () { 
            return <div className= 'my-greet' id={id}>{text + 'World'}</div>; //You can pull from outside scope, but outside can't pull from inside function App
        }

//this rootElement is called the: anchor element
const rootElement = document.getElementById('root'); //rootElement is not a react element, its a element from the DOM hence the .getElementById
                                                     //Information created in this will be injected into the html's div called "root"

//⭐Invoking: You can only have ONE of these
        //Old Way:
        ReactDOM.render( //2 different libraries and passing in 2 arguements
            React.createElement(App), //argument 1: creating the component from the function App (line 36) an adding it to the React library
            rootElement //argument 2: anchor element to inject mark up
        );
                /*Notes:
                ReactDOM.render( //appending
                React.createElement(App), //this element
                rootElement //here
                );
                */

        //💯New Way:
        ReactDOM.render( 
            <App />, 
            rootElement 
        );

//⭐React Component State:

//Requirements:
//Bulb should have a slice of state called 'isBulbOn' (a light bulb only cares if its on or on. One state that has 2 values)
//isBulbOn can have one of 2 values: true or false
//How do we want it to start/default: isBulbOn should start out as false
//How do we change the state?: Bulb needs a "state setter", a function called 'setIsBulbOn'
//setIsBulbOn(true) --> isBulbOn changes to true
//setIsBulbOn(false) --> isBulbOn changes to false

//1st Step: Need to add a React Utility
import React, { useState } from "react"; //when invoked, it will return something
import ReactDOM from "react-dom";
import "./styles.css";

    //Understanding Way
    function Bulb() {
        const something = useState(false); //inject the default result (line 186)... something is an array
        const isBulbOn = something[0];
        const setIsBulbOn = something[1];
        return null;
    }

    const rootElement = document.getElementById('root');
    ReactDOM.render(<Bulb />, rootElement);

    //Old Way
    function Bulb() {
        const [isBulbOn, setIsBulbOn] = useState(false); 

        setTimeout(()=> {
            setIsBulbOn(!isBulbOn) //turn it on if its off and vice versa... but w/it doing itself, the computer is doing it not the user (problem)
        }, 1000)
        
        if (isBulbOn) {
            return <div>The lightbulb is ON</div>
        }
        return <div>The lightbulb is OFF</div>
    }

    const rootElement = document.getElementById('root');
    ReactDOM.render(<Bulb />, rootElement);

    //💯New Way
    function Bulb() {
        const [isBulbOn, setIsBulbOn] = useState(false); 

        setTimeout(()=> {
            setIsBulbOn(!isBulbOn)
        }, 1000)
        
        return <div>The lightbulb is {isBulbOn ? 'ON!' : 'off.'}</div> //if isBulbOn then(?) return "ON!" else(:) return 'off.' = called a ternary
     };

    const rootElement = document.getElementById('root');
    ReactDOM.render(<Bulb />, rootElement);

//⭐Changing React Component State with Event Listeners

//2 seperate slices of states
    //healthPoints 0 - ? (numbers)
    //isHappy true or false (boolean)
function Hero() {
    const [healthPoints, setHealthPoints] = useState(100); //starts at 100
    const [isHappy, setisHappy] = useState(true); //starts at true(happy)
    const eatGreat = e => {
        setHealthPoints(healthPoints + 20);
    }
    const eatTerrible = e => { //e = event object
        setHealthPoints(healthPoints - 30);
        setisHappy(false);
    }

    return (
        <div>
            <div>Health Points: <span>{healthPoints}</span> </div> //output: Health Points: 100
            <div>{isHappy ? 'Really Happy' : 'Having a bad day'}</div> //depends on what inputs in line 245

            <button onClick={eatGreat}>Have a great meal</button> //button will have a callback that will trigger the health points setter causing an increase to the Health Points #
            <button onClick={eatTerrible}>Have a great meal</button> 
        </div> //end of whole div
    );
 };

 //triggering the 1st index's (healthPoints & isHappy) to make the whole function re-render
const rootElement = document.getElementById('root');
ReactDOM.render(<Hero />, rootElement);
