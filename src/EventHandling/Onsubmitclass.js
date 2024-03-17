import React, { Component } from 'react'

export default class Onsubmitclass extends Component {
    data(e){
        e.preventDefault();
        console.log("Submitted Sicessfull");
    }
  render() {
    return (
      <div>
         <form onSubmit={this.data}>
            <button> Submit </button>
            </form>
      </div>
    )
  }
}
