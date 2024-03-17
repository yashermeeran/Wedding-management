import React, { Component } from 'react'

export default class Onclickclassexp extends Component {
    constructor(){
        super();
        this.state={Gender: "Gender"}
    }
    changegender=()=>{this.setState({Gender :"Female"})}
    change=()=>{this.setState({Gender :"Male"})}
  render() {
    return (
      <div>
        <h1>
            {this.state.Gender}
        </h1>
        <button onClick={this.changegender}>Female</button>
        <button onClick={this.change}>Male</button>
      </div>
    )
  }
}
