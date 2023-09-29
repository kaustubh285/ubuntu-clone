import React from "react";
import "./dock.css";

function Dock({ screenBrightnessLevel }) {
  return (
    <div className='dock' style={{ opacity: { screenBrightnessLevel } }}>
      <div
        className='dock__apps flex flex-col w-8/12 mx-2 items-center'
        style={{ opacity: { screenBrightnessLevel } }}>
        <div className='chrome-img-dock h-9 w-9 my-3 cursor-pointer opacity-70 hover:opacity-90' />
        <div className='gedit-img-dock h-10 w-9 my-3 cursor-pointer opacity-70 hover:opacity-90' />

        <img
          width='48'
          height='48'
          className='my-1 cursor-pointer opacity-70 hover:opacity-90'
          src='https://img.icons8.com/color/48/folder-invoices--v1.png'
          alt='folder-invoices--v1'
        />
        <div className='chrome-img-dock h-9 w-9 my-3 cursor-pointer opacity-70 hover:opacity-90' />
        <div className='chrome-img-dock h-9 w-9 my-3 cursor-pointer opacity-70 hover:opacity-90' />
      </div>
    </div>
  );
}

export default Dock;
