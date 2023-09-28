import React from "react";
import "./dock.css";
function Dock() {
  return (
    <div className='dock'>
      <div className='dock__apps flex flex-col w-8/12 mx-2 items-center'>
        <div className='chrome-img-dock h-9 w-9 my-3 cursor-pointer opacity-90 hover:opacity-100' />
        <div className='chrome-img-dock h-9 w-9 my-3 cursor-pointer opacity-90 hover:opacity-100' />
        <div className='chrome-img-dock h-9 w-9 my-3 cursor-pointer opacity-90 hover:opacity-100' />
      </div>
    </div>
  );
}

export default Dock;
