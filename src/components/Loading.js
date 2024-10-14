import React from 'react';
import spinner from "./Settings.gif"
    
function Loading(props) {
  return (
    <>
    <div className="d-flex justify-content-around align-items-center" style={{height:`${props.height}`}}>
    <img src={spinner} alt="Loading..." />
    </div>
    </>
  );
}

export default Loading;