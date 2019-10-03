import Dashboard from './Dashboard';
import React from 'react';
import '../App.css';


function Display(props) {
    console.log(props)
    return (
        <div className="display">
            <div>
                {`Balls: ${props.balls}`}
            </div>
            <div>
                {`Strikes: ${props.strikes}`}
            </div>
        </div>
    )
}
export default Display;