import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div>
                <form onSubmit = {this.props.getWeather}>
                    <input type="text" name="city" value={this.props.input} onChange={this.props.onChange} placeholder="city" />
                    <button>Get Weather</button>
                </form>
            </div>
        )
    }
}

