/* eslint-disable react/jsx-no-undef */
import './App.css';

function App() {
    const data = [{
            label: 'Paris',
            icon: '🧀',
            content: <Description city = "paris" / > ,
        },
        {
            label: 'Lech',
            icon: '⛷',
            content: <Description city = "lech" / > ,
        },
        {
            label: 'Madrid',
            icon: '🍷',
            content: <Description city = "madrid" / > ,
        },
    ]

    return <div >
        <div className = "App" >
        <Accordion data = { data }
    position = "bottom" />
        </div> </div>

}

export default App;