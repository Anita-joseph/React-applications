// eslint-disable-next-line 
import React, { useState, forwardRef, createElement } from 'react';
import './App.css';
import ButtonToggle from './App'
import FormToggle from './App'


const ToggleableForm = ({ options }) => {
    const [currentForm, setCurrentForm] = useState(0)
        // let focusRef = 0

    return ( < div > {
        options.map((el, index) => {
            return <ButtonToggle key = { `button${index}` }
            toggleForm = {
                () => {
                    setCurrentForm(index)
                }
            } > { el.name } < /ButtonToggle>
        })
    } < FormToggle currentIndex = { currentForm } > {
        options.map((el, index) => {
            return <div key = { `form${index}` } > {
                createElement(el.component, {
                    /* Hmm, what should go here?*/
                })
            } < /div>
        })
    } < /FormToggle></div > );
}

export default ToggleableForm