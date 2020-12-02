/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import ReactDOM from 'react-dom';
import App from './App'
import './index.css';
import './App.css'


const Reusable = () => {
        const [count, setCount] = useState(0);
        const [someState, setSomeState] = useState(10);

        const add = () => {
            setCount(count + 1)
        }

        const subtract = () => {
            if (count > 0) {
                setCount(count - 1)
            }
        }

        return ( <
            section >
            <
            h2 className = "textColor" > Counter: The Most Novel Example I Could Come Up With < /h2>  <
            div className = "textColor" > hi there < /div>

            <
            div className = "counter" >
            <
            button onClick = { subtract } > - < /button> <
            input value = { count }
            onChange = {
                (event) => {
                    setCount(parseInt(event.target.value))
                    setSomeState(count * 10)
                }
            }
            /> <button onClick = { add } > + </button > < /div><App/ > < /section > )
        }



        ReactDOM.render( < Reusable / > , document.getElementById('root'));