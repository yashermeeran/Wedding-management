import React, { Component } from 'react'

export default class Stateexpfile extends Component {
    constructor(props){
        super(props);
        this.state={ brand : "BMW"}
    }
  render() {
     var name = "Angular";
    return (
      <div>
        <h1>
            {this.state.brand}
        </h1>
      </div>
    )
  }
}
