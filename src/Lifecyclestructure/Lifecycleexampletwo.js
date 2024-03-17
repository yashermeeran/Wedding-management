import React, { Component } from 'react'

export default class Lifecycleexampletwo extends Component {
    constructor(){
        super();
        console.log("constructor data")
        this.state={count:0}
        
      }
      componentDidMount(){
        console.log("componentDidMount data")
        }
        componentDidUpdate(){
            console.log("componentDidUpdate data")
        }
        test=()=>{
            this.setState({count:this.state.count + 2})
        }
  render() {
    return (
      <div>Lifecycleexampletwo  
        <h1>{this.state.count}</h1>
        <button onClick={this.test}>Add</button>

      </div>
    )
  }
}
