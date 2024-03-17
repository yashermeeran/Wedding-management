import React, { Component } from 'react'
import Childpropsexp from './Childpropsexp'

export default class Parentspropsexp extends Component {
  
  render() {
    var Name="angular";
    var Person =
    {
      Name:"Anu",
      Age:26
    }
    
    return (
      <div>
        <h1>Parent component</h1>
        <Childpropsexp x="hello child" y="Hai"  z={Name} 
        data ={Person}/>

      </div>
      
    )
  }
}
