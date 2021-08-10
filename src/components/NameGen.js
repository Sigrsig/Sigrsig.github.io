import React, { Component } from 'react'

class NameGen extends Component {
    

    findName = () => {
        return 
    }

    render() {
        return (
            <div>
                <p id="final-name-text">-</p>
                <button id="final-butt" onClick={this.findName}>Click</button>
            </div>
        )
    }
}

export default NameGen
