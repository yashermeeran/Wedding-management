import React, { Component } from 'react'

export default class Lifecyclestructure extends Component {
    constructor(){
        super();
        this.state={count:0}
        console.log("Constructor date")
    }
    componentDidMount(){
        console.log("mounting phase")
    }
    componentWillUnmount(){
        console.log("unmounting phase")
    }
  render() {
    console.log("App-rendered")
    return (
      <div>
        <h1>Hello world</h1>
        <p>Joseph Vijay Chandrasekhar (born 22 June 1974), known professionally as Vijay, is an Indian actor and playback singer who works predominantly in Tamil cinema. In a career spanning in just over 3 decades, Vijay has acted in over 65 films and is one of the most commercially successful actors in Tamil cinema with multiple films amongst the highest-grossing Tamil films of all time and is amongst the highest paid actors in India.</p>

      </div>
    )
  }
}
