import React from 'react'

function Buttons(props) {
  return (
    <div>      
        <div className="flex justify-center m-6 items-center gap-7">
        <button
        style={{opacity:props.index==1?0.3:1 }}
          onClick={() => {
            if(props.index>1){
              props.setIndex(props.index-1)
              props.setUserData([])
            }
          }}
          className="bg-blue-500 text-white rounded px-4 py-2 active:bg-cyan-400 active:scale-95"
        >
          Prev
        </button>
        <h3>Page {props.index}</h3>
        <button
          onClick={() => {
            props.setIndex(props.index+1)
            props.setUserData([])
          }}
          className="bg-blue-500 text-white rounded px-4 py-2 active:bg-cyan-400 active:scale-95"
        >
          Next
        </button>
      </div></div>
  )
}

export default Buttons