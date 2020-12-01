import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

// eslint-disable-next-line no-lone-blocks


const CharacterCounterInput = ({ text, defaults }) => {
    const [message, setMessage] = useState('')
    const maxLength = 280

    return <div className = "counterInput" >
        <
        div > {
            defaults.map((b) => {
                return <button key = { b }
                onClick = {
                    () => {
                        setMessage(b)
                    }
                } > { b } < /button>
            })
        } <
        /div> <
    textarea
    placeholder = { text }
    value = { message }
    onChange = {
        (event) => {
            setMessage(event.target.value)
        }
    }
    /> <
    div > { message.length }
    /{maxLength}</div >
    <
    /div>
}


function App() {
    let defaultMoods = ["Great", "Okay", "Bad", "TERRIBLE"]

    return ( <
        section >
        <
        h2 > Mood Tracker < /h2> <
        CharacterCounterInput text = { "How was your day?" }
        defaults = { defaultMoods }
        /> < /
        section >
    );
}


ReactDOM.render( < App / > , document.getElementById('root'));
// ReactDOM.render( < Reusable / > , document.getElementById('root'));