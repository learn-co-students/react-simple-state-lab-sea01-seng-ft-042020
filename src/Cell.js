import React, { Component } from 'react'
import { render } from 'enzyme'

export default class Cell extends Component {

    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }

    changeColor = () => {
        const newColor = '#333'
        this.setState({
            color: newColor
        })
    }

    render() {
        const color = this.state.color
        return (
            <div className="cell" style={{backgroundColor: color}} onClick={this.changeColor}></div>
        )
    }
}
