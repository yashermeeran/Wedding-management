import React from 'react'

export default function Onsubmit() {
    function data(e){
        e.preventDefault();
        console.log("Submitted Sicessfull");
    }
  return (
    <div>
        <form onSubmit={data}>
            
        <button> Submit </button>
        </form>
    </div>
  )
}
