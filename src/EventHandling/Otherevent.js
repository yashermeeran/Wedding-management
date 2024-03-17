import React from 'react'
export default function Otherevent() {
    const datachange =(event)=>{
        if(event.type==="mouseover"){
            console.log("mouseovered")
        }
        if(event.type==="mouseout"){
            console.log("mouseouted")
        }
        if(event.type==="click"){
            console.log("clicked")
        }
        if(event.type==="dblclick"){
            console.log("doubleclicked")
        }
    }
   
  return (
    <div onMouseOver={datachange} onMouseOut={datachange} onClick={datachange} onDoubleClick={datachange}>
         
      Joseph Vijay Chandrasekhar (born 22 June 1974) is an Indian actor and singer who works predominantly in Tamil cinema. Vijay has acted in over 65 films and is one of the most commercially successful actors in Tamil cinema with multiple films amongst the highest-grossing Tamil films of all time and is amongst the highest paid actors in India.
    </div>
  )
}
