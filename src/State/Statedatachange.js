import React, { Component } from 'react'

export default class Statedatachange extends Component {
    constructor(props){
        super(props);
        this.state={ brand : "BMW"}
    }
    changevalue=()=>{this.setState({brand :"Thar"})}
  render() {
    return (
      <div>
         <h1>
            {this.state.brand}
        </h1>
        <button onClick={this.changevalue}>submit</button>
      </div>
    )
  }
}
