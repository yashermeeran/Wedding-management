import React from 'react'

export default function Onkeydownevent() {
    const data=(e)=>{
        console.log(e.key,e.keyCode)
    }
  return (
    <div>
        <input type="text" onKeyDown={data}/>

    </div>
  )
}
