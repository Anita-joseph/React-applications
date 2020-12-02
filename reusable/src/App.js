/* eslint-disable no-unused-vars */
// eslint-disable-next-line


import React, { useState, useRef, forwardRef, createElement } from 'react';
import ReactDOM from 'react-dom';
import './App.css';



function App() {
    let data = [
        { name: 'Log in', component: LoginForm },
        { name: 'Sign up', component: SignupForm }
    ]
    return ( < section >
        <
        h2 > Log in , Sign up < /h2> <ToggleableForm options={data} / > < /section >
    )
}


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


const ButtonToggle = ({ children, toggleRef, toggleForm }) => {
    return ( < div > < button onClick = {
        () => {
            toggleForm()
        }
    } > { children } < /button> </div > );
}

const FormToggle = ({ children, currentIndex }) => {
        if (Array.isArray(children)) {
            return ( < div > { children[currentIndex] } < /div>);
            }
            return null
        }

        const LoginForm = forwardRef((props) => {
                    const [username, setUsername] = useState('')
                    const [password, setPassword] = useState('')

                    return ( < div > <
                        input type = "text"
                        value = { username }
                        onChange = {
                            (e) => {
                                setUsername(e.target.value)
                            }
                        }
                        />   <input type="password"
                        value = { password }
                        onChange = {
                            (e) => {
                                setPassword(e.target.value)
                            }
                        }
                        /> <button > Submit </button > < /div>);
                    })

                const SignupForm = (props) => {
                        const [email, setEmail] = useState('')
                        const [username, setUsername] = useState('')
                        const [password, setPassword] = useState('')

                        return ( < div > <
                            input type = "email"
                            value = { email }
                            onChange = {
                                (e) => {
                                    setEmail(e.target.value)
                                }
                            }
                            /> <
                            input type = "text"
                            value = { username }
                            onChange = {
                                (e) => {
                                    setUsername(e.target.value)
                                }
                            }
                            /><
                            input type = "password"
                            value = { password }
                            placeholder = "Password"
                            onChange = {
                                (e) => {
                                    setPassword(e.target.value)
                                }
                            }
                            /> <button> Submit </button > < /div> );
                        }


                        export default App

                        // ReactDOM.render( < App /> , document.getElementById('root'));
                        // ReactDOM.render( < Reusable /> , document.getElementById('root'));
                        // ReactDOM.render( < Reusable /> , document.getElementById('root'));