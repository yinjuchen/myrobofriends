import React from "react";

const Scroll = (props) => {
  return (
    // css: overflow-y, jsx:overflowY
    <div style={{
      overflowY: 'scroll',
      // border: '5px solid black', 
      height: '800px'
    }}>
      {props.children}
    </div>
  )
}

export default Scroll
