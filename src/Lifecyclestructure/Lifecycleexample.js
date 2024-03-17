import React, { Component } from 'react'

export default class Lifecycleexample extends Component {
  constructor(){
    super();
    console.log("constructor data")
    this.state={day:new Date()}
  }
  componentDidMount(){
  console.log("componentDidMount data")
  this.timer=setInterval(
    ()=>this.daytimes(),1000
  )
  }
  daytimes(){
    console.log("daytimes method");
    this.setState({day:new Date()})
  }
  componentWillUnmount(){
    console.log(" componentWillUnmount method");
    
    clearInterval(this.timer);
  }
  render() {
    console.log("render data")
    return (
      <div>Lifecycleexample
        <h1>{this.state.day.toLocaleString()}</h1>
        <button onClick={this.componentWillUnmount.bind(this)}>stop</button>
      </div>
    )
  }
}
