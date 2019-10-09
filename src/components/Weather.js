import React, { Component } from 'react'
class Weather extends Component{
   
    render(){
        return(
          <div>
            <h4>Temperature :{this.props.temperature}</h4>
            <h4>City : {this.props.city} </h4>
            <h4>Minimum Temp : {this.props.mintemp} </h4>
            <h4>Max Temp : {this.props.maxtemp} </h4>
          </div>
        )
    }
}

export default Weather;