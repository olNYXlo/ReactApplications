import React from 'react';
import ReactDOM from 'react-dom';
// import React, {Component} from 'react';
// import React, {useState} from 'react';

// the entire application is divided into a small logical group of code, which is known as
// components are core building blocks of a react application
// react component have their own structure, method as well as APIs
// Class (stateful) components, functional (stateless) component [returns jsx]
// JSX (JavaScript XML) : conditional (ternary) expressions, instead of if else condition
//=======================================================================================
// EXAMPLE 1 - function component

function EX1(){

    const greeting = "NiHao.. I am a Function";

    return <div>
        <h1>{greeting}</h1>
        <h2>{2+3}</h2>
    </div>;

}
// export default EX1; // exports function as a JSX file
//=======================================================================================
// EXAMPLE 2 - class component
// class EX2 extends Component      can be used instead provided first line is
// import React, {Component} from 'react'   as performance faster as only import necessary library
class EX2 extends React.Component{
    render(){
        return(
            <div className = "EX2">
                <h1>
                    NiHao.. I am a class
                </h1>
            </div>
        )
    }
}
// export default EX2;
//=======================================================================================
// EXAMPLE 3 - Function which returns JSX
// Function returning another Function
function EX3(){
    return <Headline />; // Headline is a JSX
}

function Headline(){
    const greeting = "NiHao, i am a function component made from another function component";
    return <h1>{greeting}</h1>;
}
// export default EX3;
//=======================================================================================
// EXAMPLE 4 - Function that takes in props
function EX4(){
    const greeting = 'PROPS';

    return <HeadlineEX4 value = {greeting} />;
    // value is the AttributeName
}
function HeadlineEX4(props){
    return <h1>{props.value}</h1>;
    // props.AttributeName
}
// export default EX4;
//=======================================================================================
// EXAMPLE 5 - Arrow Function form of function that takes in props
const EX5 = () => {
    const greeting = 'Arrow Function => called from another function';
    return <HeadlineEX5 value = {greeting} />;
};

const HeadlineEX5 = ({value}) => {
    return <h1>{value}</h1>;
};

// Arrow function accesses the value of Attribute with name 'value'
// Must specify with the AttributeName else will not return anything

// export default EX5;

//=======================================================================================
// EXAMPLE 6 - 3 Nested Arrow Functions
const EX6 = () => {
    const header = "1st Arrow => ";
    return <ol><Arrow2 head = {header} /></ol>;
    // returns an Arrow2 function inside an Ordered List element
};

const Arrow2 = ({head}) => {
    const middle = "2nd Arrow => ";
    return <li>{head}
    <Arrow3 mid = {middle} /></li>;
    // returns a list item of {head} & an Arrow3 functions inside a list item element
};

const Arrow3 = ({mid}) => {
    return <li>{mid}
    <li>3rd Arrow => </li></li>;
    //returns a list item of {mid} in a list item element
    // also returns another list item of 3rd Arrow
};
// export default EX6;

//=======================================================================================
// EXAMPLE 7 - UseState (React Hooks)
const EX7 = () => {
    return <HeadlineEX7 />;
}

const HeadlineEX7 = () => {
    const [greeting, setGreeting] = React.useState('NiHao');
    // takes in StateName & SetStateFunctionName
    return <h1>{greeting}</h1>;
}
export default EX7

//=======================================================================================


//=======================================================================================