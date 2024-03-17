import React from 'react'

export default function Onresetevent() {
    const Onsubmitdata=(e)=>{
        e.preventDefault();
        console.log("Submitted Sucessfull");
    }
    const Onresetdata=(e)=>{
        console.log("reset Sucessfull");
    }
  return (
    <div>
        <form onSubmit={Onsubmitdata} onReset={Onresetdata}>
            <label>Name</label>
            <input type="text"/>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
        </form>
    </div>
  )
}
