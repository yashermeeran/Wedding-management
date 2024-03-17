import React, { Component } from 'react'

export default class Childpropsexp extends Component {
  render() {
    return (
      <div>
        <h1>Child component </h1>
        <h1>{this.props.x}</h1>
        <h1>{this.props.y}</h1>
        <h1>{this.props.z}</h1>
        <h1>{this.props.data.Name}</h1>
        <h1>{this.props.data.Age}</h1>
      </div>
    )
  }
}
