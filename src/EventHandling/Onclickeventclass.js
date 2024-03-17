import React, { Component } from 'react'

export default class Onclickeventclass extends Component {
  Add(){
    alert("Submited Succesfully")
  }
  constructor(){
    super();
    this.state={count:5,x:100}
  }
  Increament(){
    this.setState({count:this.state.count +1})
  }
  Decreament(){
    this.setState({count:this.state.count -1})
  }
  Inc=()=>{
    this.setState({x:this.state.x +50})
  }
  Dec=()=>{
    this.setState({x:this.state.x -50})
  }
  render() {
    return (
      <div>
        <button onClick={this.Add}>submitClass</button><br/>
        <h1>Count Value is {this.state.count}</h1>
        <button onClick={this.Increament.bind(this)}>Increament</button>
        <button onClick={this.Decreament.bind(this)}>Decreament</button><br/>
        <h1>X Value is{this.state.x}</h1>
        <button onClick={this.Inc}>Increament x</button>
        <button onClick={this.Dec}>Decreament x</button>
      </div>
    )
  }
}
