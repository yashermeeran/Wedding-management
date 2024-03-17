import React from 'react'
import propTypes from 'prop-types'
export default function Mapfunction(props) {
    return (
        <div>
            <h1>
                Name :{props.name}
                Age :{props.age}
                Email:{props.email}
            </h1>
          Language :<ul>{
                props.language.map((x,i) => {
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
Mapfunction.propTypes={
    name:propTypes.string,age:propTypes.string,language:propTypes.array
}
Mapfunction.defaultProps={
    name:"defaultvalue"
}