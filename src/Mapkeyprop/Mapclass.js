import React, { Component } from 'react'

export default class Mapclass extends Component {
  render() {
  
    return (
      <div>
            <h1>
                Name :{this.props.name}
                Age :{this.props.age}
                Email:{this.props.email}
            </h1>
          Language :<ul>{
                this.props.language.map((x,i) => {
                    return <li key={i}>
                        {x}
                    </li>
            
                }
                )
            }
            </ul>
        </div>
    )
  }
}
