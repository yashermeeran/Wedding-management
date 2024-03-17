import React from 'react'

export default function Onclickeventfunction() {
  function Abc(){
    alert("Submited Succesfully")
  }
  var lenght=()=>alert("Arrow Function Excicuted");
  return (
    <div>
        <button onClick={Abc}>Submitfunction</button><br/>
        <button onClick={lenght}>SubmitArrowfunction</button>
    </div>
  )
}
