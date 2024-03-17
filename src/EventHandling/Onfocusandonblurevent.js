import React from 'react'

export default function Onfocusandonblurevent() {
    const datachange=(event)=>{
        if(event.type==="focus"){
            console.log("input focused")
        }
        if(event.type==="blur"){
            console.log("input blured")
        }
    }
     
  return (
    <div>
        <input type="text" onFocus={datachange} onBlur={datachange} />
    </div>
  )
}
