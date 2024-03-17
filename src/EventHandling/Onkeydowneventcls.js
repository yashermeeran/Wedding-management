import React, { Component } from 'react'

export default class Onkeydowneventcls extends Component {
    data=(e)=>{
        console.log(e.key,e.keyCode)
    }
  render() {
    return (
        <div>
        <input type="text" onKeyDown={this.data}/>

    </div>
    )
  }
}
