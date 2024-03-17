import React, { Component } from 'react'

export default class Arguementpassing extends Component {
    state={id:2,name:"Kaviya"}
    handleclick=(id,name)=>{
        console.log(id)
        console.log(name)
    }
    handledata=()=>{
        this.handleclick(3,"vijay");
    }
  render() {
    return (
      <div>
        <h1>{this.state.id}-{this.state.name}</h1>
        <button onClick={this.handledata}>click</button>
      </div>
    )
  }
}

