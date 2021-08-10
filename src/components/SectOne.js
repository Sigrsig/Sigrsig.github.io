import React from 'react'

function SectOne(props) {
    
    return (
        <div>
            <p>{props.thestates}</p>
            <button id="dsix" onClick={() => props.rollDSix(6)}>Hi</button>
        </div>
    )
}

export default SectOne
